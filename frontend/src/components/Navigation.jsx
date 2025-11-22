import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrolled, onApplyClick }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on homepage
  const isHome = location.pathname === '/';
  const showDark = scrolled || !isHome;

  const navLinks = [
    { name: 'Programs', path: '/programs' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showDark
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-tight font-light">
          <span className={showDark ? 'text-neutral-900' : 'text-white'}>
            STEM
          </span>
          <span className={`font-medium ${showDark ? 'text-neutral-900' : 'text-white'}`}>
            FORGE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
                showDark ? 'text-neutral-600' : 'text-white/80'
              } ${location.pathname === item.path ? 'opacity-60' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onApplyClick}
            className={`text-sm tracking-wide px-6 py-3 transition-all ${
              showDark
                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                : 'bg-white text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Apply Now
          </button>
        </div>

        <button
          className={`md:hidden ${showDark ? 'text-neutral-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-2xl font-light text-neutral-900 py-2 border-b border-neutral-100"
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setOpen(false);
                onApplyClick();
              }}
              className="mt-8 bg-neutral-900 text-white py-4 text-sm tracking-wide"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;