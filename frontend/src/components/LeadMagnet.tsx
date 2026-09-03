import React, { useState } from 'react';
import { ArrowRightIcon, CheckIcon, Loader2Icon } from 'lucide-react';

// Separate from the main inquiry endpoint on purpose — this is the
// deliberately low-friction first step (see ContactPage.tsx for the
// full partnership inquiry form). Set VITE_LEADS_API_URL to point this
// at your deployed backend, e.g.
//   VITE_LEADS_API_URL=https://stemforge-backend.vercel.app/api/leads/
const LEADS_API_URL =
import.meta.env.VITE_LEADS_API_URL ||
'http://127.0.0.1:8000/api/leads/';

interface LeadMagnetProps {
  // Lets the same component be reused with different offers/copy in
  // different places (homepage vs. Resources page) while tracking
  // which one actually converts, via the 'source' field.
  source?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function LeadMagnet({
  source = 'starter_guide',
  title = 'Free: The STEM Partnership Starter Guide',
  description =
  'A short, honest guide for school leaders evaluating any STEM provider — the questions to ask, a realistic budget range, and what to look for in a first session. No obligation, no sales call required.',
  className = ''
}: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(LEADS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source, website })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className={`bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 text-center ${className}`}>
        
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon size={20} aria-hidden="true" className="text-green-600 dark:text-green-400" />
        </div>
        <p className="text-neutral-900 dark:text-neutral-100 font-normal mb-1">Check your inbox</p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">
          The guide is on its way to {email}.
        </p>
      </div>);

  }

  return (
    <div
      className={`bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 ${className}`}>
      
      <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">
        Free Resource
      </p>
      <h3 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-neutral-50 mb-2">
        {title}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed mb-5">
        {description}
      </p>

      {error &&
      <p role="alert" className="text-red-600 dark:text-red-400 text-sm mb-3">
          {error}
        </p>
      }

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        {/* Honeypot — hidden from real visitors */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <label htmlFor={`website-${source}`}>Website</label>
          <input
            id={`website-${source}`}
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
            tabIndex={-1} />
          
        </div>

        <label htmlFor={`name-${source}`} className="sr-only">
          Name (optional)
        </label>
        <input
          id={`name-${source}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (optional)"
          className="w-full sm:w-40 px-4 py-3 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-colors" />
        

        <label htmlFor={`email-${source}`} className="sr-only">
          Email
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@school.ac.ke"
          className="w-full flex-1 px-4 py-3 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-colors" />
        

        <button
          type="submit"
          disabled={loading}
          className="shrink-0 px-6 py-3 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 text-sm tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50">
          
          {loading ?
          <Loader2Icon size={16} aria-hidden="true" className="animate-spin" /> :

          <>
              Send it
              <ArrowRightIcon size={14} aria-hidden="true" />
            </>
          }
        </button>
      </form>
    </div>);

}
