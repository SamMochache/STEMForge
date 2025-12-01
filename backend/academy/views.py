from requests import Response
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle

from .models import Program, Registration, Booking, GalleryItem, BlogPost, Instructor
from .serializers import (
    ProgramSerializer, RegistrationSerializer, BookingSerializer,
    GallerySerializer, BlogSerializer, InstructorSerializer
)
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db import transaction
import json
import logging

from .models import Registration, Payment
from .mpesa import MPesaService, validate_kenyan_phone
from .serializers import PaymentSerializer

logger = logging.getLogger(__name__)

class PublicAnonThrottle(AnonRateThrottle):
    rate = '20/hour'

class PublicUserThrottle(UserRateThrottle):
    rate = '200/hour'

class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = ProgramSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle, PublicUserThrottle]
    lookup_field = 'slug'
    lookup_value_regex = '[^/]+'  # Allow any characters in slug except forward slash

class RegistrationCreateView(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle]

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle]

class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryItem.objects.filter(is_public=True).order_by('-created_at')
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]

class BlogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.filter(is_published=True).order_by('-published_at')
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle, PublicUserThrottle]
    lookup_field = 'slug'
    lookup_value_regex = '[^/]+'  # Allow any characters in slug except forward slash

class InstructorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    permission_classes = [AllowAny]


