import React from 'react';
import type { LegalDocument, LegalSection } from '../types/content';

interface LegalPageProps {
  document: LegalDocument;
  icon?: React.ReactNode;
}

const Bullets = ({ items }: {items: string[];}) =>
<ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-400 font-light space-y-2">
    {items.map((item) =>
  <li key={item}>{item}</li>
  )}
  </ul>;


const SectionBody = ({ section }: {section: LegalSection;}) =>
<>
    {section.paragraphs?.map((paragraph) =>
  <p
    key={paragraph}
    className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-4 last:mb-0">
    
        {paragraph}
      </p>
  )}
    {section.bullets && <Bullets items={section.bullets} />}
    {section.subsections?.map((sub) =>
  <div key={sub.title} className="mt-6">
        <h3 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-neutral-100 mb-3">
          {sub.title}
        </h3>
        {sub.paragraphs?.map((paragraph) =>
    <p
      key={paragraph}
      className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-3">
      
            {paragraph}
          </p>
    )}
        {sub.bullets && <Bullets items={sub.bullets} />}
      </div>
  )}
  </>;


export function LegalPage({ document, icon }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            {icon}
            <p className="text-neutral-400 text-xs sm:text-sm tracking-widest uppercase">
              {document.eyebrow}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-8">
            {document.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light">
            Last updated: {document.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {document.intro &&
          <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed text-base sm:text-lg mb-12">
              {document.intro}
            </p>
          }

          {document.sections.map((section) =>
          <div
            key={section.title}
            className={
            section.highlight ?
            'mb-12 sm:mb-16 bg-blue-50 dark:bg-neutral-900 border-l-4 border-blue-600 p-6 sm:p-8' :
            'mb-12 sm:mb-16'
            }>
            
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-4 sm:mb-6">
                {section.title}
              </h2>
              <SectionBody section={section} />
            </div>
          )}
        </div>
      </section>
    </div>);

}