import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Clock, Users, BarChart3, Award, BookOpen, Briefcase } from 'lucide-react';
import api from '../services/api';

const ProgramDetailPage = ({ onApplyClick }) => {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Additional content for each program type
  const programContent = {
    'python-young-coders': {
      overview: `Our Python for Young Coders program introduces students to text-based programming in the most engaging way possible. Rather than learning abstract syntax, students write code to create games, animations, and interactive projects from day one. This hands-on approach ensures that concepts like variables, loops, and conditionals become intuitive, not intimidating.`,
      whatYouGet: [
        'Professional Python IDE setup and configuration',
        'Access to STEMForge\'s curated learning platform',
        'Weekly 1-hour group sessions plus optional office hours',
        'Portfolio of 8-10 complete projects',
        'Completion certificate recognized in academic circles',
        'Lifetime access to recorded lessons'
      ],
      curriculum: [
        { week: '1-3', topic: 'Python Fundamentals', details: 'Variables, data types, operators, input/output. Build your first calculator app.' },
        { week: '4-6', topic: 'Control Flow', details: 'Conditionals (if/else), loops (for/while). Create a guessing game.' },
        { week: '7-10', topic: 'Functions & Data', details: 'Defining functions, lists, dictionaries. Build a task management system.' },
        { week: '11-14', topic: 'Advanced Projects', details: 'Turtle graphics, games, data visualization. Complete capstone project.' },
      ],
      outcomes: [
        'Write clean, well-organized Python code',
        'Solve problems algorithmically',
        'Debug code effectively',
        'Understand computer science fundamentals',
        'Transition to advanced programming'
      ],
      mentoring: 'Each student receives personalized feedback on every project. Our instructors identify learning patterns and provide targeted guidance to overcome challenges.',
      community: 'Join a community of young coders. Participate in code reviews, collaborative projects, and friendly competitions. Share your work and learn from peers.',
    },
    'robotics-engineering': {
      overview: `This is not just a robotics class—it's an engineering immersion. Students learn mechanical principles, electrical concepts, and programming together. They'll construct robots that navigate mazes, sort objects, and solve real-world challenges. Every failure becomes a lesson in the scientific method.`,
      whatYouGet: [
        'Professional Arduino and sensor kits (yours to keep)',
        'Access to state-of-the-art maker labs',
        'Weekly hands-on workshops (3 hours each)',
        'One-on-one engineering mentorship',
        'Competition coaching and team support',
        'Professional portfolio documentation'
      ],
      curriculum: [
        { week: '1-2', topic: 'Electronics Basics', details: 'Circuits, breadboards, resistors, LEDs, multimeters. Build your first circuit.' },
        { week: '3-4', topic: 'Arduino Fundamentals', details: 'Microcontroller programming, I/O pins, sensor basics.' },
        { week: '5-7', topic: 'Mechanical Design', details: 'CAD software intro, 3D printing, structural design. Design custom robot chassis.' },
        { week: '8-12', topic: 'System Integration', details: 'Combining mechanics, electronics, and code. Build autonomous robots.' },
      ],
      outcomes: [
        'Master Arduino microcontroller programming',
        'Understand electrical circuits and sensor integration',
        'Design and build mechanical systems',
        'Develop troubleshooting and debugging skills',
        'Prepare for robotics competitions'
      ],
      mentoring: 'Our instructors are competition-winning roboticists and engineers. They provide real-time guidance, help you troubleshoot complex problems, and prepare you for advanced competitions.',
      community: 'Collaborate with other young engineers on team projects. Participate in inter-cohort competitions. Network with industry professionals through our monthly tech talks.',
    },
    'artificial-intelligence': {
      overview: `Step into the future with our AI and Machine Learning program. From training your first neural network to building a computer vision app, you'll explore cutting-edge technology. Understand how AI works beneath the surface—and build your own intelligent systems.`,
      whatYouGet: [
        'Premium access to GPU computing resources',
        'TensorFlow and PyTorch project licenses',
        'Advanced AI/ML course materials',
        'Weekly live coding sessions with ML engineers',
        'Real dataset access (Kaggle, UCI, etc.)',
        'Industry mentor from tech company'
      ],
      curriculum: [
        { week: '1-2', topic: 'Machine Learning Fundamentals', details: 'Supervised learning, regression, classification. Build your first ML model.' },
        { week: '3-5', topic: 'Neural Networks', details: 'Deep learning basics, backpropagation, activation functions.' },
        { week: '6-8', topic: 'Computer Vision', details: 'Image classification, object detection, CNN architectures.' },
        { week: '9-12', topic: 'NLP & Advanced Topics', details: 'Text processing, sentiment analysis, transformer models.' },
        { week: '13-18', topic: 'Capstone Project', details: 'Build and deploy an AI application solving a real problem.' },
      ],
      outcomes: [
        'Understand machine learning theory and practice',
        'Train and optimize neural networks',
        'Build computer vision applications',
        'Process and analyze large datasets',
        'Deploy ML models to production',
        'Think critically about AI ethics'
      ],
      mentoring: 'Mentored by AI/ML specialists from leading tech companies. They share industry insights, real-world challenges, and best practices.',
      community: 'Present at our monthly AI showcase. Collaborate on research projects. Access exclusive Kaggle competition team opportunities.',
    },
  };

  // Default content for programs without custom data
  const defaultContent = {
    overview: `This comprehensive program combines theoretical knowledge with hands-on practical experience. Students develop mastery through project-based learning, working on real challenges that matter.`,
    whatYouGet: [
      'Professional-grade tools and software',
      'Access to STEMForge facilities and resources',
      'Weekly instructor-led sessions',
      'Personalized feedback and mentorship',
      'Completion certificate',
      'Lifetime community access'
    ],
    curriculum: [],
    outcomes: [
      'Master core concepts and technologies',
      'Build a professional project portfolio',
      'Develop problem-solving skills',
      'Prepare for advanced opportunities'
    ],
    mentoring: 'Receive expert guidance from instructors with years of industry experience.',
    community: 'Learn alongside peers with shared interests. Collaborate on projects and grow together.',
  };

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const data = await api.getProgram(slug);
        setProgram(data);
      } catch (err) {
        setError('Program not found');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProgram();
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 animate-pulse">
          <div className="h-4 w-32 bg-neutral-200 mb-8" />
          <div className="h-12 w-3/4 bg-neutral-200 mb-6" />
          <div className="h-6 w-1/2 bg-neutral-100 mb-12" />
          <div className="space-y-4">
            <div className="h-4 bg-neutral-100" />
            <div className="h-4 bg-neutral-100" />
            <div className="h-4 w-2/3 bg-neutral-100" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !program) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-neutral-500 mb-4">{error || 'Program not found'}</p>
          <Link 
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1"
          >
            <ArrowLeft size={14} />
            Back to Programs
          </Link>
        </div>
      </main>
    );
  }

  // Get custom content or use defaults
  const content = programContent[program.slug] || defaultContent;

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        {/* Back Link */}
        <Link 
          to="/programs"
          className="inline-flex items-center gap-2 text-neutral-500 text-sm hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All Programs
        </Link>

        {/* Header */}
        <header className="mb-16 pb-12 border-b border-neutral-200">
          <div className="flex flex-wrap gap-4 text-xs text-neutral-400 tracking-wide uppercase mb-6">
            {program.age_min && program.age_max && (
              <span className="bg-neutral-100 px-3 py-1">Ages {program.age_min}–{program.age_max}</span>
            )}
            {program.duration_weeks && (
              <>
                <span className="bg-neutral-100 px-3 py-1">{program.duration_weeks} weeks</span>
              </>
            )}
            {program.price && program.price > 0 && (
              <span className="bg-neutral-900 text-white px-3 py-1">Premium Program</span>
            )}
            {program.price === 0 && (
              <span className="bg-green-100 text-green-800 px-3 py-1">Community Program</span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight tracking-tight mb-6">
            {program.title}
          </h1>

          <p className="text-xl text-neutral-600 font-light leading-relaxed">
            {program.summary}
          </p>
        </header>

        {/* Quick Stats */}
        <section className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-neutral-50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={20} className="text-neutral-400" />
              <span className="text-xs tracking-widest uppercase text-neutral-400">Duration</span>
            </div>
            <p className="text-2xl font-light text-neutral-900">{program.duration_weeks} weeks</p>
          </div>
          <div className="bg-neutral-50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users size={20} className="text-neutral-400" />
              <span className="text-xs tracking-widest uppercase text-neutral-400">Ages</span>
            </div>
            <p className="text-2xl font-light text-neutral-900">{program.age_min}–{program.age_max}</p>
          </div>
          <div className="bg-neutral-50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 size={20} className="text-neutral-400" />
              <span className="text-xs tracking-widest uppercase text-neutral-400">Level</span>
            </div>
            <p className="text-2xl font-light text-neutral-900">
              {program.age_max <= 9 ? 'Beginner' : program.age_max <= 14 ? 'Intermediate' : 'Advanced'}
            </p>
          </div>
          <div className="bg-neutral-900 text-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-widest uppercase">Investment</span>
            </div>
            <p className="text-2xl font-light">
              {program.price === 0 ? 'Free' : `KSh ${program.price.toLocaleString()}`}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Detailed Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-light text-neutral-900 mb-4 flex items-center gap-3">
                <BookOpen size={24} className="text-neutral-400" />
                Program Overview
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed text-lg">
                {content.overview}
              </p>
            </section>

            {/* What You Get */}
            <section>
              <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
                <Check size={24} className="text-neutral-400" />
                What's Included
              </h2>
              <div className="space-y-3">
                {content.whatYouGet.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-xs">
                      ✓
                    </div>
                    <span className="text-neutral-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features/Curriculum */}
            {(program.features && program.features.length > 0) && (
              <section>
                <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
                  <Award size={24} className="text-neutral-400" />
                  Key Topics
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-neutral-50">
                      <Check size={16} className="text-neutral-900 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Detailed Curriculum */}
            {content.curriculum.length > 0 && (
              <section>
                <h2 className="text-2xl font-light text-neutral-900 mb-6">Week-by-Week Curriculum</h2>
                <div className="space-y-4">
                  {content.curriculum.map((item, i) => (
                    <div key={i} className="border-l-2 border-neutral-900 pl-6 py-2">
                      <div className="flex gap-4 mb-2">
                        <span className="text-sm tracking-widest uppercase text-neutral-400 font-medium">Weeks {item.week}</span>
                        <h4 className="text-lg font-normal text-neutral-900">{item.topic}</h4>
                      </div>
                      <p className="text-neutral-600 font-light">{item.details}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Learning Outcomes */}
            <section>
              <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
                <BarChart3 size={24} className="text-neutral-400" />
                What You'll Master
              </h2>
              <ul className="space-y-3">
                {content.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-neutral-400 mt-1">→</span>
                    <span className="text-neutral-600 font-light">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Mentoring */}
            <section className="bg-neutral-50 p-8">
              <h3 className="text-xl font-normal text-neutral-900 mb-3 flex items-center gap-3">
                <Briefcase size={20} />
                Expert Mentorship
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {content.mentoring}
              </p>
            </section>

            {/* Community */}
            <section className="bg-neutral-900 text-white p-8">
              <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                <Users size={20} />
                Community & Collaboration
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                {content.community}
              </p>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-1">
            {/* Pricing & CTA */}
            <div className="sticky top-32 bg-neutral-50 p-8 mb-8">
              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                Program Investment
              </p>
              <p className="text-4xl font-light text-neutral-900 mb-8">
                {program.price === 0 ? 'Free' : `KSh ${program.price.toLocaleString()}`}
              </p>
              <button
                onClick={() => onApplyClick(program)}
                className="w-full bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3 mb-4"
              >
                Apply Now
                <ArrowRight size={16} />
              </button>
              <p className="text-xs text-neutral-500 text-center">
                Limited cohorts. Applications reviewed on rolling basis.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Prerequisites?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  {program.age_max <= 9 
                    ? 'None! Complete beginners welcome.' 
                    : program.age_max <= 14
                    ? 'Basic computer skills recommended.'
                    : 'Programming experience helpful but not required.'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">What do I need?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  A laptop or tablet. We provide all software and tools.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">How often?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  {program.duration_weeks <= 10 
                    ? 'Twice weekly (2-3 hours each)'
                    : 'Once weekly (3-4 hours)'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Support?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  Email support, office hours, and community forum access included.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 pt-12">
          <div className="bg-neutral-900 text-white p-12 text-center">
            <h3 className="text-3xl font-light mb-4">Ready to Begin?</h3>
            <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
              Join a cohort of exceptional young learners. Applications are reviewed on a rolling basis with priority given to early applicants.
            </p>
            <button
              onClick={() => onApplyClick(program)}
              className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center gap-3"
            >
              Apply for {program.title}
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProgramDetailPage;