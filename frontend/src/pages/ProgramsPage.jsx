import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Sparkles, Code, Cpu, Lightbulb } from 'lucide-react';
import { programs } from '../data/programs';

const ProgramsPage = ({ onApplyClick }) => {
  const [expanded, setExpanded] = useState(0);

  // Icon mapping for each solution
  const iconMap = {
    'ai-literacy': Sparkles,
    'coding-development': Code,
    'robotics-physical-computing': Cpu,
    'innovation-entrepreneurship': Lightbulb,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-20 px-8">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
            Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-4">
            Four pillars for future-ready schools
          </h1>
          <p className="text-neutral-600 font-light leading-relaxed text-lg">
            Delivered in-school by trained facilitators. AI-assisted learning, assessment rubrics,
            and progress dashboards included.
          </p>
        </div>

        {/* Solutions List */}
        <div className="space-y-6">
          {programs.map((program, i) => {
            const Icon = iconMap[program.slug] || Sparkles;
            const isExpanded = expanded === i;

            return (
              <div
                key={program.id}
                className={`border transition-all ${
                  isExpanded ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpanded(isExpanded ? -1 : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <Icon size={28} className={isExpanded ? 'text-white/60' : 'text-neutral-400'} />
                    <div>
                      <h3 className={`text-xl md:text-2xl font-light ${isExpanded ? 'text-white' : 'text-neutral-900'}`}>
                        {program.title}
                      </h3>
                      <p className={`text-sm mt-1 ${isExpanded ? 'text-white/60' : 'text-neutral-500'}`}>
                        {program.grade_min}–{program.grade_max} • {program.duration_weeks} weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`hidden md:block text-sm ${isExpanded ? 'text-white/80' : 'text-neutral-900'}`}>
                      KSh {program.price_per_student.toLocaleString()}/student/term
                    </span>
                    {isExpanded ? (
                      <span className="text-white/60 text-sm">Close</span>
                    ) : (
                      <ArrowRight size={20} className={isExpanded ? 'text-white' : 'text-neutral-400'} />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-8 pb-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-white/80 font-light leading-relaxed mb-6">
                        {program.summary}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                            What students build
                          </p>
                          <p className="text-white italic">"{program.features[3]}"</p>
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

                      <div className="flex gap-4">
                        <Link
                          to={`/programs/${program.slug}`}
                          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                        >
                          View full details
                          <ArrowUpRight size={14} />
                        </Link>
                        <button
                          onClick={() => onApplyClick(program)}
                          className="inline-flex items-center gap-2 text-white text-sm font-medium"
                        >
                          Request Discovery Session
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                        Key Outcomes
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.features.slice(0, 3).map((feature, j) => (
                          <span
                            key={j}
                            className="px-4 py-2 bg-white/10 text-white/90 text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="border-t border-white/10 pt-4 space-y-2 text-sm text-white/70 font-light">
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                          What the school provides
                        </p>
                        {program.what_school_provides.map((item, j) => (
                          <p key={j}>— {item}</p>
                        ))}
                      </div>

                      <div className="border-t border-white/10 pt-4 mt-4 space-y-2 text-sm text-white/70 font-light">
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                          What STEMForge provides
                        </p>
                        {program.what_we_provide.map((item, j) => (
                          <p key={j}>— {item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-neutral-900 text-white p-12 text-center">
          <h3 className="text-3xl font-light mb-4">Ready to partner?</h3>
          <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
            We select partners committed to long-term impact. Request a 30-minute discovery
            call to explore mutual fit.
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

export default ProgramsPage;