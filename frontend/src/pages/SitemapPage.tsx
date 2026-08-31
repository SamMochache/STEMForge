import React from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/programs';

const SECTIONS = [
{
  title: 'Main',
  links: [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/programs' },
  { label: 'Age', path: '/age' },
  { label: 'Learning Guide', path: '/resources' },
  { label: 'Insights', path: '/journal' },
  { label: 'Contact', path: '/contact' }]

},
{
  title: 'Company',
  links: [
  { label: 'About', path: '/about' },
  { label: 'Press & Media', path: '/press' },
  { label: 'FAQ', path: '/faq' }]

},
{
  title: 'Legal',
  links: [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookies' },
  { label: 'Report Abuse', path: '/report-abuse' }]

}];


export function SitemapPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-light text-neutral-900 dark:text-neutral-50 mb-8 sm:mb-12">
          Sitemap
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {SECTIONS.map((section) =>
          <nav key={section.title} aria-label={section.title}>
              <h2 className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) =>
              <li key={link.path}>
                    <Link
                  to={link.path}
                  className="text-neutral-600 dark:text-neutral-400 font-light hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}

          <nav aria-label="Individual solutions">
            <h2 className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium mb-4">
              Solutions
            </h2>
            <ul className="space-y-3">
              {programs.map((program) =>
              <li key={program.slug}>
                  <Link
                  to={`/programs/${program.slug}`}
                  className="text-neutral-600 dark:text-neutral-400 font-light hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  
                    {program.title}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </main>);

}