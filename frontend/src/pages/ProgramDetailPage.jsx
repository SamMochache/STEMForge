import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Clock, Users, BarChart3, BookOpen, Briefcase, MapPin, Mail, Phone } from 'lucide-react';
import { getProgramBySlug } from '../data/programs';

const ProgramDetailPage = () => {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // B2B solution content mapped by slug
  const solutionContent = {
    'ai-literacy': {
      overview: `Students don't just learn about AI—they build with it. This solution integrates generative tools, data literacy, and ethical evaluation into a cohesive learning experience. By the end of the term, every student has trained a model, evaluated its outputs for bias, and designed a human-centered application.`,
      whatYouGet: [
        'Curriculum aligned with CBC Science & Technology strand',
        'AI-assisted learning platform access',
        'Trained facilitators for in-school delivery',
        'Assessment rubrics and progress dashboards',
        'Termly competency reports for school leadership',
        'Student AI prototype portfolio'
      ],
      curriculum: [
        { week: '1-3', topic: 'Generative AI Fundamentals', details: 'Prompt engineering, model behavior, output evaluation. Build first AI-powered tool.' },
        { week: '4-6', topic: 'Data Literacy', details: 'Training data, bias detection, data quality. Analyze real datasets for fairness.' },
        { week: '7-9', topic: 'Ethics & Human-Centered Design', details: 'AI ethics frameworks, stakeholder analysis, design principles.' },
        { week: '10-12', topic: 'Capstone Prototype', details: 'Build and present a functioning AI prototype solving a local problem.' },
      ],
      outcomes: [
        'Use generative AI tools effectively and critically',
        'Evaluate AI outputs for bias and accuracy',
        'Design human-centered AI applications',
        'Understand data quality and its impact on models',
        'Present technical work to non-technical audiences'
      ],
      mentoring: 'Our facilitators are AI practitioners with classroom experience. They guide students through the productive uncertainty of working with generative systems—knowing when to trust, when to challenge, and when human judgment is essential.',
      community: 'Partner schools join a network of institutions exploring AI in education. Share best practices, compare student outcomes, and access quarterly facilitator training updates.',
    },
    'coding-development': {
      overview: `A progressive pathway from Python fundamentals to deployable full-stack applications. Students write production-quality code, use version control, and build a professional portfolio that demonstrates real capability—not just completion.`,
      whatYouGet: [
        'CBC-aligned coding curriculum',
        'Cloud-based development environments',
        'In-school facilitated workshops',
        'Peer code review and mentorship',
        'Deployable project portfolio for each student',
        'Termly progress dashboards'
      ],
      curriculum: [
        { week: '1-4', topic: 'Python Fundamentals', details: 'Variables, control flow, functions, data structures. Build CLI tools and games.' },
        { week: '5-8', topic: 'Web Development', details: 'HTML, CSS, JavaScript, responsive design. Deploy first website.' },
        { week: '9-11', topic: 'Full-Stack Integration', details: 'React, APIs, databases. Build a complete web application.' },
        { week: '12-14', topic: 'Portfolio & Deployment', details: 'Version control, testing, cloud deployment. Final project showcase.' },
      ],
      outcomes: [
        'Write clean, well-structured Python and JavaScript',
        'Build and deploy full-stack web applications',
        'Use version control and collaborative development workflows',
        'Debug code systematically and independently',
        'Present a professional code portfolio'
      ],
      mentoring: 'Facilitators are software engineers with teaching experience. They provide real-time code review, architecture guidance, and industry context that textbooks cannot replicate.',
      community: 'Students contribute to shared repositories, participate in peer reviews, and showcase work at term-end demo days. Partner schools receive access to our facilitator community for ongoing support.',
    },
    'robotics-physical-computing': {
      overview: `Hands-on engineering from first principles. Students program microcontrollers, integrate sensors, and build autonomous systems. Every student leaves with a functioning robot they designed, built, and programmed—not a kit they assembled.`,
      whatYouGet: [
        'Arduino and sensor kits for each student',
        'Mechanical prototyping materials',
        'In-school workshop facilitation',
        'Competition and showcase opportunities',
        'Build guides and safety protocols',
        'Termly progress assessments'
      ],
      curriculum: [
        { week: '1-3', topic: 'Electronics & Circuits', details: 'Breadboards, resistors, LEDs, multimeters. Build and test circuits.' },
        { week: '4-7', topic: 'Microcontroller Programming', details: 'Arduino IDE, I/O pins, sensor integration. Program responsive systems.' },
        { week: '8-10', topic: 'Mechanical Design', details: 'CAD basics, 3D printing, structural design. Build custom chassis.' },
        { week: '11-14', topic: 'Autonomous Systems', details: 'Sensor fusion, decision logic, navigation. Build autonomous robot.' },
      ],
      outcomes: [
        'Program Arduino microcontrollers for real-world tasks',
        'Design and integrate sensor-based automation systems',
        'Build mechanical prototypes using CAD and 3D printing',
        'Troubleshoot hardware-software integration issues',
        'Document and present engineering work professionally'
      ],
      mentoring: 'Facilitators are robotics engineers and competition veterans. They guide students through the iterative cycle of build-test-fail-improve that defines real engineering practice.',
      community: 'Partner schools gain access to inter-school robotics showcases and regional competition pipelines. Students collaborate on team challenges and mentor younger cohorts.',
    },
    'innovation-entrepreneurship': {
      overview: `Entrepreneurship as pedagogy, not just a subject. Students identify real problems, validate solutions with actual customers, and launch micro-ventures with revenue. The venture is the curriculum—not a project at the end of it.`,
      whatYouGet: [
        'Venture creation framework and curriculum',
        'Mentor network of Kenyan founders and investors',
        'In-school facilitated workshops',
        'Demo day and pitch opportunities',
        'Business model validation tools',
        'Termly venture outcome reports'
      ],
      curriculum: [
        { week: '1-3', topic: 'Problem & Market', details: 'Identify problems, customer interviews, market sizing. Validate before building.' },
        { week: '4-6', topic: 'Solution & Model', details: 'Prototyping, business model canvas, unit economics. Test assumptions cheaply.' },
        { week: '7-9', topic: 'Launch & Iterate', details: 'Customer acquisition, revenue testing, feedback loops. Launch real venture.' },
        { week: '10-12', topic: 'Scale & Pitch', details: 'Growth tactics, pitch preparation, demo day. Present to real stakeholders.' },
      ],
      outcomes: [
        'Identify and frame problems worth solving',
        'Validate business models with real customers',
        'Launch revenue-generating micro-ventures',
        'Iterate based on market feedback',
        'Pitch ventures to investors and community leaders'
      ],
      mentoring: 'Mentors are active founders, not academics. They share war stories, introduce networks, and push students to confront the gap between a plan and reality.',
      community: 'Partner schools host rotating demo days where students pitch to local business leaders. Top ventures receive seed funding and continued mentorship through our alumni network.',
    },
  };

  // Default content for any solution
  const defaultContent = {
    overview: `This solution combines theoretical knowledge with hands-on practical experience. Students develop mastery through project-based learning, working on real challenges that matter to their communities.`,
    whatYouGet: [
      'CBC-aligned curriculum and lesson plans',
      'Professional-grade tools and platforms',
      'Trained facilitators for in-school delivery',
      'Assessment rubrics and progress dashboards',
      'Termly competency reports',
      'Student project portfolios'
    ],
    curriculum: [],
    outcomes: [
      'Master core concepts and technologies',
      'Build a professional project portfolio',
      'Develop problem-solving and critical thinking skills',
      'Prepare for advanced academic and career opportunities'
    ],
    mentoring: 'Receive expert guidance from facilitators with industry experience, trained specifically for in-school delivery.',
    community: 'Join a network of partner schools sharing best practices, student outcomes, and continuous curriculum improvements.',
  };

  useEffect(() => {
    // Load from local programs.js instead of API
    const data = getProgramBySlug(slug);
    if (data) {
      setProgram(data);
      setError(null);
    } else {
      setError('Solution not found');
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-32 pb-20 bg-white">
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
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-neutral-500 mb-4">{error || 'Solution not found'}</p>
          <Link 
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1"
          >
            <ArrowLeft size={14} />
            Back to Solutions
          </Link>
        </div>
      </main>
    );
  }

  const content = solutionContent[program.slug] || defaultContent;

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        {/* Back Link */}
        <Link 
          to="/programs"
          className="inline-flex items-center gap-2 text-neutral-500 text-sm hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All Solutions
        </Link>

        {/* Header */}
        <header className="mb-16 pb-12 border-b border-neutral-200">
          <div className="flex flex-wrap gap-4 text-xs text-neutral-400 tracking-wide uppercase mb-6">
            <span className="bg-neutral-100 px-3 py-1">{program.grade_min}–{program.grade_max}</span>
            <span className="bg-neutral-100 px-3 py-1">{program.duration_weeks} weeks</span>
            <span className="bg-neutral-900 text-white px-3 py-1">Core Solution</span>
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
              <span className="text-xs tracking-widest uppercase text-neutral-400">Grades</span>
            </div>
            <p className="text-2xl font-light text-neutral-900">{program.grade_min}–{program.grade_max}</p>
          </div>
          <div className="bg-neutral-50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 size={20} className="text-neutral-400" />
              <span className="text-xs tracking-widest uppercase text-neutral-400">Category</span>
            </div>
            <p className="text-2xl font-light text-neutral-900">Core Solution</p>
          </div>
          <div className="bg-neutral-900 text-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-widest uppercase">Investment</span>
            </div>
            <p className="text-2xl font-light">
              KSh {program.price_per_student?.toLocaleString() || '10,000'}
            </p>
            <p className="text-white/50 text-xs mt-1">per student / term</p>
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
                Solution Overview
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed text-lg">
                {content.overview}
              </p>
            </section>

            {/* What You Get */}
            <section>
              <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
                <Check size={24} className="text-neutral-400" />
                What STEMForge Provides
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

            {/* What School Provides */}
            <section>
              <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
                <MapPin size={24} className="text-neutral-400" />
                What the School Provides
              </h2>
              <div className="space-y-3">
                {program.what_school_provides.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-neutral-300 text-neutral-500 flex items-center justify-center flex-shrink-0 text-xs">
                      —
                    </div>
                    <span className="text-neutral-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            {program.features && program.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-light text-neutral-900 mb-6 flex items-center gap-3">
                  <BarChart3 size={24} className="text-neutral-400" />
                  Key Outcomes
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
                Student Competencies
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
                Facilitator Expertise
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {content.mentoring}
              </p>
            </section>

            {/* Community */}
            <section className="bg-neutral-900 text-white p-8">
              <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                <Users size={20} />
                Partner School Network
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
                Investment
              </p>
              <p className="text-4xl font-light text-neutral-900 mb-2">
                KSh {program.price_per_student?.toLocaleString() || '10,000'}
              </p>
              <p className="text-sm text-neutral-500 mb-8">per student per term</p>

              <Link
                to="/contact"
                className="w-full bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3 mb-4"
              >
                Request Discovery Session
                <ArrowRight size={16} />
              </Link>

              <p className="text-xs text-neutral-500 text-center">
                Pilot partnership rate available for first-time institutional partners
              </p>
            </div>

            {/* Contact */}
            <div className="bg-neutral-50 p-8 mb-8">
              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
                Contact
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Phone size={16} className="text-neutral-400" />
                  <span>[Your Phone/WhatsApp]</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Mail size={16} className="text-neutral-400" />
                  <span>[Your Email]</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">CBC Alignment?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  All solutions are mapped to Kenya's Competency-Based Curriculum strands and learning outcomes.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Teacher involvement?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  Your teachers observe and upskill alongside our facilitators. No added workload.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Schedule flexibility?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  Programs fit within your existing timetable. Minimum 2 hours per week.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Assessment?</h4>
                <p className="text-sm text-neutral-600 font-light">
                  Competency-based portfolios, not just exams. Termly dashboards for school leadership.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 pt-12">
          <div className="bg-neutral-900 text-white p-12 text-center">
            <h3 className="text-3xl font-light mb-4">Ready to partner?</h3>
            <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
              We select partners committed to long-term impact. Request a 30-minute discovery
              call to explore how {program.title} fits your school.
            </p>
            <Link
              to="/contact"
              className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center gap-3"
            >
              Request Discovery Session
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProgramDetailPage;