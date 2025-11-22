import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import api from '../services/api';

const ProgramDetailPage = ({ onApplyClick }) => {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const data = await api.getProgram(slug);
        setProgram(data);
      } catch (err) {
        setError('Program not found');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProgram();
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 animate-pulse">
          <div className="h-4 w-32 bg-neutral-200 mb-8" />
          <div className="h-12 w-3/4 bg-neutral-200 mb-6" />
          <div className="h-6 w-1/2 bg-neutral-100 mb-12" />
          <div className="space-y-4">
            <div className="h-4 bg-neutral-100" />
            <div className="h-4 bg-neutral-100" />
            <div className="h-4 w-2/3 bg-neutral-100" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !program) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-neutral-500 mb-4">{error || 'Program not found'}</p>
          <Link 
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1"
          >
            <ArrowLeft size={14} />
            Back to Programs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Back Link */}
        <Link 
          to="/programs"
          className="inline-flex items-center gap-2 text-neutral-500 text-sm hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All Programs
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-4 text-xs text-neutral-400 tracking-wide uppercase mb-6">
            {program.age_min && program.age_max && (
              <span>Ages {program.age_min}–{program.age_max}</span>
            )}
            {program.duration_weeks && (
              <>
                <span className="text-neutral-300">•</span>
                <span>{program.duration_weeks} weeks</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-6">
            {program.title}
          </h1>

          <p className="text-xl text-neutral-600 font-light leading-relaxed">
            {program.summary}
          </p>
        </header>

        {/* Hero Image */}
        {program.hero_image && (
          <div className="mb-16">
            <img 
              src={program.hero_image} 
              alt={program.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        )}

        {/* Features */}
        {program.features && program.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-8">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {program.features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-4 p-4 bg-neutral-50"
                >
                  <Check size={16} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 font-light">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing & CTA */}
        <section className="border-t border-neutral-200 pt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                Program Fee
              </p>
              {program.price ? (
                <p className="text-3xl font-light text-neutral-900">
                  KSh {program.price.toLocaleString()}
                </p>
              ) : (
                <p className="text-neutral-600">Contact for pricing</p>
              )}
            </div>

            <button
              onClick={() => onApplyClick(program)}
              className="bg-neutral-900 text-white px-10 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3"
            >
              Apply for this Program
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProgramDetailPage;