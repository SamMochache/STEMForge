import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ onApplyClick }) => (
  <section className="min-h-screen bg-neutral-900 relative flex items-end pb-20 md:pb-32">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-800" />

    {/* Minimal line accent */}
    <div className="absolute top-1/3 right-0 w-px h-48 bg-gradient-to-b from-transparent via-neutral-600 to-transparent hidden lg:block" />

    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
      <div className="max-w-4xl">
        <p className="text-neutral-500 text-sm tracking-widest uppercase mb-8">
          STEMFORGE | NAIROBI, KENYA
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8 tracking-tight">
          <br/>
          Cultivating the next generation of
          <span className="block mt-2 font-normal">extraordinary minds</span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl font-light max-w-xl mb-6 leading-relaxed">
          A Future Skills Academy for African secondary schools. We partner with visionary
          institutions to equip students with AI literacy, entrepreneurial mindset, and the
          classical liberal values that drive innovation and human flourishing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <button
            onClick={onApplyClick}
            className="group bg-white text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-all inline-flex items-center gap-3"
          >
            Explore Partnership
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="group text-white px-8 py-4 text-sm tracking-wide border border-neutral-700 hover:border-neutral-500 transition-all inline-flex items-center gap-3">
            <Play size={14} />
            Discover Our Approach
          </button>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mt-12 pt-8 border-t border-neutral-800">
        <p className="text-neutral-500 text-sm tracking-wide italic">
          By invitation. For institutions committed to shaping Africa's next generation of innovators.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3">
        <span className="text-neutral-600 text-xs tracking-widest uppercase rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-neutral-600 to-transparent" />
      </div>
    </div>
  </section>
);

export default Hero;