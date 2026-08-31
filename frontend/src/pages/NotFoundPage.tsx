import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-5 sm:mb-6">
          Page not found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg mb-8 sm:mb-10">
          The page you were looking for has moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/"
            className="bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors inline-flex items-center justify-center gap-3">
            
            Go Home
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
          <Link
            to="/sitemap"
            className="border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 px-8 py-4 text-sm tracking-wide hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors inline-flex items-center justify-center">
            
            View Sitemap
          </Link>
        </div>
      </div>
    </main>);

}