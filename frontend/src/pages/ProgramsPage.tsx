import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  SparklesIcon,
  CodeIcon,
  CpuIcon,
  LightbulbIcon } from
'lucide-react';
import { programs } from '../data/programs';

const iconMap: Record<string, typeof SparklesIcon> = {
  'ai-literacy': SparklesIcon,
  'coding-development': CodeIcon,
  'robotics-physical-computing': CpuIcon,
  'innovation-entrepreneurship': LightbulbIcon
};

export function ProgramsPage() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:pt-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
            Solutions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-4">
            Four pillars for future-ready schools
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed text-base sm:text-lg">
            Delivered in-school by trained facilitators. AI-assisted learning, assessment rubrics,
            and progress dashboards included.
          </p>
        </div>

        {/* Solutions list */}
        <div className="space-y-4 sm:space-y-6">
          {programs.map((program, i) => {
            const Icon = iconMap[program.slug] || SparklesIcon;
            const isExpanded = expanded === i;

            return (
              <div
                key={program.id}
                className={`border transition-colors ${
                isExpanded ?
                'border-neutral-900 bg-neutral-900 text-white' :
                'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600'}`
                }>
                
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? -1 : i)}
                  aria-expanded={isExpanded}
                  aria-controls={`solution-panel-${program.slug}`}
                  className="w-full p-5 sm:p-8 flex items-start sm:items-center justify-between gap-4 text-left">
                  
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                    <Icon
                      size={28}
                      aria-hidden="true"
                      className={`flex-shrink-0 mt-1 sm:mt-0 ${
                      isExpanded ? 'text-white/60' : 'text-neutral-400 dark:text-neutral-500'}`
                      } />
                    
                    <div className="min-w-0">
                      <h2
                        className={`text-lg sm:text-xl md:text-2xl font-light ${
                        isExpanded ? 'text-white' : 'text-neutral-900 dark:text-neutral-50'}`
                        }>
                        
                        {program.title}
                      </h2>
                      <p
                        className={`text-xs sm:text-sm mt-1 ${
                        isExpanded ? 'text-white/60' : 'text-neutral-500 dark:text-neutral-400'}`
                        }>
                        
                        {program.age_range} • {program.duration_weeks} weeks
                      </p>
                      <p
                        className={`md:hidden text-xs mt-1 ${
                        isExpanded ? 'text-white/80' : 'text-neutral-900 dark:text-neutral-200'}`
                        }>
                        
                        KSh {program.price_per_student.toLocaleString()}/student/term
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span
                      className={`hidden md:block text-sm whitespace-nowrap ${
                      isExpanded ? 'text-white/80' : 'text-neutral-900 dark:text-neutral-200'}`
                      }>
                      
                      KSh {program.price_per_student.toLocaleString()}/student/term
                    </span>
                    {isExpanded ?
                    <span className="text-white/60 text-sm">Close</span> :

                    <ArrowRightIcon
                      size={20}
                      aria-hidden="true"
                      className="text-neutral-400 dark:text-neutral-500" />

                    }
                  </div>
                </button>

                {isExpanded &&
                <div
                  id={`solution-panel-${program.slug}`}
                  className="px-5 sm:px-8 pb-8 grid md:grid-cols-2 gap-8">
                  
                    <div>
                      <p className="text-white/80 font-light leading-relaxed mb-6">
                        {program.summary}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                            What students build
                          </p>
                          <p className="text-white italic">&quot;{program.features[3]}&quot;</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                            Delivery model
                          </p>
                          <p className="text-white/70 font-light">
                            In-school workshops + AI-assisted modules + innovation challenges
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/10 p-4 mb-6">
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                          Investment
                        </p>
                        <p className="text-white text-lg font-light">
                          KSh {program.price_per_student.toLocaleString()} per student per term
                        </p>
                        <p className="text-white/50 text-xs mt-1">
                          Pilot partnership rate available for first-time institutional partners
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <Link
                        to={`/programs/${program.slug}`}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                        
                          View full details
                          <ArrowUpRightIcon size={14} aria-hidden="true" />
                        </Link>
                        <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-white text-sm font-medium">
                        
                          Request Discovery Session
                          <ArrowRightIcon size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                        Key Outcomes
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.features.slice(0, 3).map((feature) =>
                      <span
                        key={feature}
                        className="px-4 py-2 bg-white/10 text-white/90 text-sm">
                        
                            {feature}
                          </span>
                      )}
                      </div>

                      <div className="border-t border-white/10 pt-4 space-y-2 text-sm text-white/70 font-light">
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                          What the school provides
                        </p>
                        {program.what_school_provides.map((item) =>
                      <p key={item}>— {item}</p>
                      )}
                      </div>

                      <div className="border-t border-white/10 pt-4 mt-4 space-y-2 text-sm text-white/70 font-light">
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                          What STEMForge provides
                        </p>
                        {program.what_we_provide.map((item) =>
                      <p key={item}>— {item}</p>
                      )}
                      </div>
                    </div>
                  </div>
                }
              </div>);

          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-20 bg-neutral-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">Ready to partner?</h2>
          <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
            We select partners committed to long-term impact. Request a 30-minute discovery call to
            explore mutual fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 w-full sm:w-auto px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors">
            
            Request Discovery Session
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>);

}