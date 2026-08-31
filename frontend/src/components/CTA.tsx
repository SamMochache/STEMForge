import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Partnerships
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight mb-6 sm:mb-8">
            Selective partnerships for visionary schools
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg mb-4 max-w-xl mx-auto">
            We limit new partners to ensure quality. If your institution is committed to preparing
            students for an AI-driven economy, we&apos;d like to hear from you.
          </p>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm mb-8 sm:mb-12 max-w-xl mx-auto">
            Investment: from KSh 10,000 per student per term. Pilot partnership rate available for
            select first-time institutional partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-8 sm:px-10 py-4 text-sm tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors inline-flex items-center justify-center gap-3">
              
              Request Discovery Session
              <ArrowRightIcon size={16} aria-hidden="true" />
            </Link>
            <Link
              to="/programs"
              className="border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 px-8 sm:px-10 py-4 text-sm tracking-wide hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors inline-flex items-center justify-center">
              
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>);

}