import { Award, Zap, Globe, Users, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const AboutPage = ({ onApplyClick }) => {
  const milestones = [
    { year: '2024', event: 'STEMForge Founded in Nairobi, Kenya' },
    { year: '2024', event: 'First institutional partnership cohort launched' },
    { year: '2024', event: 'Partnership with Tech Leaders Africa' },
    { year: '2025', event: 'Three-pillar academy model refined and deployed' },
    { year: '2025', event: 'Expansion to partner schools across Nairobi' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'AI-Native Education',
      description: 'Students build with AI—not just learn about it. Every module integrates generative tools, automation, and data literacy.',
    },
    {
      icon: Globe,
      title: 'Entrepreneurship as Pedagogy',
      description: 'Students launch real ventures, not hypothetical projects. Revenue, customers, failure, iteration.',
    },
    {
      icon: Users,
      title: 'Classical Liberal Foundations',
      description: 'We connect innovation to freedom, property rights to progress, and voluntary exchange to prosperity.',
    },
    {
      icon: Target,
      title: 'Measurable Human Flourishing',
      description: 'Outcomes tracked: critical thinking growth, venture creation, AI competency portfolios, civic engagement.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Students Reached' },
    { number: '3', label: 'Academy Pillars' },
    { number: '98%', label: 'Partner Satisfaction' },
    { number: '12', label: 'Years Combined Expertise' },
  ];

  const teamMembers = [
    {
      name: 'Dr. Amara Okonkwo',
      role: 'Founder & Executive Director',
      bio: 'Former Google engineer & MIT graduate. 15+ years in tech education. Vision: Equip African students with the AI literacy and entrepreneurial capability to lead in a knowledge economy.',
      expertise: ['Technology Leadership', 'STEM Curriculum', 'EdTech Innovation'],
    },
    {
      name: 'James Kipchoge',
      role: 'Head of Academics',
      bio: 'PhD in Computer Science. Previously taught at University of Nairobi. Designed our three-pillar academy model.',
      expertise: ['Curriculum Design', 'Research', 'Student Mentoring'],
    },
    {
      name: 'Sarah Mutua',
      role: 'Director of Student Success',
      bio: 'Career coach with 10+ years experience. Specialist in measuring competency growth and entrepreneurial outcomes.',
      expertise: ['Career Coaching', 'Outcome Measurement', 'Mentorship'],
    },
    {
      name: 'David Chen',
      role: 'Head of Innovation Labs',
      bio: 'Serial entrepreneur, founded 3 tech startups. Leads our facilitator training and innovation challenge design.',
      expertise: ['Facilitator Training', 'Innovation Challenges', 'Venture Creation'],
    },
  ];

  const whyChooseUs = [
    {
      title: 'Selective Partnership',
      description: 'We don\'t work with every school. We select institutions committed to long-term impact—and we limit new partners to ensure quality.',
      icon: Award,
    },
    {
      title: 'AI-Native, Not AI-Aware',
      description: 'Every module integrates generative tools, automation, and data literacy. Students build with AI from day one.',
      icon: Zap,
    },
    {
      title: 'In-School Delivery',
      description: 'Our trained facilitators come to your school. No disruption to your timetable. Just a dedicated 2-hour slot per week.',
      icon: Globe,
    },
    {
      title: 'Measurable Outcomes',
      description: 'Competency growth dashboards, portfolio development, venture creation metrics, and civic engagement tracking.',
      icon: Users,
    },
    {
      title: 'Real Ventures, Not Projects',
      description: 'Students launch businesses with real customers. They experience revenue, failure, and iteration—not simulations.',
      icon: TrendingUp,
    },
    {
      title: 'Trained Facilitators',
      description: 'Every STEMForge facilitator is vetted, trained in our three-pillar model, and continuously developed.',
      icon: Target,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">About STEMForge</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            A Future Skills Academy for African secondary schools
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            We are not a curriculum vendor. We partner with visionary institutions to deliver
            immersive, AI-enabled learning experiences that cultivate the next generation of
            innovators, entrepreneurs, and free thinkers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-neutral-600 font-light text-lg leading-relaxed mb-4">
                To cultivate Africa's next generation of innovators, entrepreneurs, and free
                thinkers—equipped with AI literacy, entrepreneurial capability, and the classical
                liberal values that enable human flourishing.
              </p>
              <p className="text-neutral-600 font-light text-lg leading-relaxed">
                We partner with selective institutions to deliver immersive, AI-enabled learning
                experiences that go beyond curriculum—building character, capability, and the
                foundations for a life of purpose.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-6">What We Are</h2>
              <p className="text-neutral-600 font-light text-lg leading-relaxed mb-4">
                A Future Skills Academy, not a curriculum vendor. We partner with selective
                institutions to deliver immersive, AI-enabled learning experiences.
              </p>
              <p className="text-neutral-600 font-light text-lg leading-relaxed">
                Preparing leaders, not just learners. Our students don't complete hypothetical
                projects—they build AI prototypes, launch micro-ventures, and engage with the ideas
                that have driven human progress for centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-light text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Core Values</p>
            <h2 className="text-4xl font-light text-neutral-900">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="border border-neutral-200 p-8 hover:border-neutral-400 transition-colors">
                  <Icon size={32} className="text-blue-600 mb-4" />
                  <h3 className="text-xl font-normal text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 font-light leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">The STEMForge Difference</p>
            <h2 className="text-4xl font-light text-neutral-900">Why Partner With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-8 border border-neutral-200 hover:shadow-lg transition-shadow">
                  <Icon size={28} className="text-neutral-900 mb-4" />
                  <h3 className="text-lg font-normal text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Leadership</p>
            <h2 className="text-4xl font-light text-neutral-900">Meet Our Team</h2>
            <p className="text-neutral-600 font-light mt-4 max-w-2xl">
              Educators, entrepreneurs, and industry leaders united by a single mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, i) => (
              <div key={i} className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-normal text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4 tracking-wide">{member.role}</p>
                <p className="text-neutral-600 font-light leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Journey</p>
            <h2 className="text-4xl font-light text-neutral-900">Our Milestones</h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-light text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-sm font-medium text-blue-600 mb-1">{milestone.year}</p>
                  <p className="text-lg text-neutral-900">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Explore Partnership?</h2>
          <p className="text-neutral-300 font-light text-lg mb-4 max-w-2xl mx-auto">
            We select partners committed to long-term impact. If your school shares our vision,
            request a 30-minute discovery call.
          </p>
          <p className="text-neutral-500 text-sm mb-12">
            Investment: from KSh 10,000 per student per term. Pilot partnership rate for first-time
            institutional partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onApplyClick}
              className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Request Discovery Session
              <ArrowRight size={16} />
            </button>
            <Link
              to="/contact"
              className="border border-white text-white px-10 py-4 text-sm tracking-wide hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;