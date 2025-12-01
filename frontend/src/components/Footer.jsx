// frontend/src/components/Footer.jsx - FIXED VERSION
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Programs',
      links: [
        { label: 'All Programs', path: '/programs' },
        { label: 'Bootstrap Programs', path: '/programs' },
        { label: 'Summer Camps', path: '/programs' },
        { label: 'School Visits', path: '/contact' },
        { label: 'Custom Training', path: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Careers', path: '/careers' },
        { label: 'Press & Media', path: '/press' },
        { label: 'Blog', path: '/journal' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQ', path: '/faq' },
        { label: 'Learning Guides', path: '/resources' },
        { label: 'Scholarships', path: '/scholarships' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Sitemap', path: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Cookie Policy', path: '/cookies' },
        { label: 'Report Abuse', path: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/stemforge-academy' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/stemforgeacademy' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/stemforgeacademy' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/@stemforgeacademy' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-2xl font-light mb-3">Stay Updated</h3>
              <p className="text-neutral-400 font-light">
                Get the latest on new programs, alumni stories, and STEM education insights.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 transition-colors flex items-center gap-2">
                <span className="text-sm tracking-wide">Subscribe</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <h2 className="text-2xl tracking-tight">
                  <span className="font-light">STEM</span>
                  <span className="font-normal">FORGE</span>
                </h2>
              </Link>

              <p className="text-neutral-400 font-light mb-6 max-w-xs leading-relaxed text-sm">
                Elite STEM education for Africa's most ambitious young minds.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-neutral-400">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="flex-shrink-0 mt-1 text-blue-500" />
                  <div>
                    <p className="font-medium text-white">Westlands, Nairobi</p>
                    <p className="text-xs">Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={14} className="flex-shrink-0 text-blue-500" />
                  <a
                    href="tel:+254740532120"
                    className="hover:text-white transition-colors text-xs"
                  >
                    +254 740 532 120
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={14} className="flex-shrink-0 text-blue-500" />
                  <a
                    href="mailto:admissions@stemforge.co.ke"
                    className="hover:text-white transition-colors text-xs"
                  >
                    admissions@stemforge.co.ke
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links Columns */}
            {footerSections.map((section, i) => (
              <div key={i}>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        to={link.path}
                        className="text-neutral-400 hover:text-white transition-colors text-sm font-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 py-8">
            {/* Bottom Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-2">
                  Hours
                </h4>
                <p className="text-neutral-400 text-sm font-light">
                  Mon – Fri: 8:00 AM – 5:00 PM<br />
                  Sat: 9:00 AM – 1:00 PM<br />
                  Sun: Closed
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-2">
                  Certifications
                </h4>
                <p className="text-neutral-400 text-sm font-light">
                  ISO 9001 Certified<br />
                  Kenya Education Ministry Approved<br />
                  Partnership: Tech Leaders Africa
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-2">
                  Status
                </h4>
                <p className="text-neutral-400 text-sm font-light">
                  <Link to="/" className="hover:text-white transition-colors">System Status</Link><br/>
                  <a href="mailto:support@stemforge.co.ke" className="hover:text-white transition-colors">Report Issue</a>
                </p>
              </div>
            </div>

            {/* Copyright & Legal */}
            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-xs">
                © {currentYear} STEMForge Academy. All rights reserved. | Est. 2024
              </p>
              <div className="flex gap-6 text-xs flex-wrap justify-center">
                <Link
                  to="/privacy"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Cookie Policy
                </Link>
                
                <Link
                  to="/report"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Report Abuse
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;