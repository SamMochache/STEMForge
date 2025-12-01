# backend/academy/mpesa.py
import requests
import base64
import json
from datetime import datetime
from django.conf import settings
from django.core.cache import cache
import logging

logger = logging.getLogger(__name__)


class MPesaService:
    """
    M-Pesa Daraja API Integration
    Supports STK Push (Lipa Na M-Pesa Online)
    """
    
    def __init__(self):
        self.consumer_key = settings.MPESA_CONSUMER_KEY
        self.consumer_secret = settings.MPESA_CONSUMER_SECRET
        self.business_shortcode = settings.MPESA_BUSINESS_SHORTCODE
        self.passkey = settings.MPESA_PASSKEY
        self.callback_url = settings.MPESA_CALLBACK_URL
        
        # API URLs (change to production in production)
        if settings.MPESA_ENVIRONMENT == 'production':
            self.base_url = 'https://api.safaricom.co.ke'
        else:
            self.base_url = 'https://sandbox.safaricom.co.ke'
    
    def get_access_token(self):
        """
        Get OAuth access token from M-Pesa API
        Caches token for 3500 seconds (just under 1 hour expiry)
        """
        cache_key = 'mpesa_access_token'
        token = cache.get(cache_key)
        
        if token:
            return token
        
        try:
            url = f'{self.base_url}/oauth/v1/generate?grant_type=client_credentials'
            
            # Create basic auth header
            auth_string = f'{self.consumer_key}:{self.consumer_secret}'
            auth_bytes = auth_string.encode('ascii')
            auth_base64 = base64.b64encode(auth_bytes).decode('ascii')
            
            headers = {
                'Authorization': f'Basic {auth_base64}'
            }
            
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            
            result = response.json()
            token = result['access_token']
            
            # Cache for 3500 seconds (just under expiry)
            cache.set(cache_key, token, 3500)
            
            logger.info('M-Pesa access token obtained successfully')
            return token
            
        except Exception as e:
            logger.error(f'Failed to get M-Pesa access token: {str(e)}')
            raise Exception('Failed to authenticate with M-Pesa')
    
    def generate_password(self, timestamp):
        """
        Generate password for STK Push request
        Password = Base64(Shortcode + Passkey + Timestamp)
        """
        data_to_encode = f'{self.business_shortcode}{self.passkey}{timestamp}'
        encoded = base64.b64encode(data_to_encode.encode()).decode('utf-8')
        return encoded
    
    def initiate_stk_push(self, phone_number, amount, account_reference, transaction_desc):
        """
        Initiate STK Push (Lipa Na M-Pesa Online)
        
        Args:
            phone_number: Customer phone (format: 254XXXXXXXXX)
            amount: Amount to charge
            account_reference: Registration ID or unique reference
            transaction_desc: Description of transaction
            
        Returns:
            dict: Response from M-Pesa API
        """
        try:
            access_token = self.get_access_token()
            
            # Generate timestamp and password
            timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
            password = self.generate_password(timestamp)
            
            # Format phone number (remove + and spaces)
            phone = phone_number.replace('+', '').replace(' ', '')
            if not phone.startswith('254'):
                if phone.startswith('0'):
                    phone = '254' + phone[1:]
                elif phone.startswith('7') or phone.startswith('1'):
                    phone = '254' + phone
            
            # Prepare request
            url = f'{self.base_url}/mpesa/stkpush/v1/processrequest'
            
            headers = {
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }
            
            payload = {
                'BusinessShortCode': self.business_shortcode,
                'Password': password,
                'Timestamp': timestamp,
                'TransactionType': 'CustomerPayBillOnline',
                'Amount': int(amount),
                'PartyA': phone,
                'PartyB': self.business_shortcode,
                'PhoneNumber': phone,
                'CallBackURL': self.callback_url,
                'AccountReference': str(account_reference),
                'TransactionDesc': transaction_desc
            }
            
            logger.info(f'Initiating STK Push: Phone={phone}, Amount={amount}, Ref={account_reference}')
            
            response = requests.post(url, json=payload, headers=headers)
            result = response.json()
            
            if response.status_code == 200 and result.get('ResponseCode') == '0':
                logger.info(f'STK Push initiated successfully: {result.get("CheckoutRequestID")}')
                return {
                    'success': True,
                    'checkout_request_id': result.get('CheckoutRequestID'),
                    'merchant_request_id': result.get('MerchantRequestID'),
                    'response_description': result.get('ResponseDescription'),
                    'customer_message': result.get('CustomerMessage')
                }
            else:
                logger.error(f'STK Push failed: {result}')
                return {
                    'success': False,
                    'error_message': result.get('errorMessage', 'Payment initiation failed'),
                    'error_code': result.get('errorCode')
                }
                
        except Exception as e:
            logger.error(f'STK Push exception: {str(e)}')
            return {
                'success': False,
                'error_message': 'System error. Please try again.'
            }
    
    def query_stk_status(self, checkout_request_id):
        """
        Query the status of an STK Push transaction
        
        Args:
            checkout_request_id: CheckoutRequestID from initiate_stk_push
            
        Returns:
            dict: Transaction status
        """
        try:
            access_token = self.get_access_token()
            
            timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
            password = self.generate_password(timestamp)
            
            url = f'{self.base_url}/mpesa/stkpushquery/v1/query'
            
            headers = {
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }
            
            payload = {
                'BusinessShortCode': self.business_shortcode,
                'Password': password,
                'Timestamp': timestamp,
                'CheckoutRequestID': checkout_request_id
            }
            
            response = requests.post(url, json=payload, headers=headers)
            result = response.json()
            
            return {
                'success': True,
                'result_code': result.get('ResultCode'),
                'result_desc': result.get('ResultDesc'),
                'raw_response': result
            }
            
        except Exception as e:
            logger.error(f'STK status query failed: {str(e)}')
            return {
                'success': False,
                'error_message': str(e)
            }


# Utility function to validate Kenyan phone numbers
def validate_kenyan_phone(phone):
    """
    Validate and format Kenyan phone number
    Returns formatted number or None if invalid
    """
    # Remove all non-digits
    phone = ''.join(filter(str.isdigit, phone))
    
    # Check various formats
    if phone.startswith('254') and len(phone) == 12:
        return phone
    elif phone.startswith('0') and len(phone) == 10:
        return '254' + phone[1:]
    elif phone.startswith('7') and len(phone) == 9:
        return '254' + phone
    elif phone.startswith('1') and len(phone) == 9:
        return '254' + phone
    
    return None