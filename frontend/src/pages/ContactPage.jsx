import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react';
import { programs } from '../data/programs';

const INITIAL_FORM = {
  school_name: '',
  contact_name: '',
  contact_title: '',
  school_type: '',
  student_population: '',
  current_stem: '',
  interested_solutions: [],
  why_partner: '',
  phone: '',
  email: '',
  preferred_time: '',
  additional_notes: '',
};

const SCHOOL_TYPES = [
  'Public School',
  'Private School',
  'International School',
  'Faith-based School',
  'Charter School',
  'Other',
];

const TIME_SLOTS = [
  'Morning (8am - 12pm)',
  'Afternoon (12pm - 4pm)',
  'Evening (4pm - 7pm)',
];

const ContactPage = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'interested_solutions') {
      const solutionId = value;
      setForm((prev) => ({
        ...prev,
        interested_solutions: checked
          ? [...prev.interested_solutions, solutionId]
          : prev.interested_solutions.filter((id) => id !== solutionId),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Save to localStorage (replace with actual API call when ready)
      const submissions = JSON.parse(localStorage.getItem('stemforge_inquiries') || '[]');
      submissions.push({
        ...form,
        submitted_at: new Date().toISOString(),
        id: Date.now(),
      });
      localStorage.setItem('stemforge_inquiries', JSON.stringify(submissions));

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-light text-neutral-900 mb-4">
            Inquiry Received
          </h2>
          <p className="text-neutral-600 font-light mb-8">
            Thank you. We'll review your submission and reach out within 48 hours if there's
            mutual alignment. Pilot partnership rates are extended to select first-time
            institutional partners.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
            Partner With Us
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-6">
            Request a Discovery Session
          </h1>
          <p className="text-neutral-600 font-light text-lg leading-relaxed">
            We review every inquiry personally. If there's mutual alignment, we'll schedule
            a 30-minute discovery call within 48 hours. Pilot partnership rates are extended
            to select first-time institutional partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* School Information */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
                  School Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="school_name"
                      value={form.school_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                      placeholder="e.g., Nairobi International School"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contact_name"
                        value={form.contact_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                        placeholder="e.g., Jane Wanjiku"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">
                        Your Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contact_title"
                        value={form.contact_title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                        placeholder="e.g., Head Teacher, Deputy, BOM Chair"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">
                        School Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="school_type"
                        value={form.school_type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select type</option>
                        {SCHOOL_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">
                        Student Population (Forms 1–4)
                      </label>
                      <input
                        type="text"
                        name="student_population"
                        value={form.student_population}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                        placeholder="e.g., 800 students"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                      placeholder="e.g., +254 712 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors"
                      placeholder="e.g., jane@school.ac.ke"
                    />
                  </div>
                </div>
              </div>

              {/* STEM Interest */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
                  STEM Interest
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      Current STEM/ICT Activities
                    </label>
                    <textarea
                      name="current_stem"
                      value={form.current_stem}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                      placeholder="What STEM activities does your school currently offer?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-700 mb-3">
                      Which solutions interest you?
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {programs.map((program) => (
                        <label
                          key={program.id}
                          className="flex items-start gap-3 p-4 border border-neutral-200 cursor-pointer hover:border-neutral-400 transition-colors"
                        >
                          <input
                            type="checkbox"
                            name="interested_solutions"
                            value={program.slug}
                            checked={form.interested_solutions.includes(program.slug)}
                            onChange={handleChange}
                            className="mt-1"
                          />
                          <div>
                            <p className="text-sm font-medium text-neutral-900">{program.title}</p>
                            <p className="text-xs text-neutral-500">{program.grade_min}–{program.grade_max}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Intent */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
                  Partnership Intent
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      Why does your school want to partner with STEMForge? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="why_partner"
                      value={form.why_partner}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your school's vision for STEM education and why you think STEMForge is the right partner."
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      Preferred Time for Discovery Call
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {TIME_SLOTS.map((slot) => (
                        <label
                          key={slot}
                          className={`px-4 py-2 border cursor-pointer transition-colors ${
                            form.preferred_time === slot
                              ? 'border-neutral-900 bg-neutral-900 text-white'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferred_time"
                            value={slot}
                            checked={form.preferred_time === slot}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-sm">{slot}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="additional_notes"
                      value={form.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Discovery Session
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-neutral-50 p-6">
                <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-medium shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Review</p>
                      <p className="text-sm text-neutral-500">We review your inquiry within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center text-sm font-medium shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Discovery Call</p>
                      <p className="text-sm text-neutral-500">30-minute call to understand your needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center text-sm font-medium shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Custom Proposal</p>
                      <p className="text-sm text-neutral-500">Tailored solution and pilot pricing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6">
                <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
                  Contact Directly
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Phone size={16} className="text-neutral-400" />
                    <span>[Your Phone/WhatsApp]</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Mail size={16} className="text-neutral-400" />
                    <span>[Your Email]</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <MapPin size={16} className="text-neutral-400" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Clock size={16} className="text-neutral-400" />
                    <span>Response within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;