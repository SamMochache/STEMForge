import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus, ArrowRight } from 'lucide-react';
import api from '../services/api';

const Programs = ({ onApplyClick }) => {
  const [expanded, setExpanded] = useState(0);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data if API fails
  const fallbackPrograms = [
    {
      id: 1,
      title: 'Robotics & Engineering',
      slug: 'robotics-engineering',
      age_min: 8,
      age_max: 12,
      duration_weeks: 12,
      summary: 'Foundational principles of mechanical design, sensor integration, and autonomous systems. Students construct and program robots that solve real-world challenges.',
      features: ['Mechanical reasoning', 'Systems thinking', 'Problem decomposition'],
    },
    {
      id: 2,
      title: 'Artificial Intelligence',
      slug: 'artificial-intelligence',
      age_min: 13,
      age_max: 17,
      duration_weeks: 16,
      summary: 'Comprehensive exploration of machine learning, neural networks, and ethical AI. Students develop applications with genuine utility and social impact.',
      features: ['Computational thinking', 'Data literacy', 'Ethical reasoning'],
    },
    {
      id: 3,
      title: 'Digital Innovation',
      slug: 'digital-innovation',
      age_min: 10,
      age_max: 15,
      duration_weeks: 10,
      summary: 'From concept to creation—students master the complete innovation cycle. App development, 3D design, and entrepreneurial thinking converge.',
      features: ['Design thinking', 'Technical fluency', 'Entrepreneurial mindset'],
    },
    {
      id: 4,
      title: 'Advanced Research',
      slug: 'advanced-research',
      age_min: 15,
      age_max: 18,
      duration_weeks: 20,
      summary: 'For exceptional students seeking mastery. Independent research projects mentored by industry professionals and academic partners.',
      features: ['Research methodology', 'Scientific writing', 'Presentation skills'],
    },
  ];

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await api.getPrograms();
        const results = data.results || data;
        setPrograms(results.length > 0 ? results : fallbackPrograms);
      } catch (err) {
        console.error('Failed to fetch programs:', err);
        setPrograms(fallbackPrograms);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  const displayPrograms = loading ? fallbackPrograms : programs;

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
          {displayPrograms.map((prog, i) => (
            <div key={prog.id || i} className="border-b border-neutral-200">
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
                  {prog.age_min && prog.age_max && (
                    <span className="hidden md:block text-neutral-400 text-sm">
                      {prog.age_min}–{prog.age_max} years
                    </span>
                  )}
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
                      {prog.age_min && prog.age_max && (
                        <span>{prog.age_min}–{prog.age_max} years</span>
                      )}
                      {prog.duration_weeks && (
                        <span>{prog.duration_weeks} weeks</span>
                      )}
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed mb-6">
                      {prog.summary}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to={`/programs/${prog.slug}`}
                        className="inline-flex items-center gap-2 text-neutral-600 text-sm hover:text-neutral-900 transition-colors"
                      >
                        Learn more
                        <ArrowUpRight size={14} />
                      </Link>
                      <button
                        onClick={() => onApplyClick(prog)}
                        className="inline-flex items-center gap-2 text-neutral-900 text-sm font-medium"
                      >
                        Apply
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
                      Key Outcomes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(prog.features || []).map((o, j) => (
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
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 text-sm tracking-wide border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
          >
            View all programs
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;