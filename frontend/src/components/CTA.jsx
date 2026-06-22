import { ArrowRight } from 'lucide-react';

const CTA = ({ onApplyClick, onBookingClick }) => (
  <section className="py-32 bg-neutral-50 border-t border-neutral-100">
    <div className="max-w-7xl mx-auto px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
          Partnerships
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
          Selective partnerships for visionary schools
        </h2>
        <p className="text-neutral-600 font-light text-lg mb-4 max-w-xl mx-auto">
          We limit new partners to ensure quality. If your institution is committed to
          preparing students for an AI-driven economy, we'd like to hear from you.
        </p>
        <p className="text-neutral-400 text-sm mb-12 max-w-xl mx-auto">
          Investment: from KSh 10,000 per student per term. Pilot partnership rate available
          for select first-time institutional partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onApplyClick}
            className="bg-neutral-900 text-white px-10 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3"
          >
            Request Discovery Session
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onBookingClick}
            className="border border-neutral-300 text-neutral-900 px-10 py-4 text-sm tracking-wide hover:border-neutral-400 transition-colors"
          >
            Explore Partnership
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;