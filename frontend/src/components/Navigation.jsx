// ============================================
// frontend/src/components/Navigation.jsx - UPDATED
// ============================================
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = ({ scrolled, onApplyClick }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const showDark = scrolled || !isHome;

  const mainNav = [
    { name: 'Programs', path: '/programs' },
    { name: 'Journal', path: '/journal' },
    {
      name: 'Company',
      submenu: [
        { label: 'About', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Careers', path: '/careers' },
        { label: 'Press', path: '/press' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDark
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl tracking-tight font-light">
          <span className={showDark ? 'text-neutral-900' : 'text-white'}>STEM</span>
          <span className={`font-medium ${showDark ? 'text-neutral-900' : 'text-white'}`}>
            FORGE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {mainNav.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <button
                  className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                    showDark
                      ? 'text-neutral-600 hover:text-neutral-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  <ChevronDown size={14} className="opacity-50" />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
                    showDark ? 'text-neutral-600' : 'text-white/80'
                  } ${isActive(item.path) ? 'opacity-60' : ''}`}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              {item.submenu && (
                <div className="absolute left-0 mt-0 w-48 bg-white border border-neutral-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      to={subitem.path}
                      className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors first:border-t-0"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onApplyClick}
            className={`hidden md:block text-sm tracking-wide px-6 py-3 transition-all ${
              showDark
                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                : 'bg-white text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Apply Now
          </button>

          <button
            className={`md:hidden ${showDark ? 'text-neutral-900' : 'text-white'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-8 overflow-y-auto">
          <div className="flex flex-col gap-4 pb-20">
            {mainNav.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button className="text-2xl font-light text-neutral-900 py-2">
                      {item.name}
                    </button>
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setOpen(false)}
                          className="block text-neutral-600 text-sm py-2 hover:text-neutral-900"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-light text-neutral-900 py-2 border-b border-neutral-100 block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                onApplyClick();
              }}
              className="mt-8 bg-neutral-900 text-white py-4 text-sm tracking-wide w-full"
            >
              Apply Now
            </button>

            {/* Mobile Footer Links */}
            <div className="pt-8 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
              <Link to="/faq" className="block hover:text-neutral-900">FAQ</Link>
              <Link to="/careers" className="block hover:text-neutral-900">Careers</Link>
              <Link to="/contact" className="block hover:text-neutral-900">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;