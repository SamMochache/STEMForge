import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Philosophy } from '../components/Philosophy';
import { Programs } from '../components/Programs';
import { TheModel } from '../components/TheModel';
import { WhySTEMForge } from '../components/WhySTEMForge';
import { Testimonial } from '../components/Testimonial';
import { LeadMagnet } from '../components/LeadMagnet';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <Hero />

      {/* Low-commitment entry point for visitors not ready for a full
          inquiry yet — the "Not ready yet?" link in Hero scrolls here. */}
      <section id="free-guide-section" className="py-16 sm:py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
          <LeadMagnet />
        </div>
      </section>

      <Stats />
      <Philosophy />
      <Programs />
      <TheModel />
      <WhySTEMForge />
      <Testimonial />
      <CTA />
    </>
  );
}
