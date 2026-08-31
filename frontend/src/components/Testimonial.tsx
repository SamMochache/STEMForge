import React from 'react';

export function Testimonial() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-8 sm:mb-12">
          Testimonial
        </p>
        <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8 sm:mb-12">
          &quot;STEMForge transformed not just my daughter&apos;s technical abilities, but her entire
          approach to challenges. She now sees problems as opportunities.&quot;
        </blockquote>
        <div>
          <p className="text-white font-normal">Dr. Amara Okonkwo</p>
          <p className="text-neutral-500 text-sm mt-1">Parent, Class of 2024</p>
        </div>
      </div>
    </section>);

}