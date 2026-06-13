// frontend/src/pages/ResourcesPage.jsx
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Cpu,
  Bot,
  Brain,
  Globe,
  Smartphone,
  Gamepad2,
  ShieldCheck,
  LineChart,
  Trophy,
  Sparkles,
  BookOpen,
  Wrench,
} from 'lucide-react';

// --- Roadmap data -----------------------------------------------------
// Each stage maps to real programs from src/data/programs.js so the
// "Learn more" / "Start here" links go to live program detail pages.
const ROADMAP = [
  {
    stage: '01',
    label: 'Foundations (Free)',
    ageRange: 'Ages 5–15',
    description:
      'No-cost, community-driven entry points. Perfect for total beginners who want to try coding, robotics, or web development before committing to a track.',
    color: 'green',
    icon: Sparkles,
    programs: [
      { title: 'Scratch Jr. Community Workshops', slug: 'scratch-jr-community', note: 'Ages 5–8 · Visual coding' },
      { title: 'Python Self-Paced Learning Path', slug: 'python-self-paced', note: 'Ages 9–13 · Self-guided' },
      { title: 'DIY Robotics & Electronics Club', slug: 'diy-robotics-club', note: 'Ages 10–14 · Open-source hardware' },
      { title: 'Web Development Bootcamp (Open Source)', slug: 'web-dev-bootcamp-free', note: 'Ages 11–15 · HTML/CSS/JS' },
    ],
  },
  {
    stage: '02',
    label: 'Beginner Pathways',
    ageRange: 'Ages 5–9',
    description:
      'Small-group, premium-paced courses for younger learners who want hands-on guidance and a structured introduction to coding and robotics.',
    color: 'blue',
    icon: Wrench,
    programs: [
      { title: 'Scratch Jr. Intensive (Small Group)', slug: 'scratch-jr-intensive', note: 'Ages 5–8 · Max 4 students' },
      { title: 'LEGO Robotics Explorer (Premium)', slug: 'lego-robotics-explorer-premium', note: 'Ages 6–9 · Premium kits' },
    ],
  },
  {
    stage: '03',
    label: 'Core Skills',
    ageRange: 'Ages 9–15',
    description:
      'Build real fluency: object-oriented Python, mechanical and electrical engineering, modern web stacks, and end-to-end product thinking.',
    color: 'purple',
    icon: Code2,
    programs: [
      { title: 'Python Programming Mastery', slug: 'python-mastery', note: 'Ages 9–13 · OOP & data structures' },
      { title: 'Robotics & Engineering Excellence', slug: 'robotics-engineering-premium', note: 'Ages 10–14 · Autonomous systems' },
      { title: 'Web Development Foundations (Premium)', slug: 'web-development-premium', note: 'Ages 10–14 · React fundamentals' },
      { title: 'Digital Innovation Lab', slug: 'digital-innovation-lab', note: 'Ages 11–15 · Apps, 3D & pitching' },
    ],
  },
  {
    stage: '04',
    label: 'Specialization',
    ageRange: 'Ages 12–18',
    description:
      'Go deep into a discipline: AI/ML, full-stack engineering, mobile apps, game development, cybersecurity, or data science — each with a portfolio capstone.',
    color: 'amber',
    icon: Brain,
    programs: [
      { title: 'Python Advanced Programming', slug: 'python-advanced', note: 'Ages 12–16 · Algorithms & APIs' },
      { title: 'Artificial Intelligence & Machine Learning', slug: 'ai-machine-learning', note: 'Ages 13–17 · NLP & computer vision' },
      { title: 'Full-Stack Web Development', slug: 'fullstack-web-development', note: 'Ages 14–18 · React + Node + cloud' },
      { title: 'Mobile App Development (iOS & Android)', slug: 'mobile-app-development', note: 'Ages 13–18 · React Native' },
      { title: 'Game Development with Unity', slug: 'game-development-unity', note: 'Ages 12–17 · C# & physics engines' },
      { title: 'Cybersecurity & Ethical Hacking', slug: 'cybersecurity-hacking', note: 'Ages 14–18 · Pen testing & CTFs' },
      { title: 'Data Science & Analytics Intensive', slug: 'data-science-analytics', note: 'Ages 14–18 · ML pipelines' },
    ],
  },
  {
    stage: '05',
    label: 'Elite & Mastery',
    ageRange: 'Ages 8–18',
    description:
      'For students ready for independent research, competition, or fully personalized mentorship — the final stretch toward university and career launch.',
    color: 'red',
    icon: Trophy,
    programs: [
      { title: 'Advanced Research Track', slug: 'advanced-research', note: 'Ages 15–18 · 1-on-1 mentorship' },
      { title: 'VIP 1-on-1 Mentorship', slug: 'vip-mentorship', note: 'Ages 8–18 · Fully personalized' },
      { title: 'Competition Prep: International Olympiads', slug: 'competition-prep', note: 'Ages 10–18 · Olympiad coaching' },
      { title: 'Summer Immersion Boot Camp (4 Weeks)', slug: 'summer-bootcamp', note: 'Ages 12–17 · Multi-track residential' },
    ],
  },
];

