import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Rocket, Trophy, ArrowRight, ArrowUpRight } from 'lucide-react';
import api from '../services/api';

const ProgramsPage = ({ onApplyClick }) => {
  const [programs, setPrograms] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Categories with icons
  const categories = [
    { id: 'all', name: 'All Programs', icon: Sparkles },
    { id: 'beginner', name: 'Ages 5-9', icon: Zap, ageRange: [5, 9] },
    { id: 'intermediate', name: 'Ages 10-13', icon: Rocket, ageRange: [10, 13] },
    { id: 'advanced', name: 'Ages 14-18', icon: Trophy, ageRange: [14, 18] },
  ];

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await api.getPrograms();
        const results = data.results || data;
        setPrograms(results);
      } catch (err) {
        console.error('Failed to fetch programs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(p => {
        const cat = categories.find(c => c.id === activeCategory);
        if (!cat || !cat.ageRange) return false;
        return p.age_min >= cat.ageRange[0] && p.age_max <= cat.ageRange[1] + 4;
      });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-20 px-8">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
            Programs
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-4">
            Designed for every learner
          </h1>
          <p className="text-neutral-600 font-light leading-relaxed text-lg">
            From visual coding for beginners to advanced AI research. Programs 
            tailored to different ages, interests, and skill levels.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 text-sm tracking-wide transition-all inline-flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-neutral-200 p-8 animate-pulse">
                <div className="h-4 w-24 bg-neutral-200 mb-4" />
                <div className="h-8 w-3/4 bg-neutral-200 mb-4" />
                <div className="h-20 bg-neutral-100" />
              </div>
            ))}
          </div>
        ) : filteredPrograms.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-500">No programs found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className={`group border transition-all ${
                  program.slug === 'individual-mentorship'
                    ? 'border-neutral-900 bg-neutral-900 text-white md:col-span-2'
                    : 'border-neutral-200 hover:border-neutral-400 bg-white'
                }`}
              >
                <div className="p-8">
                  {program.slug === 'individual-mentorship' && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-xs tracking-wide uppercase mb-4">
                      <Sparkles size={12} />
                      Premium Mentorship
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3 text-xs tracking-wide uppercase">
                      <span className={program.slug === 'individual-mentorship' ? 'text-white/60' : 'text-neutral-400'}>
                        Ages {program.age_min}–{program.age_max}
                      </span>
                      <span className={program.slug === 'individual-mentorship' ? 'text-white/40' : 'text-neutral-300'}>
                        •
                      </span>
                      <span className={program.slug === 'individual-mentorship' ? 'text-white/60' : 'text-neutral-400'}>
                        {program.duration_weeks} weeks
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-light mb-3 transition-colors ${
                    program.slug === 'individual-mentorship' 
                      ? 'text-white' 
                      : 'text-neutral-900 group-hover:text-neutral-600'
                  }`}>
                    {program.title}
                  </h3>

                  <p className={`font-light leading-relaxed mb-6 text-sm ${
                    program.slug === 'individual-mentorship' ? 'text-white/80' : 'text-neutral-600'
                  }`}>
                    {program.summary}
                  </p>

                  <div className={`flex items-center justify-between pt-4 border-t ${
                    program.slug === 'individual-mentorship' ? 'border-white/20' : 'border-neutral-100'
                  }`}>
                    <span className={`font-normal ${program.slug === 'individual-mentorship' ? 'text-white' : 'text-neutral-900'}`}>
                      {program.price ? `KSh ${program.price.toLocaleString()}` : 'Contact for pricing'}
                    </span>
                    <div className="flex gap-4">
                      <Link
                        to={`/programs/${program.slug}`}
                        className={`inline-flex items-center gap-2 text-sm transition-colors ${
                          program.slug === 'individual-mentorship'
                            ? 'text-white/80 hover:text-white'
                            : 'text-neutral-600 hover:text-neutral-900'
                        }`}
                      >
                        Details
                        <ArrowUpRight size={14} />
                      </Link>
                      <button
                        onClick={() => onApplyClick(program)}
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          program.slug === 'individual-mentorship' ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        Apply
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Info Banner */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 p-8 bg-white border border-neutral-200">
          <div>
            <div className="text-2xl font-light text-neutral-900 mb-2">
              {programs.length}+ Programs
            </div>
            <p className="text-neutral-600 text-sm font-light">
              Ages 5-18, all skill levels
            </p>
          </div>
          <div>
            <div className="text-2xl font-light text-neutral-900 mb-2">
              1-on-1 Available
            </div>
            <p className="text-neutral-600 text-sm font-light">
              Personalized mentorship tracks
            </p>
          </div>
          <div>
            <div className="text-2xl font-light text-neutral-900 mb-2">
              Flexible Start
            </div>
            <p className="text-neutral-600 text-sm font-light">
              Rolling admissions year-round
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;