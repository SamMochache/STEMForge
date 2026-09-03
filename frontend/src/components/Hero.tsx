import React from 'react';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TrustBar } from './TrustBar';

export function Hero() {
  const navigate = useNavigate();

  const scrollToModel = () => {
    const modelSection = document.getElementById('the-model-section');
    if (modelSection) {
      modelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative flex items-end bg-neutral-900 min-h-[88svh] md:min-h-screen pt-28 sm:pt-32 pb-14 sm:pb-20 md:pb-32 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-800" />

      {/* Minimal line accent */}
      <div className="absolute top-1/3 right-0 w-px h-48 bg-gradient-to-b from-transparent via-neutral-600 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-[2rem] leading-[1.12] sm:text-4xl md:text-6xl lg:text-7xl font-light text-white md:leading-tight mb-6 md:mb-8 tracking-tight">
            Cultivating the next generation of
            <span className="block mt-1 sm:mt-2 font-normal">extraordinary minds</span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light max-w-xl mb-8 md:mb-6 leading-relaxed">
            Partnering with visionary institutions to equip students with AI literacy, coding &amp;
            robotics, programming, entrepreneurial thinking, and the classical liberal values that
            foster innovation, creativity, and human flourishing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="group bg-white text-neutral-900 w-full sm:w-auto px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              
              Explore Partnership
              <ArrowRightIcon
                size={16}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform" />
              
            </button>
            <button
              type="button"
              onClick={scrollToModel}
              className="group text-white w-full sm:w-auto px-8 py-4 text-sm tracking-wide border border-neutral-700 hover:border-neutral-500 transition-colors inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              
              <PlayIcon size={14} aria-hidden="true" />
              Discover Our Approach
            </button>
          </div>

          {/* Not ready to talk yet? Lower-commitment path than the full inquiry form. */}
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('free-guide-section');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="mt-4 text-neutral-400 hover:text-white text-sm underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors">
            
            Not ready yet? Get our free STEM Partnership Starter Guide instead
          </button>

          {/* Trust bar */}
          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-neutral-800 space-y-4">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-wide italic max-w-xl">
              By invitation. For institutions committed to shaping Africa&apos;s next generation of
              innovators.
            </p>
            <TrustBar variant="dark" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3"
        aria-hidden="true">
        
        <span className="text-neutral-600 text-xs tracking-widest uppercase rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-neutral-600 to-transparent" />
      </div>
    </section>);

}
