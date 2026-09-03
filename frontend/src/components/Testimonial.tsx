import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

// Replaces a fabricated testimonial attributed to a named person who
// doesn't exist ("Dr. Amara Okonkwo") — a real problem, not a style
// choice, since publishing an invented quote from a named person is
// false advertising. Swap this component back for a real testimonial
// the moment you have permission to publish one from an actual
// partner school. Until then, this turns the absence into a genuine
// psychological hook instead: an invitation to be first.

export function Testimonial() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-900">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-8">
          Founding Partners
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
          We're just getting started — which means an early partner school shapes
          how this program grows, gets pilot pricing, and gets our full, direct attention.
        </p>
        <p className="text-neutral-500 text-sm mb-8 sm:mb-10 max-w-xl mx-auto font-light">
          Your school's story could be the first one featured here.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-white border-b border-neutral-600 hover:border-white pb-1 transition-colors">
          
          Become a founding partner
          <ArrowRightIcon size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>);

}
