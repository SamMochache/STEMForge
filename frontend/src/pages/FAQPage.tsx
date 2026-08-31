import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from 'lucide-react';
import { faqs } from '../data/faqs';

export function FAQPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const term = searchTerm.trim().toLowerCase();
  const filteredFaqs = term ?
  faqs.
  map((category) => ({
    ...category,
    questions: category.questions.filter(
      (item) =>
      item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term)
    )
  })).
  filter((category) => category.questions.length > 0) :
  faqs;

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-5 sm:mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light">
            Can&apos;t find an answer?{' '}
            <Link to="/contact" className="underline hover:no-underline">
              Contact us
            </Link>{' '}
            directly.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 sm:py-12 px-5 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <label htmlFor="faq-search" className="sr-only">
              Search FAQs
            </label>
            <SearchIcon
              aria-hidden="true"
              size={20}
              className="absolute left-4 top-3.5 text-neutral-400 dark:text-neutral-500" />
            
            <input
              id="faq-search"
              type="search"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500" />
            
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {filteredFaqs.length === 0 ?
          <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400">
                No results found for &quot;{searchTerm}&quot;
              </p>
            </div> :

          <div className="space-y-10 sm:space-y-8">
              {filteredFaqs.map((category, catIndex) =>
            <div key={category.category}>
                  <h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-5 sm:mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, qIndex) => {
                  const itemId = `${catIndex}-${qIndex}`;
                  const isOpen = expanded === itemId;
                  return (
                    <div
                      key={itemId}
                      className="border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                      
                          <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : itemId)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${itemId}`}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                        
                            <h3 className="font-normal text-neutral-900 dark:text-neutral-50">
                              {item.q}
                            </h3>
                            <ChevronDownIcon
                          size={20}
                          aria-hidden="true"
                          className={`text-neutral-400 dark:text-neutral-500 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''}`
                          } />
                        
                          </button>
                          {isOpen &&
                      <div
                        id={`faq-answer-${itemId}`}
                        className="px-5 sm:px-6 pb-5 sm:pb-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                        
                              <p className="pt-4 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                      }
                        </div>);

                })}
                  </div>
                </div>
            )}
            </div>
          }
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">Still have questions?</h2>
          <p className="text-neutral-300 font-light mb-8">
            Our partnerships team is here to help. Get in touch.
          </p>
          <Link
            to="/contact"
            className="bg-white text-neutral-900 w-full sm:w-auto px-8 sm:px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center justify-center">
            
            Contact Us
          </Link>
        </div>
      </section>
    </main>);

}