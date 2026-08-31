import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  TargetIcon,
  LightbulbIcon,
  UsersIcon,
  GlobeIcon,
  ZapIcon,
  ShieldIcon,
  HeartIcon,
  RocketIcon,
  AwardIcon } from
'lucide-react';

const VALUES = [
{
  icon: TargetIcon,
  title: 'Innovation',
  description:
  'We believe technology should be built, not just consumed. Every student leaves with something they created—from AI prototypes to revenue-generating ventures.',
  detail:
  'Our curriculum is project-first. Theory serves practice, not the other way around. Students don\u2019t learn about Python; they deploy applications. They don\u2019t study robotics; they build autonomous systems.'
},
{
  icon: LightbulbIcon,
  title: 'Entrepreneurship',
  description:
  'Real ventures, real customers, real revenue. We teach the mindset of building, not just the skills.',
  detail:
  'Students launch micro-ventures with actual market validation. They learn that failure is data, that iteration is strategy, and that the best business plans are the ones that survive contact with reality.'
},
{
  icon: UsersIcon,
  title: 'Partnership',
  description:
  'We don\u2019t replace schools—we empower them. Our success is measured by your students\u2019 outcomes.',
  detail:
  'We integrate into your timetable, train alongside your teachers, and report to your leadership. We are guests in your institution, and we act like it.'
},
{
  icon: GlobeIcon,
  title: 'Human Flourishing',
  description:
  'We connect innovation to freedom, progress to property rights, and prosperity to voluntary cooperation.',
  detail:
  'Classical liberal values are not lectures here. They are lived through market simulations, governance exercises, and the experience of building something that others value enough to pay for.'
}];


const DIFFERENTIATORS = [
{
  icon: ZapIcon,
  title: 'AI-Native, Not AI-Aware',
  description:
  'Students don\u2019t just learn about AI—they build with AI. Every module integrates generative tools, automation, and data literacy.'
},
{
  icon: RocketIcon,
  title: 'Entrepreneurship as Pedagogy',
  description:
  'Students launch real ventures, not hypothetical projects. Revenue, customers, failure, iteration.'
},
{
  icon: ShieldIcon,
  title: 'Classical Liberal Foundations',
  description:
  'We connect innovation to freedom, property rights to progress, and voluntary exchange to prosperity.'
},
{
  icon: HeartIcon,
  title: 'Measurable Human Flourishing',
  description:
  'Outcomes tracked: critical thinking growth, venture creation, AI competency portfolios, civic engagement.'
},
{
  icon: AwardIcon,
  title: 'Selective Partnership',
  description:
  'We limit new partners to ensure quality. Our facilitators are trained, vetted, and continuously developed.'
}];


const MILESTONES = [
{
  year: '2024',
  quarter: 'Q3',
  event:
  'STEMForge founded. Mission defined: make world-class STEM education accessible to every African school.',
  highlight: false
},
{
  year: '2024',
  quarter: 'Q4',
  event: 'Curriculum framework designed. Partnership model validated with 3 Nairobi schools.',
  highlight: false
},
{
  year: '2025',
  quarter: 'Q1',
  event: 'Platform development begins. AI-assisted learning environment prototyped.',
  highlight: false
},
{
  year: '2025',
  quarter: 'Q2',
  event:
  'First facilitator cohort trained. 12 educators across Nairobi equipped for in-school delivery.',
  highlight: false
},
{
  year: '2025',
  quarter: 'Q3',
  event:
  'Beta programs launch. 200+ students across 4 institutions begin AI Literacy and Coding pathways.',
  highlight: true
},
{
  year: '2025',
  quarter: 'Q4',
  event: 'Student outcomes measured. 94% competency improvement in problem-solving assessments.',
  highlight: false
},
{
  year: '2026',
  quarter: 'Q1',
  event:
  'Platform v1.0 released. Full assessment dashboards, progress tracking, and partner portal live.',
  highlight: false
},
{
  year: '2026',
  quarter: 'Q2',
  event:
  'Pilot partnerships open. Selective expansion to 10 institutions. Applications reviewed on rolling basis.',
  highlight: true
}];


