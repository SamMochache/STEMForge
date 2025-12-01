// frontend/src/pages/SitemapPage.jsx
import { Link } from 'react-router-dom';

const SitemapPage = () => (
  <main className="pt-40 pb-20 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-light text-neutral-900 mb-8">Sitemap</h1>
    <ul className="list-disc pl-6 text-neutral-600 font-light space-y-2">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/programs">Programs</Link></li>
      <li><Link to="/journal">Journal</Link></li>
      <li><Link to="/careers">Careers</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
      <li><Link to="/resources">Learning Guides</Link></li>
      <li><Link to="/scholarships">Scholarships</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/privacy">Privacy Policy</Link></li>
      <li><Link to="/terms">Terms of Service</Link></li>
      <li><Link to="/cookies">Cookie Policy</Link></li>
      <li><Link to="/report">Report Abuse</Link></li>
    </ul>
  </main>
);

export default SitemapPage;
