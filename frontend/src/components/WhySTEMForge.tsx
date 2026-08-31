import React from 'react';

const WHY_FEATURES = [
{
  title: 'AI-Native, Not AI-Aware',
  description:
  'Students don\u2019t just learn about AI—they build with AI. Every module integrates generative tools, automation, and data literacy.'
},
{
  title: 'Entrepreneurship as Pedagogy',
  description:
  'Students launch real ventures, not hypothetical projects. Revenue, customers, failure, iteration.'
},
{
  title: 'Classical Liberal Foundations',
  description:
  'We connect innovation to freedom, property rights to progress, and voluntary exchange to prosperity.'
},
{
  title: 'Measurable Human Flourishing',
  description:
  'Outcomes tracked: critical thinking growth, venture creation, AI competency portfolios, civic engagement.'
},
{
  title: 'Selective Partnership',
  description:
  'We limit new partners to ensure quality. Our facilitators are trained, vetted, and continuously developed.'
}];


export function WhySTEMForge() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Why STEMForge
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
            What sets us apart
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_FEATURES.map((feature) =>
          <div
            key={feature.title}
            className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
            
              <h3 className="text-lg font-normal text-neutral-900 dark:text-neutral-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}