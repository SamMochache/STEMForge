// frontend/src/pages/AboutPage.jsx
import { Award, Zap, Globe, Users, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const AboutPage = ({ onApplyClick }) => {
  const milestones = [
    { year: '2024', event: 'STEMForge Founded in Nairobi, Kenya' },
    { year: '2024', event: 'First cohort of 45 students enrolled' },
    { year: '2024', event: 'Partnership with Tech Leaders Africa' },
    { year: '2025', event: 'Expansion to 28+ specialized programs' },
    { year: '2025', event: 'Alumni success placements begins' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We pursue mastery in everything we do. From curriculum design to student mentorship, excellence is non-negotiable.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We believe in challenging conventions. Our approach mirrors leading tech companies and research institutions globally.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We cultivate a collaborative ecosystem where students, mentors, and families grow together.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success by the careers built, problems solved, and lives transformed.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Aspiring Young Minds Reached' },
    { number: '28+', label: 'Specialized Programs' },
    { number: '98%', label: 'Parent Satisfaction Rate' },
    { number: '12', label: 'Years of Combined Expertise' },
  ];

  const teamMembers = [
    {
      name: 'Dr. Amara Okonkwo',
      role: 'Founder & Executive Director',
      bio: 'Former Google engineer & MIT graduate. 15+ years in tech education. Vision: Make world-class STEM education accessible to Africa\'s brightest.',
      expertise: ['Technology Leadership', 'STEM Curriculum', 'EdTech Innovation'],
    },
    {
      name: 'James Kipchoge',
      role: 'Head of Academics',
      bio: 'PhD in Computer Science. Previously taught at University of Nairobi. Designed 20+ specialized STEM curricula.',
      expertise: ['Curriculum Design', 'Research', 'Student Mentoring'],
    },
    {
      name: 'Sarah Mutua',
      role: 'Director of Student Success',
      bio: 'Career coach with 10+ years experience. Helped 200+ students secure internships and scholarships.',
      expertise: ['Career Coaching', 'Student Success', 'Mentorship'],
    },
    {
      name: 'David Chen',
      role: 'Head of Innovation Labs',
      bio: 'Serial entrepreneur, founded 3 tech startups. Now leading our hands-on maker labs and project-based learning.',
      expertise: ['Robotics', 'Project-Based Learning', 'Innovation'],
    },
  ];

  const whyChooseUs = [
    {
      title: 'Expert Instructors',
      description: 'Our team combines industry experience with proven teaching excellence. Average 12+ years of relevant expertise.',
      icon: Award,
    },
    {
      title: 'Project-Based Learning',
      description: 'Students build real things. Every concept is learned through creation, iteration, and practical application.',
      icon: Zap,
    },
    {
      title: 'Global Standards',
      description: 'Curriculum benchmarked against MIT, Stanford, and leading international STEM programs.',
      icon: Globe,
    },
    {
      title: 'Small Cohorts',
      description: 'Maximum 15 students per class. Personalized attention ensures every student reaches their potential.',
      icon: Users,
    },
    {
      title: 'Career Pathways',
      description: 'Direct support transitioning to universities, internships, and tech careers. 85% placed within 6 months.',
      icon: TrendingUp,
    },
    {
      title: 'Industry Partnerships',
      description: 'Partnerships with Nairobi tech companies, universities, and innovation hubs for real-world opportunities.',
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
            Building Africa's next generation of brilliant minds
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Since 2024, STEMForge has been committed to providing elite STEM education that transforms ambitious young learners into confident innovators and problem-solvers.
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
                To cultivate excellence in STEM education by providing Africa's brightest young minds with world-class instruction, cutting-edge tools, and transformative mentorship.
              </p>
              <p className="text-neutral-600 font-light text-lg leading-relaxed">
                We believe that brilliance isn't exclusive—it's universal. With the right environment, guidance, and opportunities, every ambitious learner can achieve extraordinary things.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-6">Our Vision</h2>
              <p className="text-neutral-600 font-light text-lg leading-relaxed mb-4">
                A world where African youth lead global innovation in science, technology, engineering, and mathematics.
              </p>
              <p className="text-neutral-600 font-light text-lg leading-relaxed">
                We envision STEMForge alumni building companies, conducting groundbreaking research, and solving humanity's greatest challenges—not as followers of innovation, but as architects of it.
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
            <h2 className="text-4xl font-light text-neutral-900">Why Choose Us</h2>
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
              Experienced educators and industry leaders dedicated to transforming STEM education in Africa.
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
          <h2 className="text-4xl font-light mb-6">Ready to Join Our Community?</h2>
          <p className="text-neutral-300 font-light text-lg mb-12 max-w-2xl mx-auto">
            Whether you're a student ready to transform your STEM journey or an educator interested in partnering with us—let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                // Trigger application modal if available
              }}
              className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Apply Now
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