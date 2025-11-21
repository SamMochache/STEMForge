from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseBadRequest
from django.db import transaction
import json
from .models import Registration

@csrf_exempt
def mpesa_webhook(request):
    if request.method != 'POST':
        return HttpResponseBadRequest("invalid method")
    try:
        payload = json.loads(request.body)
    except json.JSONDecodeError:
        return HttpResponseBadRequest("bad json")

    tx = payload.get('transaction_id')
    ext = payload.get('external_id')
    status = payload.get('status')

    if not ext:
        return JsonResponse({'ok': False, 'error': 'missing external id'}, status=400)

    try:
        kind, id_str = ext.split(':', 1)
    except Exception:
        return JsonResponse({'ok': False, 'error': 'invalid external id'}, status=400)

    if kind != 'registration':
        return JsonResponse({'ok': False, 'error': 'unsupported external type'}, status=400)

    try:
        reg_id = int(id_str)
    except ValueError:
        return JsonResponse({'ok': False, 'error': 'invalid id'}, status=400)

    try:
        with transaction.atomic():
            reg = Registration.objects.select_for_update().get(pk=reg_id)
            if reg.status != 'paid' and status.upper() == 'SUCCESS':
                reg.status = 'paid'
                reg.save(update_fields=['status'])
            return JsonResponse({'ok': True})
    except Registration.DoesNotExist:
        return JsonResponse({'ok': False, 'error': 'registration not found'}, status=404)
