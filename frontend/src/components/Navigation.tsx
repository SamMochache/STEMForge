import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  name: string;
  path?: string;
  submenu?: {label: string;path: string;}[];
}

const mainNav: NavItem[] = [
{ name: 'Solutions', path: '/programs' },
{ name: 'Age', path: '/age' },
{ name: 'Learning Guide', path: '/resources' },
{ name: 'Insights', path: '/journal' },
{
  name: 'About',
  submenu: [
  { label: 'About', path: '/about' },
  { label: 'Press', path: '/press' }]

},
{ name: 'Contact', path: '/contact' }];


interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const showDark = scrolled || !isHome || open;

  useEffect(() => {
    setOpen(false);
    setCompanyOpen(false);
    setMobileSubOpen(false);
  }, [location.pathname]);

  // Lock background scroll only while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close the desktop dropdown on outside pointer/touch input.
  useEffect(() => {
    if (!companyOpen) return;
    const handler = (event: Event) => {
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [companyOpen]);

  // Escape closes whichever layer is open.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setCompanyOpen(false);
      setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const isActive = (path?: string) =>
  path ? location.pathname === path || location.pathname.startsWith(`${path}/`) : false;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
      showDark ?
      'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5' :
      'bg-transparent'}`
      }>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
            
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              STEMFORGE
            </span>
            <span className="hidden xl:inline text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium whitespace-nowrap">
              Nairobi, Kenya
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainNav.map((item) =>
            item.submenu ?
            <div key={item.name} className="relative" ref={companyRef}>
                  <button
                type="button"
                onClick={() => setCompanyOpen(!companyOpen)}
                aria-expanded={companyOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                
                    {item.name}
                    <ChevronDownIcon
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${
                  companyOpen ? 'rotate-180' : ''}`
                  } />
                
                  </button>
                  {companyOpen &&
              <div className="absolute top-full right-0 xl:left-0 xl:right-auto mt-2 w-48 bg-[#141414] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                      {item.submenu.map((sub) =>
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setCompanyOpen(false)}
                  className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:bg-white/10">
                  
                          {sub.label}
                        </Link>
                )}
                    </div>
              }
                </div> :

            <Link
              key={item.path}
              to={item.path as string}
              aria-current={isActive(item.path) ? 'page' : undefined}
              className={`text-sm transition-colors duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 whitespace-nowrap ${
              isActive(item.path) ? 'text-white' : 'text-white/60 hover:text-white'}`
              }>
              
                  {item.name}
                </Link>

            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-5 xl:px-6 py-2.5 bg-white text-[#0a0a0a] text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">
              
              Partner With Us
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu">
              
              {open ?
              <XIcon size={24} aria-hidden="true" /> :

              <MenuIcon size={24} aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {open &&
      <div
        id="mobile-menu"
        className="lg:hidden fixed left-0 right-0 top-20 bottom-0 w-full bg-[#0a0a0a] z-40 overflow-y-auto overscroll-contain px-5 sm:px-6 py-6">
        
          <nav aria-label="Mobile" className="flex flex-col gap-1 pb-8">
            {mainNav.map((item) =>
          item.submenu ?
          <div key={item.name} className="border-b border-white/5">
                  <button
              type="button"
              onClick={() => setMobileSubOpen(!mobileSubOpen)}
              aria-expanded={mobileSubOpen}
              aria-controls="mobile-about-submenu"
              className="w-full min-h-[48px] flex items-center justify-between py-3 text-lg text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
              
                    {item.name}
                    <ChevronDownIcon
                size={18}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                mobileSubOpen ? 'rotate-180' : ''}`
                } />
              
                  </button>
                  {mobileSubOpen &&
            <div id="mobile-about-submenu" className="pb-3 pl-4 flex flex-col">
                      {item.submenu.map((sub) =>
              <Link
                key={sub.path}
                to={sub.path}
                onClick={() => setOpen(false)}
                className="min-h-[44px] flex items-center text-white/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                
                          {sub.label}
                        </Link>
              )}
                    </div>
            }
                </div> :

          <Link
            key={item.path}
            to={item.path as string}
            onClick={() => setOpen(false)}
            aria-current={isActive(item.path) ? 'page' : undefined}
            className={`min-h-[48px] flex items-center py-3 text-lg border-b border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded ${
            isActive(item.path) ? 'text-white' : 'text-white/60 hover:text-white'}`
            }>
            
                  {item.name}
                </Link>

          )}
            <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 w-full py-3.5 bg-white text-[#0a0a0a] font-semibold rounded-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">
            
              Partner With Us
            </Link>
          </nav>
        </div>
      }
    </header>);

}