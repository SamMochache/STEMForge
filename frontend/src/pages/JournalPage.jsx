import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import api from '../services/api';

const JournalPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.getBlogPosts();
        setPosts(data.results || data);
      } catch (err) {
        setError('Failed to load journal entries');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Journal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight mb-8">
            Insights & Stories
          </h1>
          <p className="text-neutral-600 text-lg font-light leading-relaxed">
            Reflections on education, innovation, and the journeys of our students and community.
          </p>
        </div>

        {/* Posts */}
        {loading ? (
          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-t border-neutral-200 pt-12 animate-pulse">
                <div className="h-3 w-32 bg-neutral-200 mb-4" />
                <div className="h-8 w-2/3 bg-neutral-200 mb-4" />
                <div className="h-4 w-full bg-neutral-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-neutral-500">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-500">No journal entries yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-0">
            {posts.map((post, i) => (
              <article 
                key={post.id}
                className="group border-t border-neutral-200 py-12 first:border-t-0"
              >
                <Link to={`/journal/${post.slug}`} className="block">
                  <div className="grid md:grid-cols-12 gap-8">
                    {/* Date */}
                    <div className="md:col-span-3">
                      <time className="text-neutral-400 text-sm">
                        {formatDate(post.published_at)}
                      </time>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7">
                      <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-neutral-600 font-light leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="md:col-span-2 flex md:justify-end items-start">
                      <ArrowUpRight 
                        size={20} 
                        className="text-neutral-300 group-hover:text-neutral-900 transition-colors" 
                      />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default JournalPage;