import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Users, Globe, Zap, Shield, Heart, Rocket, Award } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We believe technology should be built, not just consumed. Every student leaves with something they created—from AI prototypes to revenue-generating ventures.',
    detail: 'Our curriculum is project-first. Theory serves practice, not the other way around. Students don\'t learn about Python; they deploy applications. They don\'t study robotics; they build autonomous systems.',
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurship',
    description: 'Real ventures, real customers, real revenue. We teach the mindset of building, not just the skills.',
    detail: 'Students launch micro-ventures with actual market validation. They learn that failure is data, that iteration is strategy, and that the best business plans are the ones that survive contact with reality.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We don\'t replace schools—we empower them. Our success is measured by your students\' outcomes.',
    detail: 'We integrate into your timetable, train alongside your teachers, and report to your leadership. We are guests in your institution, and we act like it.',
  },
  {
    icon: Globe,
    title: 'Human Flourishing',
    description: 'We connect innovation to freedom, progress to property rights, and prosperity to voluntary cooperation.',
    detail: 'Classical liberal values are not lectures here. They are lived through market simulations, governance exercises, and the experience of building something that others value enough to pay for.',
  },
];

const DIFFERENTIATORS = [
  {
    icon: Zap,
    title: 'AI-Native, Not AI-Aware',
    description: 'Students don\'t just learn about AI—they build with AI. Every module integrates generative tools, automation, and data literacy.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship as Pedagogy',
    description: 'Students launch real ventures, not hypothetical projects. Revenue, customers, failure, iteration.',
  },
  {
    icon: Shield,
    title: 'Classical Liberal Foundations',
    description: 'We connect innovation to freedom, property rights to progress, and voluntary exchange to prosperity.',
  },
  {
    icon: Heart,
    title: 'Measurable Human Flourishing',
    description: 'Outcomes tracked: critical thinking growth, venture creation, AI competency portfolios, civic engagement.',
  },
  {
    icon: Award,
    title: 'Selective Partnership',
    description: 'We limit new partners to ensure quality. Our facilitators are trained, vetted, and continuously developed.',
  },
];

const MILESTONES = [
  { year: '2024', quarter: 'Q3', event: 'STEMForge founded. Mission defined: make world-class STEM education accessible to every African school.', highlight: false },
  { year: '2024', quarter: 'Q4', event: 'Curriculum framework designed. Partnership model validated with 3 Nairobi schools.', highlight: false },
  { year: '2025', quarter: 'Q1', event: 'Platform development begins. AI-assisted learning environment prototyped.', highlight: false },
  { year: '2025', quarter: 'Q2', event: 'First facilitator cohort trained. 12 educators across Nairobi equipped for in-school delivery.', highlight: false },
  { year: '2025', quarter: 'Q3', event: 'Beta programs launch. 200+ students across 4 institutions begin AI Literacy and Coding pathways.', highlight: true },
  { year: '2025', quarter: 'Q4', event: 'Student outcomes measured. 94% competency improvement in problem-solving assessments.', highlight: false },
  { year: '2026', quarter: 'Q1', event: 'Platform v1.0 released. Full assessment dashboards, progress tracking, and partner portal live.', highlight: false },
  { year: '2026', quarter: 'Q2', event: 'Pilot partnerships open. Selective expansion to 10 institutions. Applications reviewed on rolling basis.', highlight: true },
];

