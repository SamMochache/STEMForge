import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-neutral-950">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          <div>
            <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
              Our Philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
              We believe in nurturing brilliance through immersion, not instruction
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
              At STEMForge, learning transcends the conventional. Here, students don&apos;t simply
              absorb knowledge—they create, iterate, and refine. Every project strengthens critical
              abilities: confidence, creativity, leadership, and analytical thinking.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
              Our approach mirrors the methodologies of the world&apos;s leading innovation centers.
              Mistakes are celebrated as pathways to mastery. Ideas become prototypes, and
              prototypes become breakthroughs.
            </p>
            <div className="pt-2 sm:pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 text-sm tracking-wide border-b border-neutral-900 dark:border-neutral-50 pb-1 hover:opacity-60 transition-opacity">
                
                Discover our approach
                <ArrowUpRightIcon size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}