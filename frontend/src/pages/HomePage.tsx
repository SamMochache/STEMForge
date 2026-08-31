import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Philosophy } from '../components/Philosophy';
import { Programs } from '../components/Programs';
import { TheModel } from '../components/TheModel';
import { WhySTEMForge } from '../components/WhySTEMForge';
import { Testimonial } from '../components/Testimonial';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Philosophy />
      <Programs />
      <TheModel />
      <WhySTEMForge />
      <Testimonial />
      <CTA />
    </>);

}