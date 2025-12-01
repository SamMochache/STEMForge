// frontend/src/components/PaymentModal.jsx - FIXED VERSION
import { useState, useEffect } from 'react';
import { X, Smartphone, CheckCircle, XCircle, Loader2, AlertCircle, Clock } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, registration, program }) => {
  const [step, setStep] = useState('phone'); // phone, processing, success, failed
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkoutRequestId, setCheckoutRequestId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pollingInterval, setPollingInterval] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showStillWaiting, setShowStillWaiting] = useState(false);

  // API endpoint
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

  // Format phone number as user types
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.startsWith('254')) {
      return digits.slice(0, 12);
    } else if (digits.startsWith('0')) {
      return digits.slice(0, 10);
    } else if (digits.startsWith('7') || digits.startsWith('1')) {
      return digits.slice(0, 9);
    }
    return digits.slice(0, 10);
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhoneNumber(formatted);
  };

  // Initiate payment
  const initiatePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/payments/initiate/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registration_id: registration.id,
          phone_number: phoneNumber,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setCheckoutRequestId(data.checkout_request_id);
        setStep('processing');
        setElapsedTime(0);
        setShowStillWaiting(false);
        startPolling(data.checkout_request_id);
      } else {
        setError(data.error || 'Payment initiation failed');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Poll payment status
  const checkPaymentStatus = async (checkoutId) => {
    try {
      const response = await fetch(`${API_URL}/payments/status/${checkoutId}/`);
      const data = await response.json();

      if (data.success && data.payment) {
        const status = data.payment.status;

        if (status === 'completed') {
          stopPolling();
          setStep('success');
        } else if (status === 'failed' || status === 'cancelled') {
          stopPolling();
          setStep('failed');
          setError(data.payment.result_desc || 'Payment failed');
        }
      }
    } catch (err) {
      console.error('Polling error:', err);
      // Continue polling on error
    }
  };

  const startPolling = (checkoutId) => {
    // Poll every 3 seconds
    const interval = setInterval(() => {
      checkPaymentStatus(checkoutId);
    }, 3000);

    setPollingInterval(interval);

    // Track elapsed time
    const timeTracker = setInterval(() => {
      setElapsedTime(prev => {
        const newTime = prev + 1;
        
        // Show "still waiting" message at 2 minutes
        if (newTime === 120) {
          setShowStillWaiting(true);
        }
        
        return newTime;
      });
    }, 1000);

    // ✅ FIXED: Extended timeout to 5 minutes (300 seconds)
    setTimeout(() => {
      stopPolling();
      clearInterval(timeTracker);
      
      if (step === 'processing') {
        setStep('failed');
        setError(
          'Payment is taking longer than expected. Please check your M-Pesa messages. ' +
          'If you completed the payment, it will be processed shortly.'
        );
      }
    }, 300000); // 5 minutes instead of 2
  };

  const stopPolling = () => {
    if (pollingInterval) {
      clearInterval(pollingInterval);
      setPollingInterval(null);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => stopPolling();
  }, []);

  // Reset on close
  const handleClose = () => {
    stopPolling();
    setStep('phone');
    setPhoneNumber('');
    setError(null);
    setCheckoutRequestId(null);
    setElapsedTime(0);
    setShowStillWaiting(false);
    onClose();
  };

  // Format elapsed time
  const formatElapsedTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-lg shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {/* Phone Input Step */}
          {step === 'phone' && (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-light text-neutral-900 mb-2">Pay with M-Pesa</h2>
                <p className="text-neutral-600 font-light text-sm">
                  {program?.title}
                </p>
                <p className="text-3xl font-light text-neutral-900 mt-4">
                  KSh {program?.price?.toLocaleString()}
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 mb-4 rounded flex items-start gap-2">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="07XX XXX XXX or 2547XX XXX XXX"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                  disabled={loading}
                />
                <p className="text-xs text-neutral-500 mt-2">
                  Enter the phone number registered with M-Pesa
                </p>
              </div>

              <button
                onClick={initiatePayment}
                disabled={loading || phoneNumber.length < 9}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending request...
                  </>
                ) : (
                  <>Pay KSh {program?.price?.toLocaleString()}</>
                )}
              </button>

              <p className="text-xs text-neutral-500 text-center mt-4">
                You'll receive an M-Pesa prompt on your phone
              </p>
            </>
          )}

          {/* Processing Step */}
          {step === 'processing' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Smartphone size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-light text-neutral-900 mb-4">Check Your Phone</h2>
              <p className="text-neutral-600 font-light mb-6">
                Enter your M-Pesa PIN on your phone to complete the payment
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-4">
                <Loader2 size={16} className="animate-spin" />
                Waiting for confirmation... {formatElapsedTime(elapsedTime)}
              </div>

              {/* ✅ NEW: Show "still waiting" message after 2 minutes */}
              {showStillWaiting && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm p-3 rounded mb-4 flex items-start gap-2">
                  <Clock size={16} className="flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-medium mb-1">Still processing...</p>
                    <p className="text-xs">
                      M-Pesa can take up to 5 minutes. Please don't close this window.
                    </p>
                  </div>
                </div>
              )}

              <div className="text-xs text-neutral-400 space-y-1">
                <p>✓ Payment request sent</p>
                <p>✓ Waiting for M-Pesa confirmation</p>
              </div>

              <button
                onClick={handleClose}
                className="mt-8 text-sm text-neutral-600 hover:text-neutral-900 underline"
              >
                Close (payment will continue in background)
              </button>
            </div>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-light text-neutral-900 mb-4">Payment Successful!</h2>
              <p className="text-neutral-600 font-light mb-6">
                Your payment has been received. We've sent a confirmation to your email.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded mb-6 text-sm">
                <p className="text-neutral-700">
                  <strong>Next Steps:</strong>
                </p>
                <ul className="text-left text-neutral-600 mt-2 space-y-1 text-xs">
                  <li>✓ Check your email for payment receipt</li>
                  <li>✓ Our team will contact you within 48 hours</li>
                  <li>✓ You'll receive program start details soon</li>
                </ul>
              </div>
              <button
                onClick={handleClose}
                className="bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          )}

          {/* Failed Step */}
          {step === 'failed' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle size={32} className="text-red-600" />
              </div>
              <h2 className="text-2xl font-light text-neutral-900 mb-4">Payment Not Completed</h2>
              <p className="text-neutral-600 font-light mb-6">
                {error || 'The payment could not be completed.'}
              </p>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6 text-sm text-left">
                <p className="font-medium text-neutral-900 mb-2">Common Issues:</p>
                <ul className="text-neutral-700 space-y-1 text-xs">
                  <li>• Insufficient M-Pesa balance</li>
                  <li>• Incorrect PIN entered</li>
                  <li>• Request timed out</li>
                  <li>• Transaction cancelled on phone</li>
                </ul>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setStep('phone');
                    setError(null);
                    setElapsedTime(0);
                    setShowStillWaiting(false);
                  }}
                  className="w-full bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={handleClose}
                  className="w-full border border-neutral-300 text-neutral-700 px-8 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
              
              <p className="text-xs text-neutral-500 mt-4">
                Need help? Contact us at +254 740 532 120
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;