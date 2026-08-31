import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  ArrowRightIcon,
  CheckIcon } from
'lucide-react';

const footerSections = [
{
  title: 'Solutions',
  links: [
  { label: 'All Solutions', path: '/programs' },
  { label: 'Browse by Age', path: '/age' },
  { label: 'AI Literacy', path: '/programs/ai-literacy' },
  { label: 'School Visits', path: '/contact' },
  { label: 'Custom Training', path: '/contact' }]

},
{
  title: 'Company',
  links: [
  { label: 'About Us', path: '/about' },
  { label: 'Press & Media', path: '/press' },
  { label: 'Insights', path: '/journal' },
  { label: 'Contact Us', path: '/contact' }]

},
{
  title: 'Resources',
  links: [
  { label: 'FAQ', path: '/faq' },
  { label: 'Learning Guide', path: '/resources' },
  { label: 'Sitemap', path: '/sitemap' }]

},
{
  title: 'Legal',
  links: [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookies' },
  { label: 'Report Abuse', path: '/report-abuse' }]

}];


const socialLinks = [
{ icon: LinkedinIcon, label: 'LinkedIn', url: 'https://linkedin.com/company/stemforge-academy' },
{ icon: TwitterIcon, label: 'Twitter', url: 'https://twitter.com/stemforgeacademy' },
{ icon: InstagramIcon, label: 'Instagram', url: 'https://instagram.com/stemforgeacademy' },
{ icon: YoutubeIcon, label: 'YouTube', url: 'https://youtube.com/@stemforgeacademy' }];


export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-neutral-800 px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-2xl font-light mb-3">Stay Updated</h3>
              <p className="text-neutral-400 font-light">
                Get the latest on new solutions, partner stories, and STEM education insights.
              </p>
            </div>
            <div className="md:self-center">
              {subscribed ?
              <p className="flex items-center gap-3 text-sm text-neutral-300">
                  <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckIcon size={16} aria-hidden="true" />
                  </span>
                  Thank you — you&apos;re on the list.
                </p> :

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 w-full">
                
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 w-full bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors" />
                
                  <button
                  type="submit"
                  className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 px-6 py-3 transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                  
                    <span className="text-sm tracking-wide">Subscribe</span>
                    <ArrowRightIcon size={14} aria-hidden="true" />
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-16">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <h2 className="text-2xl tracking-tight">
                  <span className="font-light">STEM</span>
                  <span className="font-normal">FORGE</span>
                </h2>
              </Link>

              <p className="text-neutral-400 font-light mb-6 max-w-xs leading-relaxed text-sm">
                Elite STEM education for Africa&apos;s most ambitious young minds.
              </p>

              <address className="not-italic space-y-3 text-sm text-neutral-400">
                <div className="flex items-start gap-3">
                  <MapPinIcon
                    size={14}
                    className="flex-shrink-0 mt-1 text-blue-500"
                    aria-hidden="true" />
                  
                  <div>
                    <p className="font-medium text-white">Westlands, Nairobi</p>
                    <p className="text-xs">Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneIcon size={14} className="flex-shrink-0 text-blue-500" aria-hidden="true" />
                  <a
                    href="tel:+254740532120"
                    className="hover:text-white transition-colors text-xs">
                    
                    +254 740 532 120
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MailIcon size={14} className="flex-shrink-0 text-blue-500" aria-hidden="true" />
                  <a
                    href="mailto:admissions@stemforge.co.ke"
                    className="hover:text-white transition-colors text-xs break-all">
                    
                    admissions@stemforge.co.ke
                  </a>
                </div>
              </address>

              <div className="flex flex-wrap gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      aria-label={social.label}>
                      
                      <Icon size={16} aria-hidden="true" />
                    </a>);

                })}
              </div>
            </div>

            {/* Link columns */}
            {footerSections.map((section) =>
            <nav key={section.title} aria-label={section.title}>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-5 md:mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) =>
                <li key={`${section.title}-${link.label}`}>
                      <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors text-sm font-light focus-visible:outline-none focus-visible:text-white">
                    
                        {link.label}
                      </Link>
                    </li>
                )}
                </ul>
              </nav>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 py-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-2">
                  Hours
                </h4>
                <p className="text-neutral-400 text-sm font-light">
                  Mon – Fri: 8:00 AM – 5:00 PM
                  <br />
                  Sat: 9:00 AM – 1:00 PM
                  <br />
                  Sun: Closed
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-2">
                  Certifications
                </h4>
                <p className="text-neutral-400 text-sm font-light">
                  ISO 9001 Certified
                  <br />
                  Kenya Education Ministry Approved
                  <br />
                  Partnership: Tech Leaders Africa
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-neutral-300 font-medium mb-2">
                  Status
                </h4>
                <p className="text-neutral-400 text-sm font-light">
                  All systems operational
                  <br />
                  <a
                    href="mailto:support@stemforge.co.ke"
                    className="hover:text-white transition-colors">
                    
                    Report an issue
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-xs text-center md:text-left">
                © {currentYear} STEMForge Academy. All rights reserved. | Est. 2024
              </p>
              <div className="flex gap-4 sm:gap-6 text-xs flex-wrap justify-center">
                <Link
                  to="/privacy"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  
                  Cookie Policy
                </Link>
                <Link
                  to="/report-abuse"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  
                  Report Abuse
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}