class InitiatePaymentView(generics.GenericAPIView):
    """
    Initiate M-Pesa STK Push payment for a registration
    """
    permission_classes = [AllowAny]
    
    def post(self, request):
        try:
            registration_id = request.data.get('registration_id')
            phone_number = request.data.get('phone_number')
            
            if not registration_id or not phone_number:
                return Response({
                    'success': False,
                    'error': 'Missing registration_id or phone_number'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Get registration
            try:
                registration = Registration.objects.get(id=registration_id)
            except Registration.DoesNotExist:
                return Response({
                    'success': False,
                    'error': 'Registration not found'
                }, status=status.HTTP_404_NOT_FOUND)
            
            # Check if already paid
            if registration.status == 'paid':
                return Response({
                    'success': False,
                    'error': 'This registration has already been paid'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Validate phone number
            formatted_phone = validate_kenyan_phone(phone_number)
            if not formatted_phone:
                return Response({
                    'success': False,
                    'error': 'Invalid Kenyan phone number format'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Get amount from program
            amount = registration.program.price
            if amount <= 0:
                return Response({
                    'success': False,
                    'error': 'This is a free program'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Initiate STK Push
            mpesa = MPesaService()
            result = mpesa.initiate_stk_push(
                phone_number=formatted_phone,
                amount=amount,
                account_reference=f'REG{registration.id}',
                transaction_desc=f'STEMForge - {registration.program.title}'
            )
            
            if result['success']:
                # Create payment record
                with transaction.atomic():
                    payment = Payment.objects.create(
                        registration=registration,
                        amount=amount,
                        phone_number=formatted_phone,
                        checkout_request_id=result['checkout_request_id'],
                        merchant_request_id=result['merchant_request_id'],
                        status='pending'
                    )
                    
                    # Update registration status
                    registration.status = 'pending'
                    registration.save()
                
                logger.info(f'Payment initiated for registration {registration.id}')
                
                return Response({
                    'success': True,
                    'message': 'Payment request sent to your phone',
                    'checkout_request_id': result['checkout_request_id'],
                    'customer_message': result.get('customer_message'),
                    'payment_id': payment.id
                }, status=status.HTTP_200_OK)
            else:
                logger.error(f'Payment initiation failed: {result}')
                return Response({
                    'success': False,
                    'error': result.get('error_message', 'Payment initiation failed')
                }, status=status.HTTP_400_BAD_REQUEST)
                
        except Exception as e:
            logger.error(f'Payment initiation error: {str(e)}')
            return Response({
                'success': False,
                'error': 'System error. Please try again.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([AllowAny])
def check_payment_status(request, checkout_request_id):
    """
    Check the status of a payment
    """
    try:
        payment = Payment.objects.get(checkout_request_id=checkout_request_id)
        
        serializer = PaymentSerializer(payment)
        
        return Response({
            'success': True,
            'payment': serializer.data
        })
        
    except Payment.DoesNotExist:
        return Response({
            'success': False,
            'error': 'Payment not found'
        }, status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
def mpesa_callback(request):
    """
    M-Pesa callback endpoint
    Called by Safaricom when payment is completed
    """
    if request.method != 'POST':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    
    try:
        # Parse callback data
        data = json.loads(request.body)
        
        logger.info(f'M-Pesa Callback received: {data}')
        
        # Extract relevant data
        stk_callback = data.get('Body', {}).get('stkCallback', {})
        result_code = stk_callback.get('ResultCode')
        checkout_request_id = stk_callback.get('CheckoutRequestID')
        merchant_request_id = stk_callback.get('MerchantRequestID')
        result_desc = stk_callback.get('ResultDesc', '')
        
        # Find payment record
        try:
            payment = Payment.objects.select_for_update().get(
                checkout_request_id=checkout_request_id
            )
        except Payment.DoesNotExist:
            logger.error(f'Payment not found for CheckoutRequestID: {checkout_request_id}')
            return JsonResponse({'status': 'ok'})  # Return 200 to prevent retries
        
        with transaction.atomic():
            # Update payment status
            if result_code == 0:
                # Payment successful
                callback_metadata = stk_callback.get('CallbackMetadata', {}).get('Item', [])
                
                # Extract metadata
                mpesa_receipt = None
                phone_number = None
                amount = None
                transaction_date = None
                
                for item in callback_metadata:
                    name = item.get('Name')
                    value = item.get('Value')
                    
                    if name == 'MpesaReceiptNumber':
                        mpesa_receipt = value
                    elif name == 'PhoneNumber':
                        phone_number = value
                    elif name == 'Amount':
                        amount = value
                    elif name == 'TransactionDate':
                        transaction_date = value
                
                payment.status = 'completed'
                payment.mpesa_receipt_number = mpesa_receipt
                payment.result_desc = result_desc
                payment.save()
                
                # Update registration
                registration = payment.registration
                registration.status = 'paid'
                registration.save()
                
                logger.info(f'Payment completed: {mpesa_receipt}')
                
                # Send confirmation email (async)
                from .tasks import send_payment_confirmation_email
                send_payment_confirmation_email.delay(payment.id)
                
            elif result_code == 1032:
                # User cancelled
                payment.status = 'cancelled'
                payment.result_desc = 'User cancelled'
                payment.save()
                logger.info(f'Payment cancelled by user: {checkout_request_id}')
                
            else:
                # Failed
                payment.status = 'failed'
                payment.result_desc = result_desc
                payment.save()
                logger.warning(f'Payment failed: {result_desc}')
        
        return JsonResponse({'ResultCode': 0, 'ResultDesc': 'Success'})
        
    except Exception as e:
        logger.error(f'M-Pesa callback error: {str(e)}')
        return JsonResponse({'ResultCode': 1, 'ResultDesc': 'Error'})


@api_view(['POST'])
@permission_classes([AllowAny])
def query_payment_status(request):
    """
    Manually query M-Pesa for payment status
    Useful if callback fails
    """
    try:
        checkout_request_id = request.data.get('checkout_request_id')
        
        if not checkout_request_id:
            return Response({
                'success': False,
                'error': 'Missing checkout_request_id'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        mpesa = MPesaService()
        result = mpesa.query_stk_status(checkout_request_id)
        
        # Update payment record if found
        try:
            payment = Payment.objects.get(checkout_request_id=checkout_request_id)
            
            if result['result_code'] == '0':
                payment.status = 'completed'
                payment.result_desc = result['result_desc']
                payment.save()
                
                payment.registration.status = 'paid'
                payment.registration.save()
            
        except Payment.DoesNotExist:
            pass
        
        return Response(result)
        
    except Exception as e:
        logger.error(f'Payment query error: {str(e)}')
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)