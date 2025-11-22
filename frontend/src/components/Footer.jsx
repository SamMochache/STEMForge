import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl tracking-tight text-white mb-6 inline-block">
            <span className="font-light">STEM</span>
            <span className="font-normal">FORGE</span>
          </Link>
          <p className="text-neutral-500 font-light max-w-md mb-8">
            Where ambition meets opportunity. Where talent is refined. Where
            future leaders are built.
          </p>
          <div className="space-y-2 text-neutral-400 text-sm">
            <p>Westlands, Nairobi</p>
            <p>
              <a href="tel:+254740532120" className="hover:text-white transition-colors">
                +254 740 532 120
              </a>
            </p>
            <p>
              <a href="mailto:admissions@stemforge.co.ke" className="hover:text-white transition-colors">
                admissions@stemforge.co.ke
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
            Navigation
          </p>
          <ul className="space-y-3">
            <li>
              <Link to="/programs" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/journal" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
            Connect
          </p>
          <ul className="space-y-3">
            {[
              { name: 'LinkedIn', url: 'https://linkedin.com' },
              { name: 'Instagram', url: 'https://instagram.com' },
              { name: 'Twitter', url: 'https://twitter.com' },
              { name: 'YouTube', url: 'https://youtube.com' },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors text-sm font-light"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} STEMForge Academy. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs">
          <a href="#" className="text-neutral-600 hover:text-neutral-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="text-neutral-600 hover:text-neutral-400 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;