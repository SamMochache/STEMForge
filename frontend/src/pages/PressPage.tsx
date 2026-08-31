import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MailIcon } from 'lucide-react';

export function PressPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
            Press &amp; Media
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-5 sm:mb-6">
            Media resources
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            Our press kit is being prepared. In the meantime, journalists and event organisers can
            reach the team directly for interviews, data, and school partnership stories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="text-lg font-normal text-neutral-900 dark:text-neutral-50 mb-2">
              Media enquiries
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light mb-4">
              Interviews, commentary on AI in African education, and partner-school visits.
            </p>
            <a
              href="mailto:admissions@stemforge.co.ke"
              className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-50 border-b border-neutral-900 dark:border-neutral-50 pb-1 hover:opacity-60 transition-opacity break-all">
              
              <MailIcon size={14} aria-hidden="true" className="flex-shrink-0" />
              admissions@stemforge.co.ke
            </a>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="text-lg font-normal text-neutral-900 dark:text-neutral-50 mb-2">
              Our published thinking
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light mb-4">
              Perspectives written for school leaders, education innovators, and policy thinkers.
            </p>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-50 border-b border-neutral-900 dark:border-neutral-50 pb-1 hover:opacity-60 transition-opacity">
              
              Read Insights
              <ArrowRightIcon size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">Working on a story?</h2>
          <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will connect you with the right facilitator, partner school,
            or founder.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 w-full sm:w-auto px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors">
            
            Get in Touch
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>);

}