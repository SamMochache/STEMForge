import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Rocket, Trophy, ArrowRight, ArrowUpRight } from 'lucide-react';
import api from '../services/api';

const ProgramsPage = ({ onApplyClick }) => {
  const [programs, setPrograms] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Category definitions matching backend
  const categories = [
    { id: 'all', name: 'All Programs', icon: Sparkles },
    { id: 'bootstrap', name: 'Bootstrap (Free)', icon: Zap },
    { id: 'beginner', name: 'Beginner', icon: Zap },
    { id: 'intermediate', name: 'Intermediate', icon: Rocket },
    { id: 'advanced', name: 'Advanced', icon: Trophy },
    { id: 'elite', name: 'Elite', icon: Trophy },
  ];

  const categoryConfig = {
    bootstrap: {
      title: 'Bootstrap Pathways',
      subtitle: 'Start your STEM journey for free. Community-funded learning.',
      icon: Zap,
      color: 'green',
    },
    beginner: {
      title: 'Beginner Programs',
      subtitle: 'Ages 5-9. Expert instruction, professional facilities.',
      icon: Zap,
      color: 'blue',
    },
    intermediate: {
      title: 'Intermediate Programs',
      subtitle: 'Ages 10-14. Build deeper skills. Competition-ready.',
      icon: Rocket,
      color: 'purple',
    },
    advanced: {
      title: 'Advanced Programs',
      subtitle: 'Ages 14-18. Professional-grade education. Industry mentorship.',
      icon: Trophy,
      color: 'amber',
    },
    elite: {
      title: 'Elite & Premium Experiences',
      subtitle: 'VIP mentorship, intensive bootcamps, specialized training.',
      icon: Trophy,
      color: 'red',
    },
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await api.getPrograms();
        const results = data.results || data;
        setPrograms(results);
      } catch (err) {
        console.error('Failed to fetch programs:', err);
        setPrograms([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  // Filter programs based on active category
  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  // Group filtered programs by category for display
  const groupedPrograms = () => {
    if (activeCategory === 'all') {
      // Group all programs by category
      const grouped = {};
      categories.forEach(cat => {
        if (cat.id !== 'all') {
          grouped[cat.id] = programs.filter(p => p.category === cat.id);
        }
      });
      return grouped;
    } else {
      // Show single category
      return {
        [activeCategory]: filteredPrograms
      };
    }
  };

  const ProgramCard = ({ program, highlighted = false }) => (
    <div
      className={`group border transition-all h-full flex flex-col ${
        highlighted
          ? 'border-neutral-900 bg-neutral-900 text-white md:col-span-2'
          : 'border-neutral-200 hover:border-neutral-400 bg-white'
      }`}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Badge */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {program.category === 'bootstrap' && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-green-500/20 text-green-700 rounded-full font-medium">
              Free
            </span>
          )}
          {program.category === 'beginner' && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full font-medium">
              Beginner
            </span>
          )}
          {program.category === 'intermediate' && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-purple-500/20 text-purple-700 rounded-full font-medium">
              Intermediate
            </span>
          )}
          {program.category === 'advanced' && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-amber-500/20 text-amber-700 rounded-full font-medium">
              Advanced
            </span>
          )}
          {program.category === 'elite' && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-red-500/20 text-red-700 rounded-full font-medium">
              Elite
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4 gap-2">
            <div className="flex gap-3 text-xs tracking-wide uppercase flex-wrap">
              {program.age_min && program.age_max && (
                <span className={highlighted ? 'text-white/70' : 'text-neutral-500'}>
                  {program.age_min}–{program.age_max} yrs
                </span>
              )}
              {program.duration_weeks && (
                <>
                  <span className={highlighted ? 'text-white/40' : 'text-neutral-300'}>•</span>
                  <span className={highlighted ? 'text-white/70' : 'text-neutral-500'}>
                    {program.duration_weeks} weeks
                  </span>
                </>
              )}
            </div>
          </div>

          <h3 className={`text-xl md:text-2xl font-light mb-3 transition-colors ${
            highlighted
              ? 'text-white'
              : 'text-neutral-900 group-hover:text-neutral-600'
          }`}>
            {program.title}
          </h3>

          <p className={`font-light leading-relaxed mb-6 text-sm ${
            highlighted ? 'text-white/80' : 'text-neutral-600'
          }`}>
            {program.summary}
          </p>
        </div>

        {/* Features */}
        {program.features && program.features.length > 0 && (
          <div className="mb-6 pb-6 border-t" style={{borderColor: highlighted ? 'rgba(255,255,255,0.1)' : undefined}}>
            <div className="flex flex-wrap gap-2">
              {program.features.slice(0, 3).map((feature, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded ${
                    highlighted
                      ? 'bg-white/10 text-white/90'
                      : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  {feature}
                </span>
              ))}
              {program.features.length > 3 && (
                <span className={`text-xs px-2 py-1 rounded ${highlighted ? 'text-white/60' : 'text-neutral-500'}`}>
                  +{program.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4" style={{borderTop: highlighted ? '1px solid rgba(255,255,255,0.1)' : undefined}}>
          <span className={`font-normal text-lg ${highlighted ? 'text-white' : 'text-neutral-900'}`}>
            {program.price === 0 ? 'Free' : `KSh ${program.price.toLocaleString()}`}
          </span>
          <div className="flex gap-3">
            <Link
              to={`/programs/${program.slug}`}
              className={`inline-flex items-center gap-2 text-sm transition-colors ${
                highlighted
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
                highlighted ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Apply
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const grouped = groupedPrograms();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-20 px-8">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Programs</p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-4">
            {loading ? 'Loading Programs...' : `${programs.length} programs for ambitious learners`}
          </h1>
          <p className="text-neutral-600 font-light leading-relaxed text-lg">
            From free bootstrap pathways to elite mentorship. Find your perfect program.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 sticky top-0 z-40 bg-gradient-to-b from-white to-white/95 -mx-8 px-8 py-4">
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-3 font-medium">Filter by Level</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm tracking-wide transition-all inline-flex items-center gap-2 rounded ${
                    activeCategory === cat.id
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  <Icon size={14} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programs by Group */}
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
        ) : Object.keys(grouped).length === 0 || Object.values(grouped).every(g => g.length === 0) ? (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">No programs available. Please try again later.</p>
          </div>
        ) : (
          <div className="space-y-20">
            {Object.entries(grouped).map(([categoryId, categoryPrograms]) => {
              if (categoryPrograms.length === 0) return null;

              const config = categoryConfig[categoryId];
              const Icon = config.icon;

              return (
                <section key={categoryId}>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={24} className={`text-${config.color}-600`} />
                      <h2 className="text-3xl font-light text-neutral-900">{config.title}</h2>
                    </div>
                    <p className="text-neutral-600 font-light">{config.subtitle}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryPrograms.map((program) => (
                      <ProgramCard 
                        key={program.id} 
                        program={program} 
                        highlighted={program.slug === 'vip-mentorship'}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && programs.length > 0 && (
          <div className="mt-20 bg-neutral-900 text-white p-12 text-center">
            <h3 className="text-3xl font-light mb-4">Not sure which program?</h3>
            <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
              Take our quick program finder quiz or schedule a free consultation call with our admissions team.
            </p>
            <button className="bg-white text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors">
              Chat with an Advisor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramsPage;