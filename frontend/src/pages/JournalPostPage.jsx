import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import api from '../services/api';

const JournalPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await api.getBlogPost(slug);
        setPost(data);
      } catch (err) {
        setError('Post not found');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8 animate-pulse">
          <div className="h-4 w-32 bg-neutral-200 mb-8" />
          <div className="h-10 w-3/4 bg-neutral-200 mb-4" />
          <div className="h-4 w-40 bg-neutral-100 mb-12" />
          <div className="space-y-4">
            <div className="h-4 bg-neutral-100" />
            <div className="h-4 bg-neutral-100" />
            <div className="h-4 w-2/3 bg-neutral-100" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-neutral-500 mb-4">{error || 'Post not found'}</p>
          <Link 
            to="/journal"
            className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1"
          >
            <ArrowLeft size={14} />
            Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-8">
        {/* Back Link */}
        <Link 
          to="/journal"
          className="inline-flex items-center gap-2 text-neutral-500 text-sm hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All Entries
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <time className="text-neutral-400 text-sm">
            {formatDate(post.published_at)}
          </time>
        </header>

        {/* Hero Image */}
        {post.hero && (
          <div className="mb-12">
            <img 
              src={post.hero} 
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-neutral prose-lg max-w-none
            prose-headings:font-light prose-headings:tracking-tight
            prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600
            prose-a:text-neutral-900 prose-a:no-underline prose-a:border-b prose-a:border-neutral-900
            prose-strong:font-medium
            prose-blockquote:font-light prose-blockquote:text-neutral-600 prose-blockquote:border-neutral-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
};

export default JournalPostPage;