const AboutPage = () => {
  const [activeValue, setActiveValue] = useState(null);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">About STEMForge</p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-6">
            An EdTech company with a mission
          </h1>
          <p className="text-neutral-600 font-light text-lg leading-relaxed">
            We develop technology, curriculum, and facilitation systems that enable schools 
            to deliver world-class STEM education. In-school. During school hours. Without 
            adding to teacher workload.
          </p>
        </div>

        {/* Founder Section */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Meet the Founder</p>
            <h2 className="text-3xl font-light text-neutral-900 mb-4">Sam Mochache</h2>
            <p className="text-neutral-500 text-sm mb-6">Founder & CEO, STEMForge</p>
            
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>
                I started STEMForge because I saw a gap that felt personal. Growing up in Kenya, 
                I watched brilliant peers enter the workforce unprepared for an economy that was 
                already being reshaped by AI, automation, and digital platforms. They had degrees. 
                They didn't have the ability to build.
              </p>
              <p>
                The problem wasn't lack of intelligence. It was lack of access to the right kind 
                of education—one that treats students as creators, not consumers. Where you learn 
                by launching real projects, not just passing exams. Where failure is a feature, 
                not a bug.
              </p>
              <p>
                STEMForge is my answer to that problem. We partner with schools to deliver 
                AI literacy, coding, robotics, and entrepreneurship education that actually 
                prepares students for the world they'll inherit. Not through lectures. Through 
                building. Through iteration. Through the classical liberal values that have 
                driven every great wave of human innovation: voluntary cooperation, property 
                rights, and the freedom to experiment.
              </p>
              <p>
                We're not a school. We're a partner. And we're just getting started.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden">
              <img 
                src="/ceo.png" 
                alt="Sam Mochache, Founder of STEMForge" 
              
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 text-white p-6 max-w-xs">
              <p className="text-sm font-light italic">
                "The students who will thrive in 2035 are not those who memorized the most. 
                They are those who learned how to learn, build, and adapt."
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Core Values</p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-12">What We Stand For</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              const isActive = activeValue === i;
              
              return (
                <button
                  key={i}
                  onClick={() => setActiveValue(isActive ? null : i)}
                  className={`text-left p-8 border transition-all duration-300 ${isActive ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 hover:border-neutral-400'}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon size={28} className={isActive ? 'text-white/60' : 'text-neutral-400'} />
                    <span className={`text-xs ${isActive ? 'text-white/40' : 'text-neutral-300'}`}>0{i + 1}</span>
                  </div>
                  <h3 className={`text-xl font-light mb-2 ${isActive ? 'text-white' : 'text-neutral-900'}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm font-light leading-relaxed ${isActive ? 'text-white/80' : 'text-neutral-600'}`}>
                    {value.description}
                  </p>
                  
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-white/70 font-light leading-relaxed">
                        {value.detail}
                      </p>
                    </div>
                  )}
                  
                  <div className={`mt-4 text-xs tracking-widest uppercase ${isActive ? 'text-white/40' : 'text-neutral-400'}`}>
                    {isActive ? 'Click to close' : 'Click to expand'}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* The STEMForge Difference */}
        <section className="mb-24">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-4">The STEMForge Difference</p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-12">Why Partner With Us</h2>
          
          <div className="space-y-4">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group flex items-start gap-6 p-6 border border-neutral-200 hover:border-neutral-900 transition-colors cursor-default"
                >
                  <div className="w-12 h-12 bg-neutral-100 group-hover:bg-neutral-900 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-24">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-12">Milestones</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200" />
            
            <div className="space-y-8">
              {MILESTONES.map((milestone, i) => (
                <div key={i} className="relative pl-12">
                  {/* Dot */}
                  <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${milestone.highlight ? 'bg-neutral-900' : 'bg-neutral-200'}`}>
                    <div className={`w-2 h-2 rounded-full ${milestone.highlight ? 'bg-white' : 'bg-neutral-400'}`} />
                  </div>
                  
                  <div className={`p-6 border ${milestone.highlight ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-neutral-900">{milestone.year}</span>
                      <span className="text-xs text-neutral-400">{milestone.quarter}</span>
                      {milestone.highlight && (
                        <span className="text-[10px] tracking-widest uppercase bg-neutral-900 text-white px-2 py-1">
                          Milestone
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-600 font-light">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-neutral-900 text-white p-12 text-center">
          <h3 className="text-3xl font-light mb-4">Ready to explore partnership?</h3>
          <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto">
            We select partners committed to long-term impact. If your institution shares our vision,
            request a 30-minute discovery call.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors"
          >
            Request Discovery Session
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;