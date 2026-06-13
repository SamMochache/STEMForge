import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';
import api from '../services/api';
import { parseApiError } from '../utils/errorUtils';

const INITIAL_FORM = {
  parent_name: '',
  parent_email: '',
  parent_phone: '',
  child_name: '',
  child_age: '',
  program: '',
  call_date: '',
  call_time: '',
  preferred_schedule: '',
  wants_bargain: false,
  promo_code: '',
  budget_note: '',
  notes: '',
};

const ApplicationModal = ({ isOpen, onClose, selectedProgram }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const resetModal = useCallback(() => {
    setSuccess(false);
    setError(null);
    setForm(INITIAL_FORM);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    resetModal();

    api
      .getPrograms()
      .then((data) => setPrograms(data.results || data))
      .catch(() => setPrograms([]));

    if (selectedProgram?.id) {
      setForm((prev) => ({ ...prev, program: String(selectedProgram.id) }));
    }
  }, [isOpen, selectedProgram, resetModal]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.createRegistration({
        ...form,
        child_age: parseInt(form.child_age, 10),
        program: parseInt(form.program, 10),
      });

      setForm(INITIAL_FORM);
      setSuccess(true);
    } catch (err) {
      setError(parseApiError(err));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close modal"
        />

        {/* Modal */}
        <div
          className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="application-modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
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
                  Application Received
                </h2>
                <p className="text-neutral-600 font-light mb-8">
                  Thank you for your interest in STEMForge. We'll review your application,
                  preferred call date, and any discount request, then contact you within 48 hours.
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
                  <h2
                    id="application-modal-title"
                    className="text-2xl md:text-3xl font-light text-neutral-900"
                  >
                    Begin Your Journey
                  </h2>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 mb-6 whitespace-pre-line">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parent_name"
                      className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                    >
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parent_name"
                      type="text"
                      name="parent_name"
                      value={form.parent_name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="parent_email"
                        className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="parent_email"
                        type="email"
                        name="parent_email"
                        value={form.parent_email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="parent_phone"
                        className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        id="parent_phone"
                        type="tel"
                        name="parent_phone"
                        value={form.parent_phone}
                        onChange={handleChange}
                        required
                        placeholder="+254…"
                        autoComplete="tel"
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Child Name + Age */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="child_name"
                        className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                      >
                        Child's Name *
                      </label>
                      <input
                        id="child_name"
                        type="text"
                        name="child_name"
                        value={form.child_name}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="child_age"
                        className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                      >
                        Child's Age *
                      </label>
                      <input
                        id="child_age"
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

                  {/* Program */}
                  <div>
                    <label
                      htmlFor="program"
                      className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                    >
                      Program of Interest *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                    >
                      <option value="">Select a program</option>
                      {programs.map((prog) => (
                        <option key={prog.id} value={prog.id}>
                          {prog.title}{' '}
                          {prog.price > 0
                            ? `– KSh ${prog.price.toLocaleString()}`
                            : '– Free'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Call Booking */}
                  <div className="border border-neutral-200 p-5 space-y-5">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Book a Call
                      </p>
                      <p className="text-sm text-neutral-600 font-light">
                        Choose a day and time window when you are free for us to reach out.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="call_date"
                          className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                        >
                          Preferred Call Date
                        </label>
                        <input
                          id="call_date"
                          type="date"
                          name="call_date"
                          value={form.call_date}
                          onChange={handleChange}
                          min={today}
                          className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="call_time"
                          className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                        >
                          Preferred Time
                        </label>
                        <select
                          id="call_time"
                          name="call_time"
                          value={form.call_time}
                          onChange={handleChange}
                          className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                        >
                          <option value="">No preference</option>
                          <option value="morning">Morning</option>
                          <option value="midday">Midday</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <label
                      htmlFor="preferred_schedule"
                      className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                    >
                      Preferred Schedule
                    </label>
                    <select
                      id="preferred_schedule"
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

                  {/* Pricing Options */}
                  <div className="border border-neutral-200 p-5 space-y-5">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Pricing Options
                      </p>
                      <p className="text-sm text-neutral-600 font-light">
                        Promo codes come from STEMForge campaigns, referral offers, scholarship
                        invitations, or direct discounts shared by our team.
                      </p>
                    </div>

                    <label className="flex items-start gap-3 text-sm text-neutral-700">
                      <input
                        type="checkbox"
                        name="wants_bargain"
                        checked={form.wants_bargain}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>
                        I would like to request a bargaining option or discuss a custom payment plan.
                      </span>
                    </label>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="promo_code"
                          className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                        >
                          Promotion Code
                        </label>
                        <input
                          id="promo_code"
                          type="text"
                          name="promo_code"
                          value={form.promo_code}
                          onChange={handleChange}
                          placeholder="Enter code if you have one"
                          className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 uppercase focus:outline-none focus:border-neutral-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="budget_note"
                          className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                        >
                          Budget / Offer Note
                        </label>
                        <input
                          id="budget_note"
                          type="text"
                          name="budget_note"
                          value={form.budget_note}
                          onChange={handleChange}
                          placeholder="Example: KSh 100,000 budget"
                          className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs tracking-widest uppercase text-neutral-400 mb-2"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                      placeholder="Any questions or special requirements…"
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
  );
};

export default ApplicationModal;
