import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

const Programs = () => {
  const [expanded, setExpanded] = useState(0);

  const programs = [
    {
      title: 'Robotics & Engineering',
      ages: '8–12 years',
      duration: '12 weeks',
      desc: 'Foundational principles of mechanical design, sensor integration, and autonomous systems. Students construct and program robots that solve real-world challenges.',
      outcomes: ['Mechanical reasoning', 'Systems thinking', 'Problem decomposition'],
    },
    {
      title: 'Artificial Intelligence',
      ages: '13–17 years',
      duration: '16 weeks',
      desc: 'Comprehensive exploration of machine learning, neural networks, and ethical AI. Students develop applications with genuine utility and social impact.',
      outcomes: ['Computational thinking', 'Data literacy', 'Ethical reasoning'],
    },
    {
      title: 'Digital Innovation',
      ages: '10–15 years',
      duration: '10 weeks',
      desc: 'From concept to creation—students master the complete innovation cycle. App development, 3D design, and entrepreneurial thinking converge.',
      outcomes: ['Design thinking', 'Technical fluency', 'Entrepreneurial mindset'],
    },
    {
      title: 'Advanced Research',
      ages: '15–18 years',
      duration: '20 weeks',
      desc: 'For exceptional students seeking mastery. Independent research projects mentored by industry professionals and academic partners.',
      outcomes: ['Research methodology', 'Scientific writing', 'Presentation skills'],
    },
  ];

  return (
    <section id="programs" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
            Four pathways to excellence
          </h2>
        </div>

        <div className="border-t border-neutral-200">
          {programs.map((prog, i) => (
            <div key={i} className="border-b border-neutral-200">
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="text-neutral-300 text-sm tracking-wide">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {prog.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8">
                  <span className="hidden md:block text-neutral-400 text-sm">
                    {prog.ages}
                  </span>
                  {expanded === i ? (
                    <Minus size={20} className="text-neutral-400" />
                  ) : (
                    <Plus size={20} className="text-neutral-400" />
                  )}
                </div>
              </button>

              {expanded === i && (
                <div className="pb-8 pl-0 md:pl-16 grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex gap-6 text-sm text-neutral-500 mb-4">
                      <span>{prog.ages}</span>
                      <span>{prog.duration}</span>
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
                      Key Outcomes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {prog.outcomes.map((o, j) => (
                        <span
                          key={j}
                          className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 text-sm"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-neutral-900 text-sm tracking-wide border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
          >
            Request program details
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;