export function AboutPage() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-24">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
            About STEMForge
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-5 sm:mb-6">
            An EdTech company with a mission
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            We develop technology, curriculum, and facilitation systems that enable schools to
            deliver world-class STEM education. In-school. During school hours. Without adding to
            teacher workload.
          </p>
        </div>

        {/* Founder */}
        <section className="mb-14 sm:mb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
              Meet the Founder
            </p>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-3 sm:mb-4">
              Sam Mochache
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">
              Founder &amp; CEO, STEMForge
            </p>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              <p>
                I started STEMForge because I saw a gap that felt personal. Growing up in Kenya, I
                watched brilliant peers enter the workforce unprepared for an economy that was
                already being reshaped by AI, automation, and digital platforms. They had degrees.
                They didn&apos;t have the ability to build.
              </p>
              <p>
                The problem wasn&apos;t lack of intelligence. It was lack of access to the right
                kind of education—one that treats students as creators, not consumers. Where you
                learn by launching real projects, not just passing exams. Where failure is a feature,
                not a bug.
              </p>
              <p>
                STEMForge is my answer to that problem. We partner with schools to deliver AI
                literacy, coding, robotics, and entrepreneurship education that actually prepares
                students for the world they&apos;ll inherit. Not through lectures. Through building.
                Through iteration. Through the classical liberal values that have driven every great
                wave of human innovation: voluntary cooperation, property rights, and the freedom to
                experiment.
              </p>
              <p>We&apos;re not a school. We&apos;re a partner. And we&apos;re just getting started.</p>
            </div>
          </div>

          <div className="relative mb-10 md:mb-0">
            <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl overflow-hidden">
              <img
                src="ceo.png"
                alt="Sam Mochache, Founder of STEMForge"
                className="w-full h-full object-cover"
                loading="lazy" />
              
            </div>
            <div className="mt-4 md:mt-0 md:absolute md:-bottom-6 md:-left-6 bg-neutral-900 text-white p-5 sm:p-6 md:max-w-xs">
              <p className="text-sm font-light italic">
                &quot;The students who will thrive in 2035 are not those who memorized the most. They
                are those who learned how to learn, build, and adapt.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="mb-14 sm:mb-24">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
            Core Values
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 mb-8 sm:mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              const isActive = activeValue === i;

              return (
                <button
                  key={value.title}
                  type="button"
                  onClick={() => setActiveValue(isActive ? null : i)}
                  aria-expanded={isActive}
                  className={`text-left p-6 sm:p-8 border transition-colors duration-300 ${
                  isActive ?
                  'border-neutral-900 bg-neutral-900 text-white' :
                  'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'}`
                  }>
                  
                  <div className="flex items-start justify-between mb-4">
                    <Icon
                      size={28}
                      aria-hidden="true"
                      className={isActive ? 'text-white/60' : 'text-neutral-400 dark:text-neutral-500'} />
                    
                    <span
                      className={`text-xs ${
                      isActive ? 'text-white/40' : 'text-neutral-300 dark:text-neutral-600'}`
                      }>
                      
                      0{i + 1}
                    </span>
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-light mb-2 ${
                    isActive ? 'text-white' : 'text-neutral-900 dark:text-neutral-50'}`
                    }>
                    
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm font-light leading-relaxed ${
                    isActive ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'}`
                    }>
                    
                    {value.description}
                  </p>

                  {isActive &&
                  <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-white/70 font-light leading-relaxed">
                        {value.detail}
                      </p>
                    </div>
                  }

                  <div
                    className={`mt-4 text-xs tracking-widest uppercase ${
                    isActive ? 'text-white/40' : 'text-neutral-400 dark:text-neutral-500'}`
                    }>
                    
                    {isActive ? 'Tap to close' : 'Tap to expand'}
                  </div>
                </button>);

            })}
          </div>
        </section>

        {/* Differentiators */}
        <section className="mb-14 sm:mb-24">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
            The STEMForge Difference
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 mb-8 sm:mb-12">
            Why Partner With Us
          </h2>

          <div className="space-y-4">
            {DIFFERENTIATORS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 sm:gap-6 p-5 sm:p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors">
                  
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon
                      size={20}
                      aria-hidden="true"
                      className="text-neutral-400 dark:text-neutral-500 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors" />
                    
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-light text-neutral-900 dark:text-neutral-50 mb-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>);

            })}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-14 sm:mb-24">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
            Our Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 mb-8 sm:mb-12">
            Milestones
          </h2>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
            

            <div className="space-y-6 sm:space-y-8">
              {MILESTONES.map((milestone) =>
              <div key={`${milestone.year}-${milestone.quarter}`} className="relative pl-12">
                  <div
                  aria-hidden="true"
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.highlight ?
                  'bg-neutral-900 dark:bg-neutral-100' :
                  'bg-neutral-200 dark:bg-neutral-800'}`
                  }>
                  
                    <div
                    className={`w-2 h-2 rounded-full ${
                    milestone.highlight ?
                    'bg-white dark:bg-neutral-900' :
                    'bg-neutral-400 dark:bg-neutral-600'}`
                    } />
                  
                  </div>

                  <div
                  className={`p-5 sm:p-6 border ${
                  milestone.highlight ?
                  'border-neutral-900 dark:border-neutral-100 bg-neutral-50 dark:bg-neutral-900' :
                  'border-neutral-200 dark:border-neutral-800'}`
                  }>
                  
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                        {milestone.year}
                      </span>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        {milestone.quarter}
                      </span>
                      {milestone.highlight &&
                    <span className="text-[10px] tracking-widest uppercase bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-2 py-1">
                          Milestone
                        </span>
                    }
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">Ready to explore partnership?</h2>
          <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto">
            We select partners committed to long-term impact. If your institution shares our vision,
            request a 30-minute discovery call.
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