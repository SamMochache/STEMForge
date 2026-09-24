import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProgramBySlug } from '../data/programs';
import { getBlogPostBySlug } from '../data/blogPosts';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://stem-forge.vercel.app').replace(/\/$/, '');
const DEFAULT_TITLE = 'STEMForge | Practical STEM, AI & Innovation Education for Schools';
const DEFAULT_DESCRIPTION = 'STEMForge helps schools equip students with practical AI, coding, robotics, and entrepreneurship skills through project-based STEM education.';

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  '/about': { title: 'About STEMForge | Practical STEM Education', description: 'Learn about STEMForge and our approach to practical, project-based STEM and technology education for schools.' },
  '/age': { title: 'Learning by Age | STEMForge', description: 'Explore STEMForge learning pathways designed around student age, readiness, and practical technology skills.' },
  '/programs': { title: 'STEM Programs for Schools | STEMForge', description: 'Explore STEMForge programs in AI literacy, coding, robotics, and innovation for secondary school students.' },
  '/resources': { title: 'STEM Resources for Schools | STEMForge', description: 'Practical STEM, AI, technology, and education resources for students, teachers, and school leaders.' },
  '/journal': { title: 'STEMForge Journal | AI, Education & Future Skills', description: 'Insights from STEMForge on AI literacy, entrepreneurship, education, future skills, and practical STEM learning.' },
  '/contact': { title: 'Contact STEMForge | Partner With Us', description: 'Contact STEMForge to discuss school partnerships, STEM programs, practical technology education, and training.' },
  '/faq': { title: 'Frequently Asked Questions | STEMForge', description: 'Answers to common questions about STEMForge programs, school partnerships, delivery, and student learning.' },
  '/press': { title: 'Press & Media | STEMForge', description: 'STEMForge press, media information, and organizational resources.' },
  '/terms': { title: 'Terms of Use | STEMForge', description: 'Terms governing use of the STEMForge website and services.' },
  '/privacy': { title: 'Privacy Policy | STEMForge', description: 'How STEMForge handles information submitted through this website.' },
  '/cookies': { title: 'Cookie Policy | STEMForge', description: 'Information about cookies and similar technologies used by STEMForge.' },
  '/report-abuse': { title: 'Report Abuse | STEMForge', description: 'Report security, abuse, or harmful content concerns to STEMForge.' },
  '/sitemap': { title: 'Site Map | STEMForge', description: 'Browse the main pages and resources available on the STEMForge website.' },
};

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>('meta[name="' + name + '"]');
  if (!element) { element = document.createElement('meta'); element.name = name; document.head.appendChild(element); }
  element.content = content;
}

function setProperty(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>('meta[property="' + property + '"]');
  if (!element) { element = document.createElement('meta'); element.setAttribute('property', property); document.head.appendChild(element); }
  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) { element = document.createElement('link'); element.rel = 'canonical'; document.head.appendChild(element); }
  element.href = url;
}

function setJsonLd(data: unknown) {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-stemforge-jsonld]');
  if (!element) { element = document.createElement('script'); element.type = 'application/ld+json'; element.dataset.stemforgeJsonld = 'true'; document.head.appendChild(element); }
  element.textContent = JSON.stringify(data);
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const programMatch = path.match(/^\/programs\/([^/]+)$/);
    const journalMatch = path.match(/^\/journal\/([^/]+)$/);
    const program = programMatch ? getProgramBySlug(programMatch[1]) : undefined;
    const post = journalMatch ? getBlogPostBySlug(journalMatch[1]) : undefined;

    const isNotFound = !program && !post && !routeMeta[path];

    const meta = program
      ? { title: program.title + ' | STEMForge', description: program.summary }
      : post
        ? { title: post.title + ' | STEMForge Journal', description: post.excerpt }
        : routeMeta[path] || { title: 'Page Not Found | STEMForge', description: 'The requested STEMForge page could not be found.' };

    const url = SITE_URL + (path === '/' ? '' : path);
    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('robots', isNotFound || path === '/report-abuse' ? 'noindex,follow' : 'index,follow');
    setProperty('og:title', meta.title);
    setProperty('og:description', meta.description);
    setProperty('og:type', post ? 'article' : 'website');
    setProperty('og:url', url);
    setProperty('og:site_name', 'STEMForge');
    setProperty('og:image', SITE_URL + '/ceo.png');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', SITE_URL + '/ceo.png');
    if (!isNotFound) setCanonical(url);

    const graph: Record<string, unknown>[] = [
      { '@type': 'Organization', '@id': SITE_URL + '/#organization', name: 'STEMForge', url: SITE_URL, logo: SITE_URL + '/stemforge.svg' },
      { '@type': 'WebSite', '@id': SITE_URL + '/#website', name: 'STEMForge', url: SITE_URL, publisher: { '@id': SITE_URL + '/#organization' } },
    ];
    if (program) graph.push({ '@type': 'Course', name: program.title, description: program.summary, url, provider: { '@type': 'Organization', name: 'STEMForge', url: SITE_URL }, educationalLevel: program.age_range });
    if (post) graph.push({ '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: post.published_at, dateModified: post.published_at, mainEntityOfPage: url, publisher: { '@type': 'Organization', name: 'STEMForge', url: SITE_URL } });
    setJsonLd({ '@context': 'https://schema.org', '@graph': graph });
  }, [pathname]);

  return null;
}
