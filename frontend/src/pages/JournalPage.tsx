import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return '';
  }
};

export function JournalPage() {
  const posts = blogPosts.filter((post) => post.is_published);

  return (
    <main className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Insights
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight mb-6 sm:mb-8">
            Thought Leadership
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Written for school leaders, education innovators, and policy thinkers. Perspectives on
            AI, entrepreneurship, classical liberal education, and the future of learning in Africa.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ?
        <div className="text-center py-20">
            <p className="text-neutral-500 dark:text-neutral-400">
              No insights yet. Check back soon.
            </p>
          </div> :

        <div>
            {posts.map((post) =>
          <article
            key={post.id}
            className="group border-t border-neutral-200 dark:border-neutral-800 py-8 sm:py-12">
            
                <Link to={`/journal/${post.slug}`} className="block">
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-3">
                      <time
                    dateTime={post.published_at}
                    className="text-neutral-400 dark:text-neutral-500 text-sm">
                    
                        {formatDate(post.published_at)}
                      </time>
                    </div>

                    <div className="md:col-span-7">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-900 dark:text-neutral-50 mb-3 sm:mb-4 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="md:col-span-2 flex md:justify-end items-start">
                      <ArrowUpRightIcon
                    size={20}
                    aria-hidden="true"
                    className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
                  
                    </div>
                  </div>
                </Link>
              </article>
          )}
          </div>
        }
      </div>
    </main>);

}