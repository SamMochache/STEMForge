import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import api from '../services/api';

const ProgramsPage = ({ onApplyClick }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await api.getPrograms();
        setPrograms(data.results || data);
      } catch (err) {
        setError('Failed to load programs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Programs
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
            Pathways to excellence
          </h1>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            Each program is meticulously designed to nurture specific competencies 
            while fostering creativity, critical thinking, and collaborative skills.
          </p>
        </div>

        {/* Programs Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-neutral-200 p-8 animate-pulse">
                <div className="h-4 w-24 bg-neutral-200 mb-4" />
                <div className="h-8 w-3/4 bg-neutral-200 mb-4" />
                <div className="h-20 bg-neutral-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-neutral-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 text-neutral-900 border-b border-neutral-900 pb-1"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <article 
                key={program.id} 
                className="group border border-neutral-200 hover:border-neutral-400 transition-colors"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-neutral-300 text-sm tracking-wide">
                      0{i + 1}
                    </span>
                    <div className="flex gap-4 text-xs text-neutral-400 tracking-wide uppercase">
                      {program.age_min && program.age_max && (
                        <span>{program.age_min}–{program.age_max} yrs</span>
                      )}
                      {program.duration_weeks && (
                        <span>{program.duration_weeks} weeks</span>
                      )}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">
                    {program.title}
                  </h2>

                  <p className="text-neutral-600 font-light leading-relaxed mb-8">
                    {program.summary}
                  </p>

                  {program.features && program.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {program.features.slice(0, 3).map((feature, j) => (
                        <span 
                          key={j}
                          className="px-3 py-1 bg-neutral-50 border border-neutral-100 text-neutral-600 text-xs tracking-wide"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                    {program.price && (
                      <span className="text-neutral-900 font-normal">
                        KSh {program.price.toLocaleString()}
                      </span>
                    )}
                    <div className="flex gap-6">
                      <Link 
                        to={`/programs/${program.slug}`}
                        className="inline-flex items-center gap-2 text-neutral-600 text-sm hover:text-neutral-900 transition-colors"
                      >
                        Learn more
                        <ArrowUpRight size={14} />
                      </Link>
                      <button
                        onClick={() => onApplyClick(program)}
                        className="inline-flex items-center gap-2 text-neutral-900 text-sm font-medium"
                      >
                        Apply
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProgramsPage;