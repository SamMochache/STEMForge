import React from 'react';

// AUTHORITY SIGNALS — fill in the bracketed placeholders below with
// real, verifiable facts before publishing. Do not invent credentials,
// press mentions, or partnerships — a false authority claim is the
// same legal/ethical problem as the fabricated stats and testimonial
// this project already removed elsewhere. Real, modest facts (a
// LinkedIn profile, an actual certification, a real prior project)
// build more trust than invented impressive ones, and carry zero risk.
//
// Good candidates even for a brand-new company:
//   - Founder's real background/previous work (link to LinkedIn)
//   - Any formal registration (e.g. "Registered business in Kenya")
//   - Any real certification an instructor actually holds
//   - Any genuine media mention, however small
//   - A link to the actual GitHub/portfolio work behind the curriculum

const CREDENTIALS = [
  {
    label: 'Founder',
    // TODO: replace with real name + one-line real background
    value: '[Your name] — [one honest line about your relevant background]'
  },
  {
    label: 'Based In',
    value: 'Westlands, Nairobi, Kenya'
  },
  {
    label: 'Focus',
    // TODO: only claim what's actually true today
    value: '[e.g. "AI literacy, robotics, and entrepreneurship for ages 14–18"]'
  }
  // TODO: add a real certification, registration, or credential row
  // here once you have one — do not add a placeholder row with no
  // real content behind it; an empty/generic row is worse than fewer
  // rows that are all genuinely true.
];

export function FounderCredibility() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-6 text-center">
          Who's Behind STEMForge
        </p>
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {CREDENTIALS.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-neutral-400 dark:text-neutral-500 text-xs uppercase tracking-wide mb-2">
                {item.label}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 text-sm font-light">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
