import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Check, Loader2 } from 'lucide-react';

const INITIAL_FORM = {
  school_name: '',
  contact_name: '',
  contact_title: '',
  school_type: '',
  student_population: '',
  stem_infrastructure: '',
  phone: '',
  email: '',
  why_partner: '',
  preferred_time: '',
};

const ContactPage = ({ onBookingClick }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.why_partner.trim()) {
      setError('Please tell us why your school wants to partner with STEMForge.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // Store locally; can be wired to a form endpoint later
      const submissions = JSON.parse(window.localStorage.getItem('stemforge_partner_inquiries') || '[]');
      submissions.unshift({ ...form, id: Date.now(), created_at: new Date().toISOString() });
      window.localStorage.setItem('stemforge_partner_inquiries', JSON.stringify(submissions));

      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Partner With Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
            Request a Discovery Session
          </h1>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            We review every inquiry personally. If there's mutual alignment, we'll schedule
            a 30-minute discovery call within 48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            {success ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-light text-neutral-900 mb-4">Inquiry Received</h2>
                <p className="text-neutral-600 font-light">
                  Thank you. We'll review your submission and reach out within 48 hours if there's
                  mutual alignment.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 mb-6">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* School Name */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      name="school_name"
                      value={form.school_name}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  {/* Name & Title */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="contact_name"
                        value={form.contact_name}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Your Title *
                      </label>
                      <input
                        type="text"
                        name="contact_title"
                        value={form.contact_title}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Principal, Head of Academics"
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* School Type */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      School Type *
                    </label>
                    <select
                      name="school_type"
                      value={form.school_type}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                    >
                      <option value="">Select school type</option>
                      <option value="national">National School</option>
                      <option value="private">Private School</option>
                      <option value="international">International School</option>
                      <option value="faith">Faith-Based School</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Student Population & Infrastructure */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Student Population (Forms 1–4)
                      </label>
                      <input
                        type="text"
                        name="student_population"
                        value={form.student_population}
                        onChange={handleChange}
                        placeholder="e.g. 800 students"
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Current STEM/ICT Infrastructure
                      </label>
                      <select
                        name="stem_infrastructure"
                        value={form.stem_infrastructure}
                        onChange={handleChange}
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                      >
                        <option value="">Select level</option>
                        <option value="1">1 — Minimal / none</option>
                        <option value="2">2 — Basic computer lab</option>
                        <option value="3">3 — Moderate infrastructure</option>
                        <option value="4">4 — Good infrastructure</option>
                        <option value="5">5 — Excellent / fully equipped</option>
                      </select>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+254…"
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Why partner — required filter */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Why does your school want to partner with STEMForge? *
                    </label>
                    <textarea
                      name="why_partner"
                      value={form.why_partner}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your school's vision and what you hope to achieve…"
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Preferred time */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Preferred Time for Discovery Call
                    </label>
                    <select
                      name="preferred_time"
                      value={form.preferred_time}
                      onChange={handleChange}
                      className="w-full border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors bg-white"
                    >
                      <option value="">No preference</option>
                      <option value="morning">Weekday Morning (8–12)</option>
                      <option value="afternoon">Weekday Afternoon (12–5)</option>
                      <option value="saturday">Saturday Morning</option>
                    </select>
                  </div>

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
                        Request Discovery Session
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-neutral-400 text-center leading-relaxed">
                    We review every inquiry personally. If there's mutual alignment, we'll schedule
                    a 30-minute discovery call within 48 hours. Pilot partnership rates are extended
                    to select first-time institutional partners.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Location</h3>
                  <p className="text-neutral-600 font-light">
                    Westlands, Nairobi<br />
                    Kenya
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Phone / WhatsApp</h3>
                  <p className="text-neutral-600 font-light">
                    <a href="tel:+254740532120" className="hover:text-neutral-900 transition-colors">
                      +254 740 532 120
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Email</h3>
                  <p className="text-neutral-600 font-light">
                    <a href="mailto:admissions@stemforge.co.ke" className="hover:text-neutral-900 transition-colors">
                      admissions@stemforge.co.ke
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium mb-1">Hours</h3>
                  <p className="text-neutral-600 font-light">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 p-6 text-sm text-neutral-600 font-light leading-relaxed">
              <p className="text-neutral-900 font-normal mb-2">Not every school is a fit.</p>
              <p>
                We select partners aligned with our mission. Our discovery call is a conversation—not a sales pitch—to explore whether there's genuine alignment between your institution's vision and ours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;