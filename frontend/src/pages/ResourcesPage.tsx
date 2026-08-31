import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CompassIcon } from
'lucide-react';

const ROADMAP_STAGES = [
{
  stage: '01',
  title: 'Curious Beginner',
  description:
  'No prior experience needed. Start with visual tools, block-based coding, and guided exploration of AI concepts.',
  skills: ['Scratch / Blockly', 'Basic logic', 'AI awareness'],
  borderColor: 'border-green-500/30',
  color: 'from-green-500/20 to-emerald-500/20'
},
{
  stage: '02',
  title: 'Active Learner',
  description:
  'Transition to text-based coding. Build first real projects with Python, understand how AI models work, and create simple automations.',
  skills: ['Python basics', 'Prompt engineering', 'Simple scripts'],
  borderColor: 'border-blue-500/30',
  color: 'from-blue-500/20 to-cyan-500/20'
},
{
  stage: '03',
  title: 'Competent Builder',
  description:
  'Develop full applications, integrate APIs, build physical computing projects, and understand data-driven decision making.',
  skills: ['Full-stack apps', 'Arduino / Robotics', 'Data analysis'],
  borderColor: 'border-purple-500/30',
  color: 'from-purple-500/20 to-violet-500/20'
},
{
  stage: '04',
  title: 'Innovation Practitioner',
  description:
  'Launch real ventures, validate business models, deploy AI solutions, and lead team projects with measurable outcomes.',
  skills: ['Venture launch', 'AI deployment', 'Team leadership'],
  borderColor: 'border-amber-500/30',
  color: 'from-amber-500/20 to-orange-500/20'
},
{
  stage: '05',
  title: 'Confident Creator',
  description:
  'Mentor others, contribute to open-source, pitch to investors, and build solutions that scale across communities.',
  skills: ['Mentorship', 'Open source', 'Scaling impact'],
  borderColor: 'border-red-500/30',
  color: 'from-red-500/20 to-rose-500/20'
}];


const READING_LIST = [
{
  title: 'Why African Students Need AI Literacy, Not Just Computer Literacy',
  slug: 'african-students-ai-literacy',
  excerpt:
  'The distinction between using tools and building with them—and why it matters for the next economy.',
  readTime: '6 min'
},
{
  title: 'Entrepreneurship Education That Actually Builds Founders',
  slug: 'entrepreneurship-education-builds-founders',
  excerpt:
  'Why real ventures beat business plan competitions, and how to teach entrepreneurship as a method.',
  readTime: '5 min'
},
{
  title: 'Teaching Classical Liberal Ideas Without the Lecture Hall',
  slug: 'teaching-classical-liberal-ideas',
  excerpt:
  'How voluntary cooperation, property rights, and innovation incentives become experiential lessons.',
  readTime: '7 min'
},
{
  title: 'The Future Skills Gap: What Kenyan Employers Actually Need',
  slug: 'future-skills-gap-kenya',
  excerpt:
  'Three capabilities that hiring managers consistently ask for—and how schools can build them.',
  readTime: '5 min'
},
{
  title: 'How We Measure Human Flourishing in a STEM Classroom',
  slug: 'measuring-human-flourishing-stem',
  excerpt: 'Beyond exam scores: tracking the growth of creativity, cooperation, and contribution.',
  readTime: '6 min'
},
{
  title: 'AI in Education: Tool or Teacher? Our Approach',
  slug: 'ai-in-education-tool-or-teacher',
  excerpt: 'Why AI is neither replacement nor search engine—but a medium for building.',
  readTime: '5 min'
}];


const TOOLS = [
{
  name: 'Scratch',
  category: 'Visual Coding',
  url: 'https://scratch.mit.edu',
  description: 'Block-based programming for beginners'
},
{
  name: 'Python.org',
  category: 'Language',
  url: 'https://python.org',
  description: 'The programming language that powers AI'
},
{
  name: 'Arduino IDE',
  category: 'Hardware',
  url: 'https://arduino.cc',
  description: 'Program microcontrollers and build physical projects'
},
{
  name: 'TensorFlow Playground',
  category: 'AI/ML',
  url: 'https://playground.tensorflow.org',
  description: 'Visualize how neural networks learn'
},
{
  name: 'Figma',
  category: 'Design',
  url: 'https://figma.com',
  description: 'Design interfaces and prototype products'
},
{
  name: 'GitHub',
  category: 'Collaboration',
  url: 'https://github.com',
  description: 'Version control and open-source contribution'
},
{
  name: 'Kaggle',
  category: 'Data',
  url: 'https://kaggle.com',
  description: 'Datasets, competitions, and notebooks'
},
{
  name: 'Canva',
  category: 'Creativity',
  url: 'https://canva.com',
  description: 'Create presentations, pitch decks, and visual content'
}];


