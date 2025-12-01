import { ArrowUpRight } from 'lucide-react';

const Philosophy = () => (
  <section id="philosophy" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
            We believe in nurturing brilliance through immersion, not instruction
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            At STEMForge, learning transcends the conventional. Here, students
            don't simply absorb knowledge—they create, iterate, and refine.
            Every project strengthens critical abilities: confidence, creativity,
            leadership, and analytical thinking.
          </p>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            Our approach mirrors the methodologies of the world's leading
            innovation centers. Mistakes are celebrated as pathways to mastery.
            Ideas become prototypes, and prototypes become breakthroughs.
          </p>
          <div className="pt-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-neutral-900 text-sm tracking-wide border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
            >
              Discover our approach
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Philosophy;