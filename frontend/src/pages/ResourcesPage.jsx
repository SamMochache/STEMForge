import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Cpu, Lightbulb, ArrowRight, ExternalLink, GraduationCap, Layers, Zap, Compass } from 'lucide-react';

const ROADMAP_STAGES = [
  {
    stage: '01',
    title: 'Curious Beginner',
    description: 'No prior experience needed. Start with visual tools, block-based coding, and guided exploration of AI concepts.',
    skills: ['Scratch / Blockly', 'Basic logic', 'AI awareness'],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    stage: '02',
    title: 'Active Learner',
    description: 'Transition to text-based coding. Build first real projects with Python, understand how AI models work, and create simple automations.',
    skills: ['Python basics', 'Prompt engineering', 'Simple scripts'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    stage: '03',
    title: 'Competent Builder',
    description: 'Develop full applications, integrate APIs, build physical computing projects, and understand data-driven decision making.',
    skills: ['Full-stack apps', 'Arduino / Robotics', 'Data analysis'],
    color: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    stage: '04',
    title: 'Innovation Practitioner',
    description: 'Launch real ventures, validate business models, deploy AI solutions, and lead team projects with measurable outcomes.',
    skills: ['Venture launch', 'AI deployment', 'Team leadership'],
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    stage: '05',
    title: 'Confident Creator',
    description: 'Mentor others, contribute to open-source, pitch to investors, and build solutions that scale across communities.',
    skills: ['Mentorship', 'Open source', 'Scaling impact'],
    color: 'from-red-500/20 to-rose-500/20',
    borderColor: 'border-red-500/30',
  },
];

const READING_LIST = [
  {
    title: 'Why African Students Need AI Literacy, Not Just Computer Literacy',
    slug: 'african-students-ai-literacy',
    excerpt: 'The distinction between using tools and building with them—and why it matters for the next economy.',
    readTime: '6 min',
  },
  {
    title: 'Entrepreneurship Education That Actually Builds Founders',
    slug: 'entrepreneurship-education-builds-founders',
    excerpt: 'Why real ventures beat business plan competitions, and how to teach entrepreneurship as a method.',
    readTime: '5 min',
  },
  {
    title: 'Teaching Classical Liberal Ideas Without the Lecture Hall',
    slug: 'teaching-classical-liberal-ideas',
    excerpt: 'How voluntary cooperation, property rights, and innovation incentives become experiential lessons.',
    readTime: '7 min',
  },
  {
    title: 'The Future Skills Gap: What Kenyan Employers Actually Need',
    slug: 'future-skills-gap-kenya',
    excerpt: 'Three capabilities that hiring managers consistently ask for—and how schools can build them.',
    readTime: '5 min',
  },
  {
    title: 'How We Measure Human Flourishing in a STEM Classroom',
    slug: 'measuring-human-flourishing-stem',
    excerpt: 'Beyond exam scores: tracking the growth of creativity, cooperation, and contribution.',
    readTime: '6 min',
  },
  {
    title: 'AI in Education: Tool or Teacher? Our Approach',
    slug: 'ai-in-education-tool-or-teacher',
    excerpt: 'Why AI is neither replacement nor search engine—but a medium for building.',
    readTime: '5 min',
  },
];

const TOOLS = [
  { name: 'Scratch', category: 'Visual Coding', url: 'https://scratch.mit.edu', description: 'Block-based programming for beginners' },
  { name: 'Python.org', category: 'Language', url: 'https://python.org', description: 'The programming language that powers AI' },
  { name: 'Arduino IDE', category: 'Hardware', url: 'https://arduino.cc', description: 'Program microcontrollers and build physical projects' },
  { name: 'TensorFlow Playground', category: 'AI/ML', url: 'https://playground.tensorflow.org', description: 'Visualize how neural networks learn' },
  { name: 'Figma', category: 'Design', url: 'https://figma.com', description: 'Design interfaces and prototype products' },
  { name: 'GitHub', category: 'Collaboration', url: 'https://github.com', description: 'Version control and open-source contribution' },
  { name: 'Kaggle', category: 'Data', url: 'https://kaggle.com', description: 'Datasets, competitions, and notebooks' },
  { name: 'Canva', category: 'Creativity', url: 'https://canva.com', description: 'Create presentations, pitch decks, and visual content' },
];

const ResourcesPage = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Learning Guide</p>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-6">
            Your roadmap from curious to creator
          </h1>
          <p className="text-neutral-600 font-light text-lg leading-relaxed">
            Five stages of growth. Curated tools. Essential reading. Everything you need to navigate the journey from first line of code to launching real ventures.
          </p>
        </div>

        {/* Roadmap */}
        <section className="mb-24">
          <h2 className="text-sm tracking-widest uppercase text-neutral-400 mb-8">The Roadmap</h2>
          
          <div className="grid lg:grid-cols-5 gap-4">
            {ROADMAP_STAGES.map((stage, i) => (
              <button
                key={i}
                onClick={() => setActiveStage(i)}
                className={`relative p-6 text-left border transition-all duration-300 ${activeStage === i ? stage.borderColor + ' bg-gradient-to-b ' + stage.color : 'border-neutral-200 hover:border-neutral-400'}`}
              >
                <span className={`text-xs tracking-widest uppercase mb-3 block ${activeStage === i ? 'text-neutral-900' : 'text-neutral-400'}`}>
                  Stage {stage.stage}
                </span>
                <h3 className={`text-lg font-light mb-2 ${activeStage === i ? 'text-neutral-900' : 'text-neutral-600'}`}>
                  {stage.title}
                </h3>
                <div className={`w-8 h-px mt-4 transition-colors ${activeStage === i ? 'bg-neutral-900' : 'bg-neutral-300'}`} />
              </button>
            ))}
          </div>

          {/* Active Stage Detail */}
          <div className="mt-8 p-8 border border-neutral-200 bg-neutral-50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-light text-neutral-900 mb-4">
                  {ROADMAP_STAGES[activeStage].title}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed mb-6">
                  {ROADMAP_STAGES[activeStage].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ROADMAP_STAGES[activeStage].skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Compass size={48} className="text-neutral-300 mx-auto mb-4" />
                  <p className="text-neutral-400 text-sm">Stage {ROADMAP_STAGES[activeStage].stage} of 05</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reading List */}
        <section className="mb-24">
          <h2 className="text-sm tracking-widest uppercase text-neutral-400 mb-8">Reading to Go With Your Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {READING_LIST.map((article, i) => (
              <Link
                key={i}
                to={`/journal/${article.slug}`}
                className="group p-6 border border-neutral-200 hover:border-neutral-900 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <BookOpen size={20} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                  <span className="text-xs text-neutral-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-light text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  Read article <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-24">
          <h2 className="text-sm tracking-widest uppercase text-neutral-400 mb-8">Curated Tools to Start Learning Today</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS.map((tool, i) => (
              <a
                key={i}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs tracking-widest uppercase text-neutral-400 group-hover:text-white/60 transition-colors">
                    {tool.category}
                  </span>
                  <ExternalLink size={14} className="text-neutral-300 group-hover:text-white/60 transition-colors" />
                </div>
                <h3 className="text-lg font-light text-neutral-900 mb-2 group-hover:text-white transition-colors">
                  {tool.name}
                </h3>
                <p className="text-neutral-500 text-sm font-light group-hover:text-white/70 transition-colors">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-neutral-900 text-white p-12 text-center">
          <h3 className="text-3xl font-light mb-4">Ready to accelerate your journey?</h3>
          <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Partner with STEMForge to bring structured, facilitator-led STEM education to your institution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors"
          >
            Explore Partnership
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;