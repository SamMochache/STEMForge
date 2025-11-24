import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Rocket, Trophy, ArrowRight, ArrowUpRight, Filter } from 'lucide-react';
import api from '../services/api';

const ProgramsPage = ({ onApplyClick }) => {
  const [programs, setPrograms] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [loading, setLoading] = useState(true);

  // Program categorization
  const categories = [
    { id: 'all', name: 'All Programs', icon: Sparkles },
    { id: 'bootstrap', name: 'Bootstrap (Free)', icon: Zap },
    { id: 'beginner', name: 'Beginner (Ages 5-9)', icon: Zap },
    { id: 'intermediate', name: 'Intermediate (Ages 10-14)', icon: Rocket },
    { id: 'advanced', name: 'Advanced (Ages 15-18)', icon: Trophy },
  ];

  const priceFilters = [
    { id: 'all', name: 'All Prices' },
    { id: 'free', name: 'Free Programs' },
    { id: 'premium', name: 'Premium (120K+)' },
    { id: 'elite', name: 'Elite (350K+)' },
  ];

  // Program groupings for organized display
  const programGroups = {
    bootstrap: {
      title: 'Bootstrap Pathways',
      subtitle: 'Start your STEM journey for free. Community-funded learning.',
      icon: Zap,
      color: 'green',
      programs: []
    },
    premiumBeginner: {
      title: 'Premium Beginner Programs',
      subtitle: 'Ages 5-9. Expert instruction, professional facilities.',
      icon: Zap,
      color: 'blue',
      programs: []
    },
    premiumIntermediate: {
      title: 'Intermediate Programs',
      subtitle: 'Ages 10-14. Build deeper skills. Competition-ready.',
      icon: Rocket,
      color: 'purple',
      programs: []
    },
    premiumAdvanced: {
      title: 'Advanced & Specialized',
      subtitle: 'Ages 14-18. Professional-grade education. Industry mentorship.',
      icon: Trophy,
      color: 'amber',
      programs: []
    },
    elite: {
      title: 'Elite & Premium Experiences',
      subtitle: 'VIP mentorship, intensive bootcamps, corporate programs.',
      icon: Trophy,
      color: 'red',
      programs: []
    }
  };

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

  // Organize programs into groups
  const organizePrograms = () => {
    const groups = { ...programGroups };
    
    programs.forEach(program => {
      if (program.price === 0) {
        groups.bootstrap.programs.push(program);
      } else if (program.age_max <= 9 && program.price < 200000) {
        groups.premiumBeginner.programs.push(program);
      } else if (program.age_max <= 14 && program.price < 250000) {
        groups.premiumIntermediate.programs.push(program);
      } else if (program.price >= 400000 || program.slug.includes('mentorship') || program.slug.includes('bootcamp') || program.slug.includes('corporate')) {
        groups.elite.programs.push(program);
      } else {
        groups.premiumAdvanced.programs.push(program);
      }
    });

    return groups;
  };

  // Apply filters
  const applyFilters = () => {
    const groups = organizePrograms();
    
    Object.keys(groups).forEach(key => {
      groups[key].programs = groups[key].programs.filter(p => {
        // Category filter
        if (activeCategory !== 'all') {
          if (activeCategory === 'bootstrap' && p.price !== 0) return false;
          if (activeCategory === 'beginner' && (p.price === 0 || p.age_max > 9)) return false;
          if (activeCategory === 'intermediate' && (p.price === 0 || p.age_max <= 9 || p.age_max > 14)) return false;
          if (activeCategory === 'advanced' && (p.price === 0 || p.age_max <= 14)) return false;
        }

        // Price filter
        if (activePrice !== 'all') {
          if (activePrice === 'free' && p.price !== 0) return false;
          if (activePrice === 'premium' && (p.price === 0 || p.price >= 350000)) return false;
          if (activePrice === 'elite' && p.price < 350000) return false;
        }

        return true;
      });
    });

    return groups;
  };

  const filteredGroups = applyFilters();

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
          {program.price === 0 && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-green-500/20 text-green-700 rounded-full font-medium">
              Free
            </span>
          )}
          {program.price > 0 && program.price < 200000 && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full font-medium">
              Beginner
            </span>
          )}
          {program.price >= 200000 && program.price < 300000 && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-purple-500/20 text-purple-700 rounded-full font-medium">
              Intermediate
            </span>
          )}
          {program.price >= 300000 && program.price < 400000 && (
            <span className="text-xs tracking-widest uppercase px-3 py-1 bg-amber-500/20 text-amber-700 rounded-full font-medium">
              Advanced
            </span>
          )}
          {program.price >= 400000 && (
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-20 px-8">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
            Programs
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-4">
            28 programs for ambitious learners
          </h1>
          <p className="text-neutral-600 font-light leading-relaxed text-lg">
            From free bootstrap pathways to elite mentorship. Find your perfect program.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col gap-4">
          <div>
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

          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-3 font-medium">Filter by Price</p>
            <div className="flex flex-wrap gap-2">
              {priceFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActivePrice(filter.id)}
                  className={`px-4 py-2 text-sm transition-all rounded ${
                    activePrice === filter.id
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
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
        ) : (
          <div className="space-y-20">
            {/* Bootstrap Programs */}
            {filteredGroups.bootstrap.programs.length > 0 && (
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={24} className="text-green-600" />
                    <h2 className="text-3xl font-light text-neutral-900">{filteredGroups.bootstrap.title}</h2>
                  </div>
                  <p className="text-neutral-600 font-light">{filteredGroups.bootstrap.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredGroups.bootstrap.programs.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </section>
            )}

            {/* Premium Beginner */}
            {filteredGroups.premiumBeginner.programs.length > 0 && (
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={24} className="text-blue-600" />
                    <h2 className="text-3xl font-light text-neutral-900">{filteredGroups.premiumBeginner.title}</h2>
                  </div>
                  <p className="text-neutral-600 font-light">{filteredGroups.premiumBeginner.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredGroups.premiumBeginner.programs.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </section>
            )}

            {/* Intermediate */}
            {filteredGroups.premiumIntermediate.programs.length > 0 && (
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket size={24} className="text-purple-600" />
                    <h2 className="text-3xl font-light text-neutral-900">{filteredGroups.premiumIntermediate.title}</h2>
                  </div>
                  <p className="text-neutral-600 font-light">{filteredGroups.premiumIntermediate.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredGroups.premiumIntermediate.programs.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </section>
            )}

            {/* Advanced */}
            {filteredGroups.premiumAdvanced.programs.length > 0 && (
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy size={24} className="text-amber-600" />
                    <h2 className="text-3xl font-light text-neutral-900">{filteredGroups.premiumAdvanced.title}</h2>
                  </div>
                  <p className="text-neutral-600 font-light">{filteredGroups.premiumAdvanced.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredGroups.premiumAdvanced.programs.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </section>
            )}

            {/* Elite */}
            {filteredGroups.elite.programs.length > 0 && (
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy size={24} className="text-red-600" />
                    <h2 className="text-3xl font-light text-neutral-900">{filteredGroups.elite.title}</h2>
                  </div>
                  <p className="text-neutral-600 font-light">{filteredGroups.elite.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredGroups.elite.programs.map((program) => (
                    <ProgramCard key={program.id} program={program} highlighted={program.slug === 'vip-mentorship'} />
                  ))}
                </div>
              </section>
            )}

            {/* No results */}
            {Object.values(filteredGroups).every(g => g.programs.length === 0) && (
              <div className="text-center py-20">
                <p className="text-neutral-500 text-lg">No programs match your filters. Try adjusting your selection.</p>
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 bg-neutral-900 text-white p-12 text-center">
          <h3 className="text-3xl font-light mb-4">Not sure which program?</h3>
          <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
            Take our quick program finder quiz or schedule a free consultation call with our admissions team.
          </p>
          <button className="bg-white text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors">
            Chat with an Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;