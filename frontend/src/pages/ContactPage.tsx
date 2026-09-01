import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  Loader2Icon } from
'lucide-react';
import { programs } from '../data/programs';

// URL of the inquiries backend. Set VITE_API_URL in a .env file at the
// frontend project root to point this at your deployed backend, e.g.
//   VITE_API_URL=https://api.stemforge.co.ke/api/inquiries/
// Falls back to the local Django dev server address if unset.
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/inquiries/';

interface ContactForm {
  school_name: string;
  contact_name: string;
  contact_title: string;
  school_type: string;
  student_population: string;
  current_stem: string;
  interested_solutions: string[];
  why_partner: string;
  phone: string;
  email: string;
  preferred_time: string;
  additional_notes: string;
  // Honeypot field: left blank by real visitors, invisible on screen.
  // A bot that auto-fills every input on a form will fill this in, and
  // the backend silently rejects the submission when it's non-empty.
  website: string;
}

const INITIAL_FORM: ContactForm = {
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
  website: ''
};

const SCHOOL_TYPES = [
'Public School',
'Private School',
'International School',
'Faith-based School',
'Charter School',
'Other'];


const TIME_SLOTS = ['Morning (8am - 12pm)', 'Afternoon (12pm - 4pm)', 'Evening (4pm - 7pm)'];

const inputClasses =
'w-full px-4 py-3 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-colors';

export function ContactPage() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  {
    const target = event.target as HTMLInputElement;
    const { name, value, type } = target;

    if (type === 'checkbox' && name === 'interested_solutions') {
      setForm((prev) => ({
        ...prev,
        interested_solutions: target.checked ?
        [...prev.interested_solutions, value] :
        prev.interested_solutions.filter((id) => id !== value)
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon size={32} aria-hidden="true" className="text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
            Inquiry Received
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light mb-8">
            Thank you. We&apos;ll review your submission and reach out within 48 hours if
            there&apos;s mutual alignment. Pilot partnership rates are extended to select
            first-time institutional partners.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 border-b border-neutral-900 dark:border-neutral-50 pb-1">
            
            Return to Home
          </Link>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
            Partner With Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-5 sm:mb-6">
            Request a Discovery Session
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            We review every inquiry personally. If there&apos;s mutual alignment, we&apos;ll
            schedule a 30-minute discovery call within 48 hours. Pilot partnership rates are extended
            to select first-time institutional partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {error &&
            <div
              role="alert"
              className="mb-6 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-sm">
              
                {error}
              </div>
            }

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot field — hidden from real visitors, catches simple bots.
                  Do not remove the styling below; it must stay invisible and
                  unreachable by tab so sighted and keyboard/screen-reader users
                  never see or interact with it. */}
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1} />
                
              </div>

              {/* School information */}
              <fieldset>
                <legend className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  School Information
                </legend>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="school_name"
                      className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="school_name"
                      type="text"
                      name="school_name"
                      value={form.school_name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="e.g., Nairobi International School" />
                    
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact_name"
                        className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                        
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_name"
                        type="text"
                        name="contact_name"
                        value={form.contact_name}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="e.g., Jane Wanjiku" />
                      
                    </div>
                    <div>
                      <label
                        htmlFor="contact_title"
                        className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                        
                        Your Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_title"
                        type="text"
                        name="contact_title"
                        value={form.contact_title}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="e.g., Head Teacher, Deputy, BOM Chair" />
                      
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="school_type"
                        className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                        
                        School Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="school_type"
                        name="school_type"
                        value={form.school_type}
                        onChange={handleChange}
                        required
                        className={inputClasses}>
                        
                        <option value="">Select type</option>
                        {SCHOOL_TYPES.map((type) =>
                        <option key={type} value={type}>
                            {type}
                          </option>
                        )}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="student_population"
                        className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                        
                        Student Population (Ages 14–18)
                      </label>
                      <input
                        id="student_population"
                        type="text"
                        name="student_population"
                        value={form.student_population}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="e.g., 800 students" />
                      
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Contact information */}
              <fieldset>
                <legend className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  Contact Information
                </legend>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="e.g., +254 712 345 678" />
                    
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="e.g., jane@school.ac.ke" />
                    
                  </div>
                </div>
              </fieldset>

              {/* STEM interest */}
              <fieldset>
                <legend className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  STEM Interest
                </legend>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="current_stem"
                      className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      
                      Current STEM/ICT Activities
                    </label>
                    <textarea
                      id="current_stem"
                      name="current_stem"
                      value={form.current_stem}
                      onChange={handleChange}
                      rows={3}
                      className={`${inputClasses} resize-none`}
                      placeholder="What STEM activities does your school currently offer?" />
                    
                  </div>

                  <div>
                    <p className="block text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                      Which solutions interest you?
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {programs.map((program) =>
                      <label
                        key={program.id}
                        className="flex items-start gap-3 p-4 border border-neutral-200 dark:border-neutral-800 cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                        
                          <input
                          type="checkbox"
                          name="interested_solutions"
                          value={program.slug}
                          checked={form.interested_solutions.includes(program.slug)}
                          onChange={handleChange}
                          className="mt-1 flex-shrink-0" />
                        
                          <span>
                            <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">
                              {program.title}
                            </span>
                            <span className="block text-xs text-neutral-500 dark:text-neutral-400">
                              {program.age_range}
                            </span>
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Partnership intent */}
              <fieldset>
                <legend className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  Partnership Intent
                </legend>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="why_partner"
                      className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      
                      Why does your school want to partner with STEMForge?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="why_partner"
                      name="why_partner"
                      value={form.why_partner}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your school's vision for STEM education and why you think STEMForge is the right partner." />
                    
                  </div>

                  <div>
                    <p className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      Preferred Time for Discovery Call
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {TIME_SLOTS.map((slot) =>
                      <label
                        key={slot}
                        className={`px-4 py-2.5 border cursor-pointer transition-colors ${
                        form.preferred_time === slot ?
                        'border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900' :
                        'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300'}`
                        }>
                        
                          <input
                          type="radio"
                          name="preferred_time"
                          value={slot}
                          checked={form.preferred_time === slot}
                          onChange={handleChange}
                          className="sr-only" />
                        
                          <span className="text-sm">{slot}</span>
                        </label>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="additional_notes"
                      className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                      
                      Additional Notes
                    </label>
                    <textarea
                      id="additional_notes"
                      name="additional_notes"
                      value={form.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      className={`${inputClasses} resize-none`}
                      placeholder="Any other information you'd like to share..." />
                    
                  </div>
                </div>
              </fieldset>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 text-sm tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors inline-flex items-center justify-center gap-3 disabled:opacity-50">
                  
                  {loading ?
                  <>
                      <Loader2Icon size={16} aria-hidden="true" className="animate-spin" />
                      Submitting...
                    </> :

                  <>
                      Request Discovery Session
                      <ArrowRightIcon size={16} aria-hidden="true" />
                    </>
                  }
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6">
                <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  What Happens Next
                </h2>
                <div className="space-y-4">
                  {[
                  { step: 1, title: 'Review', copy: 'We review your inquiry within 24 hours' },
                  {
                    step: 2,
                    title: 'Discovery Call',
                    copy: '30-minute call to understand your needs'
                  },
                  {
                    step: 3,
                    title: 'Custom Proposal',
                    copy: 'Tailored solution and pilot pricing'
                  }].
                  map((item) =>
                  <div key={item.step} className="flex gap-4">
                      <div
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${
                      item.step === 1 ?
                      'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900' :
                      'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'}`
                      }>
                      
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          {item.title}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.copy}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-900 p-6">
                <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  Contact Directly
                </h2>
                <div className="space-y-3">
                  <a
                    href="tel:+254740532120"
                    className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                    
                    <PhoneIcon
                      size={16}
                      aria-hidden="true"
                      className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                    
                    +254 740 532 120
                  </a>
                  <a
                    href="mailto:admissions@stemforge.co.ke"
                    className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors break-all">
                    
                    <MailIcon
                      size={16}
                      aria-hidden="true"
                      className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                    
                    admissions@stemforge.co.ke
                  </a>
                  <p className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <MapPinIcon
                      size={16}
                      aria-hidden="true"
                      className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                    
                    Westlands, Nairobi, Kenya
                  </p>
                  <p className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <ClockIcon
                      size={16}
                      aria-hidden="true"
                      className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                    
                    Response within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>);

}