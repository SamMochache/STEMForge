import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusIcon, MinusIcon, ArrowUpRightIcon, ArrowRightIcon } from 'lucide-react';
import { programs } from '../data/programs';

export function Programs() {
  const [expanded, setExpanded] = useState(0);
  const navigate = useNavigate();

  const pillars = programs.map((program) => ({
    id: program.slug,
    title: program.title,
    slug: program.slug,
    ageRange: program.age_range,
    summary: program.summary,
    builds: program.features[3],
    delivery:
    'In-school workshops + AI-assisted self-paced modules + innovation challenges',
    features: program.features.slice(0, 3),
    schoolProvides: program.what_school_provides
  }));

  return (
    <section
      id="solutions"
      className="py-16 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Our Solutions
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
            Four pillars of future readiness
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-light mt-4 leading-relaxed">
            Every solution is delivered in-school by trained facilitators—with AI-assisted learning,
            assessment rubrics, and progress dashboards included.
          </p>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800">
          {pillars.map((pillar, i) =>
          <div key={pillar.id} className="border-b border-neutral-200 dark:border-neutral-800">
              <button
              type="button"
              onClick={() => setExpanded(expanded === i ? -1 : i)}
              className="w-full py-6 sm:py-8 flex items-center justify-between gap-4 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100 rounded"
              aria-expanded={expanded === i}
              aria-controls={`pillar-panel-${pillar.id}`}>
              
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 min-w-0">
                  <span className="text-neutral-300 dark:text-neutral-600 text-xs sm:text-sm tracking-wide">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="md:hidden text-neutral-400 dark:text-neutral-500 text-xs">
                    {pillar.ageRange}
                  </span>
                </div>
                <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                  <span className="hidden md:block text-neutral-400 dark:text-neutral-500 text-sm whitespace-nowrap">
                    {pillar.ageRange}
                  </span>
                  {expanded === i ?
                <MinusIcon
                  size={20}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" /> :


                <PlusIcon
                  size={20}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />

                }
                </div>
              </button>

              {expanded === i &&
            <div
              id={`pillar-panel-${pillar.id}`}
              className="pb-8 md:pl-16 grid md:grid-cols-2 gap-8">
              
                  <div>
                    <div className="flex gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      <span>{pillar.ageRange}</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-4">
                      {pillar.summary}
                    </p>
                    <div className="mb-4 text-sm">
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-1">
                        What students build
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light italic">
                        &quot;{pillar.builds}&quot;
                      </p>
                    </div>
                    <div className="mb-6 text-sm">
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-1">
                        Delivery model
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 font-light">
                        {pillar.delivery}
                      </p>
                    </div>
                    <div className="mb-6 border border-neutral-200 dark:border-neutral-800 p-4 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-2">
                        Investment
                      </p>
                      <p>
                        From{' '}
                        <span className="text-neutral-900 dark:text-neutral-100 font-normal">
                          KSh 10,000 per student per term
                        </span>
                      </p>
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">
                        Pilot partnership rate available for first-time institutional partners
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <Link
                    to={`/programs/${pillar.slug}`}
                    className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                    
                        View full solution
                        <ArrowUpRightIcon size={14} aria-hidden="true" />
                      </Link>
                      <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 text-sm font-medium self-start">
                    
                        Request Discovery Session
                        <ArrowRightIcon size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                      Key Outcomes
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pillar.features.map((outcome) =>
                  <span
                    key={outcome}
                    className="px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm">
                    
                          {outcome}
                        </span>
                  )}
                    </div>
                    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-2">
                        What the school provides
                      </p>
                      {pillar.schoolProvides.map((item) =>
                  <p key={item}>— {item}</p>
                  )}
                    </div>
                  </div>
                </div>
            }
            </div>
          )}
        </div>

        <div className="mt-10 sm:mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 text-sm tracking-wide border-b border-neutral-900 dark:border-neutral-50 pb-1 hover:opacity-60 transition-opacity">
            
            View all solutions
            <ArrowUpRightIcon size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>);

}