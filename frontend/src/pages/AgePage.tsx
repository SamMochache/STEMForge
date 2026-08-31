import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { ageGroups } from '../data/ageGroups';
import { programs } from '../data/programs';

export function AgePage() {
  const [active, setActive] = useState(0);
  const group = ageGroups[active];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
            Age
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-5 sm:mb-6">
            Solutions organised by age, not school type
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            Every STEMForge cohort is grouped by developmental stage. Four age bands, each with its
            own outcomes, pacing, and level of independence—so students join at the right level
            wherever they study.
          </p>
        </div>

        {/* Age bands */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6 sm:mb-8">
            The Age Bands
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {ageGroups.map((item, i) =>
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`p-5 sm:p-6 text-left border transition-colors duration-300 ${
              active === i ?
              'border-neutral-900 dark:border-neutral-100 bg-neutral-50 dark:bg-neutral-900' :
              'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'}`
              }>
              
                <span
                className={`text-xs tracking-widest uppercase mb-3 block ${
                active === i ?
                'text-neutral-900 dark:text-neutral-100' :
                'text-neutral-400 dark:text-neutral-500'}`
                }>
                
                  {item.range}
                </span>
                <h3
                className={`text-base sm:text-lg font-light ${
                active === i ?
                'text-neutral-900 dark:text-neutral-50' :
                'text-neutral-600 dark:text-neutral-400'}`
                }>
                
                  {item.label}
                </h3>
                <div
                aria-hidden="true"
                className={`w-8 h-px mt-4 transition-colors ${
                active === i ?
                'bg-neutral-900 dark:bg-neutral-100' :
                'bg-neutral-300 dark:bg-neutral-700'}`
                } />
              
              </button>
            )}
          </div>

          {/* Active band detail */}
          <div className="mt-6 sm:mt-8 p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                  Band {group.stage} of 04 • {group.range}
                </p>
                <h3 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
                  {group.label}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.focus.map((item) =>
                  <span
                    key={item}
                    className="px-3 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm">
                    
                      {item}
                    </span>
                  )}
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 pt-6 md:pt-0 md:pl-8">
                <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                  Solutions at this age
                </p>
                <ul className="space-y-3">
                  {group.solutions.map((solution) => {
                    const match = programs.find((program) => program.title === solution);
                    return (
                      <li key={solution}>
                        {match ?
                        <Link
                          to={`/programs/${match.slug}`}
                          className="group inline-flex items-start gap-2 text-neutral-900 dark:text-neutral-100 font-light hover:opacity-60 transition-opacity">
                          
                            {solution}
                            <ArrowUpRightIcon
                            size={14}
                            aria-hidden="true"
                            className="mt-1 flex-shrink-0" />
                          
                          </Link> :

                        <span className="text-neutral-600 dark:text-neutral-400 font-light">
                            {solution}
                          </span>
                        }
                      </li>);

                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* All solutions by age */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6 sm:mb-8">
            Every Solution and Its Age Range
          </h2>
          <div className="border-t border-neutral-200 dark:border-neutral-800">
            {programs.map((program) =>
            <Link
              key={program.slug}
              to={`/programs/${program.slug}`}
              className="group flex items-center justify-between gap-4 py-5 sm:py-6 border-b border-neutral-200 dark:border-neutral-800">
              
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-light text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {program.age_range} • {program.duration_weeks} weeks
                  </p>
                </div>
                <ArrowUpRightIcon
                size={20}
                aria-hidden="true"
                className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors flex-shrink-0" />
              
              </Link>
            )}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Not sure which band fits your students?
          </h2>
          <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Tell us the ages in your cohort and we will map the right pathway during a 30-minute
            discovery call.
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