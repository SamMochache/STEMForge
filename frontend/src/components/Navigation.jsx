import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const companyRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const showDark = scrolled || !isHome;

  useEffect(() => {
    setOpen(false);
    setCompanyOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!companyOpen) return;
    const handler = (e) => {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [companyOpen]);

  const mainNav = [
    { name: 'Solutions', path: '/programs' },
    { name: 'Learning Guide', path: '/resources' },
    { name: 'Insights', path: '/journal' },
    {
      name: 'About',
      submenu: [
        { label: 'About', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Careers', path: '/careers' },
        { label: 'Press', path: '/press' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showDark
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-tight text-white">STEMFORGE</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Nairobi, Kenya</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative" ref={companyRef}>
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {companyOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#141414] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                      {item.submenu.map((sub) => (
                        <Link key={sub.path} to={sub.path} onClick={() => setCompanyOpen(false)} className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.path} to={item.path} className="text-sm text-white/60 hover:text-white transition-colors duration-300">
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="px-6 py-2.5 bg-white text-[#0a0a0a] text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-300">
              Partner With Us
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-[#0a0a0a] z-40 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {mainNav.map((item) =>
              item.submenu ? (
                <div key={item.name}>
                  <span className="text-lg text-white/60">{item.name}</span>
                  <div className="mt-2 ml-4 flex flex-col gap-3">
                    {item.submenu.map((sub) => (
                      <Link key={sub.path} to={sub.path} onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">{sub.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="text-lg text-white/60 hover:text-white transition-colors">{item.name}</Link>
              )
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 w-full py-3 bg-white text-[#0a0a0a] font-semibold rounded-full text-center">Partner With Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;