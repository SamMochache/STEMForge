import React from 'react';

// Replaces fabricated placeholder numbers ("500+ Alumni", "98%
// Satisfaction", "12 Years") that were left over from the original
// template and were never true. Publishing invented statistics is
// false advertising, not a style choice — so this leans into the
// honest story instead: STEMForge is new, selective, and hands-on,
// which is a genuine selling point for an early institutional partner
// (founding-partner status, personal attention, direct access to the
// founding team) rather than a weakness to hide.
//
// Replace this copy with real numbers as soon as you have them —
// e.g. once you complete your first pilot term, "1 founding partner
// school" becomes a real, honest, powerful stat.

const FOUNDING_POINTS = [
{ value: '2026', label: 'Founding Cohort' },
{ value: '1:1', label: 'Direct Access to Founders' },
{ value: 'Kenya', label: 'Built For Local Schools' }];


export function Stats() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16">
          {FOUNDING_POINTS.map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-neutral-500 dark:text-neutral-400 text-[11px] sm:text-xs md:text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
