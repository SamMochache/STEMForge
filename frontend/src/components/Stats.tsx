import React from 'react';
import { useCounter } from '../hooks/useCounter';

export function Stats() {
  const [s1, r1] = useCounter(500);
  const [s2, r2] = useCounter(98);
  const [s3, r3] = useCounter(12);

  const stats = [
  { value: s1, suffix: '+', label: 'Alumni Worldwide', ref: r1 },
  { value: s2, suffix: '%', label: 'Parent Satisfaction', ref: r2 },
  { value: s3, suffix: '', label: 'Years of Excellence', ref: r3 }];


  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16">
          {stats.map((stat) =>
          <div key={stat.label} ref={stat.ref} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-2 tracking-tight">
                {stat.value}
                {stat.suffix}
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