export function ResourcesPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-widest uppercase mb-4">
            Learning Guide
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 leading-tight mb-5 sm:mb-6">
            Your roadmap from curious to creator
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            Five stages of growth. Curated tools. Essential reading. Everything you need to navigate
            the journey from first line of code to launching real ventures.
          </p>
        </div>

        {/* Roadmap */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6 sm:mb-8">
            The Roadmap
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {ROADMAP_STAGES.map((stage, i) =>
            <button
              key={stage.stage}
              type="button"
              onClick={() => setActiveStage(i)}
              aria-pressed={activeStage === i}
              className={`relative p-5 sm:p-6 text-left border transition-colors duration-300 ${
              activeStage === i ?
              `${stage.borderColor} bg-gradient-to-b ${stage.color}` :
              'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'}`
              }>
              
                <span
                className={`text-xs tracking-widest uppercase mb-3 block ${
                activeStage === i ?
                'text-neutral-900 dark:text-neutral-100' :
                'text-neutral-400 dark:text-neutral-500'}`
                }>
                
                  Stage {stage.stage}
                </span>
                <h3
                className={`text-base sm:text-lg font-light ${
                activeStage === i ?
                'text-neutral-900 dark:text-neutral-50' :
                'text-neutral-600 dark:text-neutral-400'}`
                }>
                
                  {stage.title}
                </h3>
                <div
                aria-hidden="true"
                className={`w-8 h-px mt-4 transition-colors ${
                activeStage === i ?
                'bg-neutral-900 dark:bg-neutral-100' :
                'bg-neutral-300 dark:bg-neutral-700'}`
                } />
              
              </button>
            )}
          </div>

          {/* Active stage detail */}
          <div className="mt-6 sm:mt-8 p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
                  {ROADMAP_STAGES[activeStage].title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
                  {ROADMAP_STAGES[activeStage].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ROADMAP_STAGES[activeStage].skills.map((skill) =>
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm">
                    
                      {skill}
                    </span>
                  )}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="text-center">
                  <CompassIcon
                    size={48}
                    aria-hidden="true"
                    className="text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                  
                  <p className="text-neutral-400 dark:text-neutral-500 text-sm">
                    Stage {ROADMAP_STAGES[activeStage].stage} of 05
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reading list */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6 sm:mb-8">
            Reading to Go With Your Roadmap
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {READING_LIST.map((article) =>
            <Link
              key={article.slug}
              to={`/journal/${article.slug}`}
              className="group flex flex-col p-5 sm:p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors">
              
                <div className="flex items-start justify-between gap-4 mb-3">
                  <BookOpenIcon
                  size={20}
                  aria-hidden="true"
                  className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors flex-shrink-0" />
                
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 flex-shrink-0">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-light text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                  Read article <ArrowRightIcon size={14} aria-hidden="true" />
                </div>
              </Link>
            )}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6 sm:mb-8">
            Curated Tools to Start Learning Today
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {TOOLS.map((tool) =>
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 dark:hover:border-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300">
              
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 group-hover:text-white/60 transition-colors">
                    {tool.category}
                  </span>
                  <ExternalLinkIcon
                  size={14}
                  aria-hidden="true"
                  className="text-neutral-300 dark:text-neutral-600 group-hover:text-white/60 transition-colors flex-shrink-0" />
                
                </div>
                <h3 className="text-base sm:text-lg font-light text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-white transition-colors">
                  {tool.name}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light group-hover:text-white/70 transition-colors">
                  {tool.description}
                </p>
              </a>
            )}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Ready to accelerate your journey?
          </h2>
          <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto">
            Partner with STEMForge to bring structured, facilitator-led STEM education to your
            institution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 w-full sm:w-auto px-8 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors">
            
            Explore Partnership
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>);

}