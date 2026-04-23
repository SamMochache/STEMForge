import { useState, useCallback } from 'react';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';
import api from '../services/api';
import { parseApiError } from '../utils/errorUtils';

const INITIAL_FORM = {
  school_name: '',
  contact_person: '',
  email: '',
  phone: '',
  preferred_date: '',
  message: '',
};

const BookingModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.createBooking(form);
      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      setError(parseApiError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = useCallback(() => {
    setSuccess(false);
    setError(null);
    onClose();
  }, [onClose]);

  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-label="Close booking modal"
      />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors"
          aria-label="Close"
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
                Booking Request Received
              </h2>
              <p className="text-neutral-600 font-light mb-8">
                Thank you for your interest. Our team will contact you to confirm the details of
                your visit.
              </p>
              <button
                onClick={handleClose}
                className="bg-neutral-900 text-white px-8 py-3 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-neutral-400 text-sm tracking-widest uppercase mb-2">
                  School Visit
                </p>
                <h2
                  id="booking-modal-title"
                  className="text-2xl md:text-3xl font-light text-neutral-900"
                >
                  Book a Visit
                </h2>
                <p className="text-neutral-600 font-light mt-3">
                  Arrange a school trip or group experience at STEMForge.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 mb-6 whitespace-pre-line">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* School Name */}
                <div>
                  <label
                    htmlFor="school_name"
                    className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                  >
                    School / Institution Name *
                  </label>
                  <input
                    id="school_name"
                    type="text"
                    name="school_name"
                    value={form.school_name}
                    onChange={handleChange}
                    required
                    className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label
                    htmlFor="contact_person"
                    className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                  >
                    Contact Person *
                  </label>
                  <input
                    id="contact_person"
                    type="text"
                    name="contact_person"
                    value={form.contact_person}
                    onChange={handleChange}
                    required
                    className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="booking_email"
                      className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="booking_email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking_phone"
                      className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      id="booking_phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254…"
                      autoComplete="tel"
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferred_date"
                    className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="preferred_date"
                    type="date"
                    name="preferred_date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    min={today}
                    className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking_message"
                    className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="booking_message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                    placeholder="Number of students, age group, specific interests…"
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
                      Submitting…
                    </>
                  ) : (
                    <>
                      Request Booking
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
  );
};

export default BookingModal;
