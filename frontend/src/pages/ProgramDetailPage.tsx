import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  UsersIcon,
  BarChart3Icon,
  BookOpenIcon,
  BriefcaseIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon } from
'lucide-react';
import { getProgramBySlug } from '../data/programs';
import { solutionContent, defaultSolutionContent } from '../data/solutionContent';

export function ProgramDetailPage() {
  const { slug } = useParams<{slug: string;}>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  if (!program) {
    return (
      <main className="pt-28 sm:pt-32 pb-20 bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">Solution not found</p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 border-b border-neutral-900 dark:border-neutral-50 pb-1">
            
            <ArrowLeftIcon size={14} aria-hidden="true" />
            Back to Solutions
          </Link>
        </div>
      </main>);

  }

  const content = solutionContent[program.slug] || defaultSolutionContent;

  return (
    <main className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8 sm:mb-12">
          
          <ArrowLeftIcon size={14} aria-hidden="true" />
          All Solutions
        </Link>

        {/* Header */}
        <header className="mb-10 sm:mb-16 pb-8 sm:pb-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-neutral-400 dark:text-neutral-400 tracking-wide uppercase mb-5 sm:mb-6">
            <span className="bg-neutral-100 dark:bg-neutral-900 px-3 py-1">
              {program.age_range}
            </span>
            <span className="bg-neutral-100 dark:bg-neutral-900 px-3 py-1">
              {program.duration_weeks} weeks
            </span>
            <span className="bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-3 py-1">
              Core Solution
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight mb-5 sm:mb-6">
            {program.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            {program.summary}
          </p>
        </header>

        {/* Quick stats */}
        <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-neutral-50 dark:bg-neutral-900 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <ClockIcon
                size={20}
                aria-hidden="true"
                className="text-neutral-400 dark:text-neutral-500" />
              
              <span className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                Duration
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50">
              {program.duration_weeks} weeks
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <UsersIcon
                size={20}
                aria-hidden="true"
                className="text-neutral-400 dark:text-neutral-500" />
              
              <span className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                Age
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50">
              {program.age_min}–{program.age_max}
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3Icon
                size={20}
                aria-hidden="true"
                className="text-neutral-400 dark:text-neutral-500" />
              
              <span className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                Category
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50">
              Core Solution
            </p>
          </div>
          <div className="bg-neutral-900 text-white p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-widest uppercase">Investment</span>
            </div>
            <p className="text-xl sm:text-2xl font-light">
              KSh {program.price_per_student.toLocaleString()}
            </p>
            <p className="text-white/50 text-xs mt-1">per student / term</p>
          </div>
        </section>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-2 space-y-10 sm:space-y-12">
            <section>
              <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-4 flex items-center gap-3">
                <BookOpenIcon
                  size={24}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                
                Solution Overview
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed text-base sm:text-lg">
                {content.overview}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-3">
                <CheckIcon
                  size={24}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                
                What STEMForge Provides
              </h2>
              <div className="space-y-3">
                {content.whatYouGet.map((item) =>
                <div key={item} className="flex gap-4 items-start">
                    <div
                    aria-hidden="true"
                    className="w-6 h-6 rounded-full bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 flex items-center justify-center flex-shrink-0 text-xs">
                    
                      ✓
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 font-light">
                      {item}
                    </span>
                  </div>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-3">
                <MapPinIcon
                  size={24}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                
                What the School Provides
              </h2>
              <div className="space-y-3">
                {program.what_school_provides.map((item) =>
                <div key={item} className="flex gap-4 items-start">
                    <div
                    aria-hidden="true"
                    className="w-6 h-6 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 flex items-center justify-center flex-shrink-0 text-xs">
                    
                      —
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 font-light">
                      {item}
                    </span>
                  </div>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-3">
                <BarChart3Icon
                  size={24}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                
                Key Outcomes
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {program.features.map((feature) =>
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-900">
                  
                    <CheckIcon
                    size={16}
                    aria-hidden="true"
                    className="text-neutral-900 dark:text-neutral-100 mt-1 flex-shrink-0" />
                  
                    <span className="text-neutral-700 dark:text-neutral-300 font-light">
                      {feature}
                    </span>
                  </div>
                )}
              </div>
            </section>

            {content.curriculum.length > 0 &&
            <section>
                <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-6">
                  Week-by-Week Curriculum
                </h2>
                <div className="space-y-4">
                  {content.curriculum.map((item) =>
                <div
                  key={item.week}
                  className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-5 sm:pl-6 py-2">
                  
                      <div className="flex flex-wrap gap-2 sm:gap-4 mb-2 items-baseline">
                        <span className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium">
                          Weeks {item.week}
                        </span>
                        <h3 className="text-base sm:text-lg font-normal text-neutral-900 dark:text-neutral-50">
                          {item.topic}
                        </h3>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 font-light">
                        {item.details}
                      </p>
                    </div>
                )}
                </div>
              </section>
            }

            <section>
              <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-3">
                <BarChart3Icon
                  size={24}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                
                Student Competencies
              </h2>
              <ul className="space-y-3">
                {content.outcomes.map((outcome) =>
                <li key={outcome} className="flex gap-3">
                    <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-500 mt-1">
                      →
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400 font-light">
                      {outcome}
                    </span>
                  </li>
                )}
              </ul>
            </section>

            <section className="bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-neutral-50 mb-3 flex items-center gap-3">
                <BriefcaseIcon size={20} aria-hidden="true" className="flex-shrink-0" />
                Facilitator Expertise
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {content.mentoring}
              </p>
            </section>

            <section className="bg-neutral-900 text-white p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-normal text-white mb-3 flex items-center gap-3">
                <UsersIcon size={20} aria-hidden="true" className="flex-shrink-0" />
                Partner School Network
              </h3>
              <p className="text-white/80 font-light leading-relaxed">{content.community}</p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 mb-8">
              <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                Investment
              </p>
              <p className="text-3xl sm:text-4xl font-light text-neutral-900 dark:text-neutral-50 mb-2">
                KSh {program.price_per_student.toLocaleString()}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 sm:mb-8">
                per student per term
              </p>

              <Link
                to="/contact"
                className="w-full bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-6 py-4 text-sm tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors inline-flex items-center justify-center gap-3 mb-4">
                
                Request Discovery Session
                <ArrowRightIcon size={16} aria-hidden="true" />
              </Link>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                Pilot partnership rate available for first-time institutional partners
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 mb-8">
              <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                Contact
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+254740532120"
                  className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  
                  <PhoneIcon
                    size={16}
                    aria-hidden="true"
                    className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                  
                  +254 740 532 120
                </a>
                <a
                  href="mailto:admissions@stemforge.co.ke"
                  className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors break-all">
                  
                  <MailIcon
                    size={16}
                    aria-hidden="true"
                    className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                  
                  admissions@stemforge.co.ke
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-2">
                  CBC Alignment?
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  All solutions are mapped to Kenya&apos;s Competency-Based Curriculum strands and
                  learning outcomes.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-2">
                  Teacher involvement?
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  Your teachers observe and upskill alongside our facilitators. No added workload.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-2">
                  Schedule flexibility?
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  Programs fit within your existing timetable. Minimum 2 hours per week.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-2">
                  Assessment?
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  Competency-based portfolios, not just exams. Termly dashboards for school
                  leadership.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-10 sm:pt-12">
          <div className="bg-neutral-900 text-white p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">Ready to partner?</h2>
            <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
              We select partners committed to long-term impact. Request a 30-minute discovery call to
              explore how {program.title} fits your school.
            </p>
            <Link
              to="/contact"
              className="bg-white text-neutral-900 w-full sm:w-auto px-8 sm:px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-3">
              
              Request Discovery Session
              <ArrowRightIcon size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>);

}