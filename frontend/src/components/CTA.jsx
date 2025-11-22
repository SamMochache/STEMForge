import { ArrowRight } from 'lucide-react';

const CTA = () => (
  <section className="py-32 bg-neutral-50 border-t border-neutral-100">
    <div className="max-w-7xl mx-auto px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
          Begin
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
          Applications now open for 2025
        </h2>
        <p className="text-neutral-600 font-light text-lg mb-12 max-w-xl mx-auto">
          We accept a limited cohort each term to ensure personalized attention.
          Early application is encouraged.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-neutral-900 text-white px-10 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3">
            Start Application
            <ArrowRight size={16} />
          </button>
          <button className="border border-neutral-300 text-neutral-900 px-10 py-4 text-sm tracking-wide hover:border-neutral-400 transition-colors">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;