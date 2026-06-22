import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PILLARS = [
  {
    id: 'ai-literacy',
    title: 'AI Literacy & Responsible Technology',
    slug: 'ai-machine-learning',
    gradeRange: 'Forms 1–4',
    summary:
      'Understanding, using, and critically evaluating AI tools. Ethics, bias, and human-centered design. Students build with AI—not just learn about it.',
    builds: 'A functioning AI prototype',
    delivery: 'In-school workshops + AI-assisted self-paced modules + innovation challenges',
    features: ['AI & generative tools', 'Data literacy', 'Ethics & bias', 'Human-centered design'],
  },
  {
    id: 'innovation-entrepreneurship',
    title: 'Innovation & Entrepreneurship',
    slug: 'digital-innovation-lab',
    gradeRange: 'Forms 2–4',
    summary:
      'Design thinking, business model creation, market validation, pitching, and building real ventures. Students launch real micro-ventures—not hypothetical projects.',
    builds: 'A revenue-generating micro-venture',
    delivery: 'In-school workshops + AI-assisted self-paced modules + innovation challenges',
    features: ['Design thinking', 'Business model canvas', 'Market validation', 'Pitching & iteration'],
  },
  {
    id: 'classical-liberal',
    title: 'Classical Liberal Foundations',
    slug: 'advanced-research',
    gradeRange: 'Forms 3–4',
    summary:
      'Voluntary cooperation, property rights, innovation incentives, and the institutions that enable human flourishing. Connecting innovation to freedom and prosperity.',
    builds: 'A policy brief on innovation ecosystems',
    delivery: 'In-school workshops + AI-assisted self-paced modules + innovation challenges',
    features: ['Voluntary cooperation', 'Property rights', 'Innovation incentives', 'Civic engagement'],
  },
];

const Programs = ({ onApplyClick }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="programs" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">The Academy</p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
            Three pillars of future readiness
          </h2>
          <p className="text-neutral-600 font-light mt-4 leading-relaxed">
            Every pillar is delivered in-school by trained facilitators—with AI-assisted learning,
            assessment rubrics, and progress dashboards included.
          </p>
        </div>

        <div className="border-t border-neutral-200">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.id} className="border-b border-neutral-200">
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
                aria-expanded={expanded === i}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="text-neutral-300 text-sm tracking-wide">0{i + 1}</span>
                  <h3 className="text-xl md:text-2xl font-light text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8">
                  <span className="hidden md:block text-neutral-400 text-sm">
                    {pillar.gradeRange}
                  </span>
                  {expanded === i ? (
                    <Minus size={20} className="text-neutral-400 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus size={20} className="text-neutral-400 flex-shrink-0" aria-hidden="true" />
                  )}
                </div>
              </button>

              {expanded === i && (
                <div className="pb-8 pl-0 md:pl-16 grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex gap-6 text-sm text-neutral-500 mb-4">
                      <span>{pillar.gradeRange}</span>
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed mb-4">
                      {pillar.summary}
                    </p>
                    <div className="mb-4 text-sm">
                      <p className="text-neutral-400 text-xs tracking-widest uppercase mb-1">What students build</p>
                      <p className="text-neutral-700 font-light italic">"{pillar.builds}"</p>
                    </div>
                    <div className="mb-6 text-sm">
                      <p className="text-neutral-400 text-xs tracking-widest uppercase mb-1">Delivery model</p>
                      <p className="text-neutral-600 font-light">{pillar.delivery}</p>
                    </div>
                    <div className="mb-6 border border-neutral-200 p-4 text-sm text-neutral-600 font-light">
                      <p className="text-neutral-400 text-xs tracking-widest uppercase mb-2">Investment</p>
                      <p>From <span className="text-neutral-900 font-normal">KSh 10,000 per student per term</span></p>
                      <p className="text-neutral-400 text-xs mt-1">Pilot partnership rate available for first-time institutional partners</p>
                    </div>
                    <div className="flex gap-4">
                      <Link
                        to={`/programs/${pillar.slug}`}
                        className="inline-flex items-center gap-2 text-neutral-600 text-sm hover:text-neutral-900 transition-colors"
                      >
                        Learn more
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                      <button
                        onClick={() => onApplyClick(pillar)}
                        className="inline-flex items-center gap-2 text-neutral-900 text-sm font-medium"
                      >
                        Request Discovery Session
                        <ArrowRight size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
                      Key Outcomes
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pillar.features.map((o, j) => (
                        <span
                          key={j}
                          className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 text-sm"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-neutral-200 pt-4 space-y-2 text-sm text-neutral-600 font-light">
                      <p className="text-neutral-400 text-xs tracking-widest uppercase mb-2">What the school provides</p>
                      <p>— Dedicated time slot (min. 2 hours/week)</p>
                      <p>— Classroom space</p>
                      <p>— A designated teacher liaison</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 text-sm tracking-wide border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
          >
            View full academy
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;