// --- Free external resources, grouped by discipline --------------------
const EXTERNAL_RESOURCES = [
  {
    title: 'Coding Fundamentals',
    icon: Code2,
    color: 'blue',
    links: [
      { name: 'Scratch (MIT Media Lab)', url: 'https://scratch.mit.edu', note: 'Visual block-based programming for young beginners' },
      { name: 'Code.org', url: 'https://code.org', note: 'Free K-12 computer science courses and Hour of Code' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org', note: 'Full curriculum from HTML to full-stack JavaScript' },
      { name: 'Python.org Beginner Guide', url: 'https://docs.python.org/3/tutorial/', note: 'The official Python tutorial, straight from the source' },
    ],
  },
  {
    title: 'Web & App Development',
    icon: Globe,
    color: 'purple',
    links: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', note: 'The definitive reference for HTML, CSS & JavaScript' },
      { name: 'The Odin Project', url: 'https://www.theodinproject.com', note: 'Free, project-based full-stack curriculum' },
      { name: 'MIT App Inventor', url: 'https://appinventor.mit.edu', note: 'Build real Android apps with visual blocks' },
      { name: 'React Documentation', url: 'https://react.dev', note: 'Official guides and interactive tutorials for React' },
    ],
  },
  {
    title: 'Robotics & Electronics',
    icon: Bot,
    color: 'green',
    links: [
      { name: 'Arduino Project Hub', url: 'https://docs.arduino.cc', note: 'Official documentation, tutorials & example projects' },
      { name: 'Tinkercad Circuits', url: 'https://www.tinkercad.com', note: 'Free browser-based circuit & electronics simulator' },
      { name: 'Raspberry Pi Foundation', url: 'https://www.raspberrypi.org/learn', note: 'Free projects for makers and young engineers' },
    ],
  },
  {
    title: 'AI, Data & Machine Learning',
    icon: Brain,
    color: 'amber',
    links: [
      { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', note: 'Bite-sized, hands-on ML & data science courses' },
      { name: 'Google Teachable Machine', url: 'https://teachablemachine.withgoogle.com', note: 'Train your own ML models with no code' },
      { name: 'Elements of AI', url: 'https://www.elementsofai.com', note: 'Free introduction to AI concepts and ethics' },
    ],
  },
  {
    title: 'Mathematics & Problem Solving',
    icon: LineChart,
    color: 'red',
    links: [
      { name: 'Khan Academy', url: 'https://www.khanacademy.org', note: 'Free courses covering math from arithmetic to calculus' },
      { name: 'Brilliant', url: 'https://brilliant.org', note: 'Interactive problem-solving in math, logic & CS' },
      { name: 'Project Euler', url: 'https://projecteuler.net', note: 'Programming challenges rooted in mathematics' },
    ],
  },
  {
    title: 'Game Development & Design',
    icon: Gamepad2,
    color: 'pink',
    links: [
      { name: 'Unity Learn', url: 'https://learn.unity.com', note: 'Official free tutorials for Unity & C#' },
      { name: 'GDQuest (Godot)', url: 'https://www.gdquest.com', note: 'Free tutorials for the open-source Godot engine' },
      { name: 'Figma for Education', url: 'https://www.figma.com/education/', note: 'Free design tool for UI/UX practice' },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    color: 'slate',
    links: [
      { name: 'TryHackMe', url: 'https://tryhackme.com', note: 'Guided, gamified cybersecurity learning paths' },
      { name: 'OverTheWire Wargames', url: 'https://overthewire.org/wargames/', note: 'Classic beginner-friendly security challenges' },
    ],
  },
];

// --- Color helper (Tailwind needs literal class names, so we map them) --
const colorClasses = {
  green: { badge: 'bg-green-500/15 text-green-700', icon: 'text-green-600', border: 'border-green-200' },
  blue: { badge: 'bg-blue-500/15 text-blue-700', icon: 'text-blue-600', border: 'border-blue-200' },
  purple: { badge: 'bg-purple-500/15 text-purple-700', icon: 'text-purple-600', border: 'border-purple-200' },
  amber: { badge: 'bg-amber-500/15 text-amber-700', icon: 'text-amber-600', border: 'border-amber-200' },
  red: { badge: 'bg-red-500/15 text-red-700', icon: 'text-red-600', border: 'border-red-200' },
  pink: { badge: 'bg-pink-500/15 text-pink-700', icon: 'text-pink-600', border: 'border-pink-200' },
  slate: { badge: 'bg-slate-500/15 text-slate-700', icon: 'text-slate-600', border: 'border-slate-200' },
};

const ResourcesPage = ({ onApplyClick }) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Resources & Learning Guides
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Your STEM learning roadmap
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Whether you're just getting curious or aiming for an international olympiad, this
            guide maps the path from your first line of code to mastery — with free resources to
            start today and STEMForge programs to go further.
          </p>
        </div>
      </section>

      {/* How to use this guide */}
      <section className="py-16 px-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-4 text-sm font-medium">
              1
            </div>
            <h3 className="font-normal text-neutral-900 mb-2">Find your stage</h3>
            <p className="text-neutral-600 font-light text-sm leading-relaxed">
              Use the five-stage roadmap below to see where you are today — from total beginner
              to elite specialist.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-4 text-sm font-medium">
              2
            </div>
            <h3 className="font-normal text-neutral-900 mb-2">Start free, anytime</h3>
            <p className="text-neutral-600 font-light text-sm leading-relaxed">
              Every stage links to free external resources you can begin today, no enrollment
              required.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-4 text-sm font-medium">
              3
            </div>
            <h3 className="font-normal text-neutral-900 mb-2">Go further with us</h3>
            <p className="text-neutral-600 font-light text-sm leading-relaxed">
              When you're ready for structured mentorship, each stage links to matching
              STEMForge programs.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">The Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
              Five stages from curious beginner to confident creator
            </h2>
          </div>

          <div className="space-y-16">
            {ROADMAP.map((step) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              return (
                <div key={step.stage} className="grid md:grid-cols-12 gap-8 border-t border-neutral-200 pt-10">
                  {/* Stage marker */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-neutral-300 text-sm tracking-widest">{step.stage}</span>
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.badge}`}>
                        <Icon size={18} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-2">
                      {step.label}
                    </h3>
                    <p className={`inline-block text-xs tracking-widest uppercase px-3 py-1 rounded-full ${colors.badge} mb-4`}>
                      {step.ageRange}
                    </p>
                    <p className="text-neutral-600 font-light text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Programs */}
                  <div className="md:col-span-9 grid sm:grid-cols-2 gap-4">
                    {step.programs.map((prog) => (
                      <Link
                        key={prog.slug}
                        to={`/programs/${prog.slug}`}
                        className={`group block p-5 border ${colors.border} hover:border-neutral-400 hover:shadow-sm transition-all`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="text-neutral-900 font-normal mb-1 group-hover:text-neutral-600 transition-colors">
                              {prog.title}
                            </h4>
                            <p className="text-neutral-500 text-xs font-light">{prog.note}</p>
                          </div>
                          <ArrowUpRight
                            size={16}
                            className="text-neutral-300 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-1"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Browse all programs
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {onApplyClick && (
              <button
                onClick={() => onApplyClick()}
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 text-neutral-900 px-8 py-4 text-sm tracking-wide hover:border-neutral-400 transition-colors"
              >
                Start an application
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Free external resources */}
      <section className="py-20 px-8 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
              Free Resources
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight mb-4">
              Curated tools to start learning today
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed">
              These are reputable, free (or freemium) platforms used by learners and educators
              worldwide. Links open in a new tab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTERNAL_RESOURCES.map((group) => {
              const Icon = group.icon;
              const colors = colorClasses[group.color];
              return (
                <div key={group.title} className="bg-white border border-neutral-200 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.badge}`}>
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-normal text-neutral-900">{group.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-3"
                        >
                          <span>
                            <span className="text-neutral-900 text-sm font-medium group-hover:underline">
                              {link.name}
                            </span>
                            <span className="block text-neutral-500 text-xs font-light mt-0.5">
                              {link.note}
                            </span>
                          </span>
                          <ExternalLink
                            size={14}
                            className="text-neutral-300 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-1"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journal reads */}
      <section className="py-20 px-8 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
                From the Journal
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight tracking-tight">
                Reading to go with your roadmap
              </h2>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-neutral-900 text-sm tracking-wide border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
            >
              All journal entries
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Why Project-Based Learning Works', slug: 'why-project-based-learning-works', icon: BookOpen },
              { title: 'The Role of Failure in Innovation', slug: 'role-of-failure-in-innovation', icon: Sparkles },
              { title: "Preparing Students for Careers That Don't Exist Yet", slug: 'preparing-for-unknown-careers', icon: Cpu },
              { title: 'Student Spotlight: Agricultural Monitoring System', slug: 'student-spotlight-agricultural-monitoring', icon: Smartphone },
            ].map((post) => {
              const Icon = post.icon;
              return (
                <Link
                  key={post.slug}
                  to={`/journal/${post.slug}`}
                  className="group block border border-neutral-200 p-6 hover:border-neutral-400 hover:shadow-sm transition-all"
                >
                  <Icon size={20} className="text-neutral-400 mb-4" aria-hidden="true" />
                  <h3 className="text-neutral-900 font-normal leading-snug mb-4 group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-neutral-500 text-xs tracking-widest uppercase group-hover:text-neutral-900 transition-colors">
                    Read article
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Not sure where you fit on the roadmap?
          </h2>
          <p className="text-neutral-300 font-light text-lg mb-12 max-w-2xl mx-auto">
            Talk to our admissions team. We'll help you (or your child) find the right starting
            point based on age, experience, and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {onApplyClick && (
              <button
                onClick={() => onApplyClick()}
                className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            )}
            <Link
              to="/contact"
              className="border border-white text-white px-10 py-4 text-sm tracking-wide hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
