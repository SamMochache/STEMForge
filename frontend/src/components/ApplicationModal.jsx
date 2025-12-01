// frontend/src/components/ApplicationModal.jsx - WITH PAYMENT FLOW
import { useState, useEffect } from 'react';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';
import api from '../services/api';
import PaymentModal from './PaymentModal';

const ApplicationModal = ({ isOpen, onClose, selectedProgram }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  // Payment flow state
  const [showPayment, setShowPayment] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  
  const [form, setForm] = useState({
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    child_name: '',
    child_age: '',
    program: '',
    preferred_schedule: '',
    notes: ''
  });

  useEffect(() => {
    if (isOpen) {
      // Fetch programs for dropdown
      api.getPrograms()
        .then(data => setPrograms(data.results || data))
        .catch(console.error);
      
      // Pre-select program if provided
      if (selectedProgram) {
        setForm(prev => ({ ...prev, program: selectedProgram.id }));
      }
      
      // Reset state
      setSuccess(false);
      setError(null);
      setShowPayment(false);
      setRegistrationData(null);
    }
  }, [isOpen, selectedProgram]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const registration = await api.createRegistration({
        ...form,
        child_age: parseInt(form.child_age, 10),
        program: parseInt(form.program, 10)
      });

      // Find the selected program details
      const programDetails = programs.find(p => p.id === parseInt(form.program, 10));

      // Check if program requires payment
      if (programDetails && programDetails.price > 0) {
        // Store registration and show payment modal
        setRegistrationData({
          registration,
          program: programDetails
        });
        setShowPayment(true);
      } else {
        // Free program - show success immediately
        setSuccess(true);
      }

      // Reset form
      setForm({
        parent_name: '',
        parent_email: '',
        parent_phone: '',
        child_name: '',
        child_age: '',
        program: '',
        preferred_schedule: '',
        notes: ''
      });
    } catch (err) {
      console.error(err);
      if (err.data) {
        const messages = Object.entries(err.data)
          .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(', ') : val}`)
          .join('\n');
        setError(messages);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentClose = () => {
    setShowPayment(false);
    setSuccess(true); // Show success after payment modal closes
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-light text-neutral-900 mb-4">
                  Application Received
                </h2>
                <p className="text-neutral-600 font-light mb-8">
                  Thank you for your interest in STEMForge. Our admissions team will contact you within 48 hours.
                </p>
                <button
                  onClick={onClose}
                  className="bg-neutral-900 text-white px-8 py-3 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-neutral-400 text-sm tracking-widest uppercase mb-2">
                    Application
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                    Begin Your Journey
                  </h2>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 mb-6 whitespace-pre-line">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Info */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parent_name"
                      value={form.parent_name}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="parent_email"
                        value={form.parent_email}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="parent_phone"
                        value={form.parent_phone}
                        onChange={handleChange}
                        required
                        placeholder="+254..."
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Child Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="child_name"
                        value={form.child_name}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Child's Age *
                      </label>
                      <input
                        type="number"
                        name="child_age"
                        value={form.child_age}
                        onChange={handleChange}
                        required
                        min="5"
                        max="18"
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Program of Interest *
                    </label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                    >
                      <option value="">Select a program</option>
                      {programs.map(prog => (
                        <option key={prog.id} value={prog.id}>
                          {prog.title} {prog.price > 0 ? `- KSh ${prog.price.toLocaleString()}` : '- Free'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Schedule Preference */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Preferred Schedule
                    </label>
                    <select
                      name="preferred_schedule"
                      value={form.preferred_schedule}
                      onChange={handleChange}
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                    >
                      <option value="">No preference</option>
                      <option value="weekday_morning">Weekday Mornings</option>
                      <option value="weekday_afternoon">Weekday Afternoons</option>
                      <option value="saturday">Saturdays</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                      placeholder="Any questions or special requirements..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-neutral-900 text-white py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && registrationData && (
        <PaymentModal
          isOpen={showPayment}
          onClose={handlePaymentClose}
          registration={registrationData.registration}
          program={registrationData.program}
        />
      )}
    </>
  );
};

export default ApplicationModal;