const Footer = () => (
  <footer id="contact" className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <p className="text-xl tracking-tight text-white mb-6">
            <span className="font-light">STEM</span>
            <span className="font-normal">FORGE</span>
          </p>
          <p className="text-neutral-500 font-light max-w-md mb-8">
            Where ambition meets opportunity. Where talent is refined. Where
            future leaders are built.
          </p>
          <div className="space-y-2 text-neutral-400 text-sm">
            <p>Westlands, Nairobi</p>
            <p>+254 740 532 120</p>
            <p>admissions@stemforge.co.ke</p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
            Navigation
          </p>
          <ul className="space-y-3">
            {['Programs', 'Philosophy', 'Community', 'Journal', 'Careers'].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
            Connect
          </p>
          <ul className="space-y-3">
            {['LinkedIn', 'Instagram', 'Twitter', 'YouTube'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm font-light"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-600 text-xs">
          © 2025 STEMForge Academy. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs">
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;