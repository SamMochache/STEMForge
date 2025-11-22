import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrolled }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a href="#" className="text-xl tracking-tight font-light">
          <span className={`${scrolled ? 'text-neutral-900' : 'text-white'}`}>
            STEM
          </span>
          <span
            className={`font-medium ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            FORGE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {['Programs', 'Philosophy', 'Community', 'Journal'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
                scrolled ? 'text-neutral-600' : 'text-white/80'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#contact"
            className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
              scrolled ? 'text-neutral-600' : 'text-white/80'
            }`}
          >
            Contact
          </a>
          <button
            className={`text-sm tracking-wide px-6 py-3 transition-all ${
              scrolled
                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                : 'bg-white text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Apply Now
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-neutral-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-8">
          <div className="flex flex-col gap-6">
            {['Programs', 'Philosophy', 'Community', 'Journal', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-light text-neutral-900 py-2 border-b border-neutral-100"
                >
                  {item}
                </a>
              )
            )}
            <button className="mt-8 bg-neutral-900 text-white py-4 text-sm tracking-wide">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;