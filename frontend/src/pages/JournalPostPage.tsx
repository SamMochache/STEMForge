import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';

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

export function JournalPostPage() {
  const { slug } = useParams<{slug: string;}>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post || !post.is_published) {
    return (
      <main className="pt-28 sm:pt-32 pb-20 bg-white dark:bg-neutral-950">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">Post not found</p>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 border-b border-neutral-900 dark:border-neutral-50 pb-1 hover:opacity-70 transition-opacity">
            
            <ArrowLeftIcon size={14} aria-hidden="true" />
            Back to Insights
          </Link>
        </div>
      </main>);

  }

  return (
    <main className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-white dark:bg-neutral-950">
      <article className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8 sm:mb-12">
          
          <ArrowLeftIcon size={14} aria-hidden="true" />
          All Entries
        </Link>

        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight mb-4 sm:mb-6">
            {post.title}
          </h1>
          <time
            dateTime={post.published_at}
            className="text-neutral-400 dark:text-neutral-500 text-sm">
            
            {formatDate(post.published_at)}
          </time>
        </header>

        <div
          className="prose prose-neutral dark:prose-invert prose-base sm:prose-lg max-w-none
            prose-headings:font-light prose-headings:tracking-tight
            prose-p:font-light prose-p:leading-relaxed
            prose-a:no-underline prose-a:border-b
            prose-strong:font-medium
            prose-blockquote:font-light"





          dangerouslySetInnerHTML={{ __html: post.content }} />
        
      </article>
    </main>);

}