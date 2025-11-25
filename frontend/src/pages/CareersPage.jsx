// frontend/src/pages/CareersPage.jsx & FAQPage.jsx
import { useState } from 'react';
import { Briefcase, Heart, Target, Users, ArrowRight, ChevronDown, Search } from 'lucide-react';

export const CareersPage = () => {
  const positions = [
    {
      id: 1,
      title: 'Senior Python Instructor',
      department: 'Academics',
      type: 'Full-time',
      location: 'Westlands, Nairobi',
      salary: '180,000 - 220,000 KSh',
      experience: '3+ years teaching',
      description: 'Join our team to teach Python to Africa\'s brightest young minds. Design engaging curricula, mentor students, and help shape the future of STEM education.',
      highlights: [
        'Shape next-gen curriculum',
        'Mentor 50+ students annually',
        'Competitive salary + benefits',
        'Professional development budget',
      ],
    },
    {
      id: 2,
      title: 'Robotics & Engineering Specialist',
      department: 'Academics',
      type: 'Full-time',
      location: 'Westlands, Nairobi',
      salary: '170,000 - 210,000 KSh',
      experience: '2+ years experience',
      description: 'Lead hands-on robotics labs, teach students mechanical engineering principles, and prepare teams for competitions. Must have robotics competition experience.',
      highlights: [
        'Access to maker labs',
        'Competition coaching',
        'Professional network',
        'Team of experts',
      ],
    },
    {
      id: 3,
      title: 'Student Success Coach',
      department: 'Student Services',
      type: 'Full-time',
      location: 'Westlands, Nairobi',
      salary: '150,000 - 180,000 KSh',
      experience: '3+ years mentoring',
      description: 'Guide students through their learning journey, support career planning, coordinate internships, and ensure student success and satisfaction.',
      highlights: [
        'Direct student impact',
        'Career placement support',
        'Build relationships',
        'Flexible schedule',
      ],
    },
    {
      id: 4,
      title: 'Marketing & Communications Manager',
      department: 'Operations',
      type: 'Full-time',
      location: 'Westlands, Nairobi',
      salary: '160,000 - 200,000 KSh',
      experience: '2+ years marketing',
      description: 'Drive STEMForge growth through strategic marketing, content creation, brand building, and community engagement. Help us reach more families.',
      highlights: [
        'Creative freedom',
        'Brand building',
        'Social media strategy',
        'Event coordination',
      ],
    },
    {
      id: 5,
      title: 'Full-Stack Developer',
      department: 'Technology',
      type: 'Contract',
      location: 'Remote',
      salary: '200,000 - 300,000 KSh',
      experience: '2+ years development',
      description: 'Build and maintain our learning platform. Work with React, Django, and databases. Help scale our digital infrastructure.',
      highlights: [
        'Modern tech stack',
        'Remote flexibility',
        'Impactful work',
        'Startup environment',
      ],
    },
    {
      id: 6,
      title: 'Content Curriculum Developer',
      department: 'Academics',
      type: 'Contract',
      location: 'Remote',
      salary: '120,000 - 180,000 KSh',
      experience: '2+ years curriculum design',
      description: 'Create engaging, hands-on curriculum materials for STEM programs. Design projects, assessments, and learning resources.',
      highlights: [
        'Creative work',
        'Remote flexibility',
        'Build legacy content',
        'Expert support',
      ],
    },
  ];

  const benefits = [
    { title: 'Competitive Salary', desc: 'Market-rate compensation for Nairobi' },
    { title: 'Medical Insurance', desc: 'Comprehensive coverage for you & family' },
    { title: 'Professional Development', desc: '3,000 KSh annual learning budget' },
    { title: 'Flexible Hours', desc: 'Work-life balance for work-life balance' },
    { title: 'Team Environment', desc: 'Collaborative, passionate community' },
    { title: 'Impact', desc: 'Direct influence on student success' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'We Value People',
      desc: 'Our team is our greatest asset. We invest in your growth.',
    },
    {
      icon: Target,
      title: 'Excellence',
      desc: 'We pursue excellence in everything we do.',
    },
    {
      icon: Users,
      title: 'Community',
      desc: 'We believe in collaborative, supportive teams.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">Careers</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Join a Mission to Transform Education
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl">
            Help us build Africa's premier STEM academy. We're looking for passionate educators, innovators, and visionaries.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-900 mb-12">Why Join STEMForge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-white p-8 border border-neutral-200 rounded">
                  <Icon size={32} className="text-blue-600 mb-4" />
                  <h3 className="text-xl font-normal text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 font-light">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-900 mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="border border-neutral-200 p-6 hover:border-blue-300 transition-colors">
                <h3 className="font-medium text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 font-light text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-3">Open Positions</h2>
            <p className="text-neutral-600 font-light">{positions.length} opportunities available</p>
          </div>

          <div className="space-y-4">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-white border border-neutral-200 p-8 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={20} className="text-blue-600" />
                      <h3 className="text-xl font-normal text-neutral-900">{position.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-500">{position.department}</p>
                  </div>
                  <ArrowRight className="text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-4">
                  <span className="bg-neutral-100 px-3 py-1">{position.type}</span>
                  <span className="bg-neutral-100 px-3 py-1">{position.location}</span>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1">{position.salary}</span>
                </div>

                <p className="text-neutral-600 font-light mb-4">{position.description}</p>

                <div className="flex flex-wrap gap-2">
                  {position.highlights.map((h, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-blue-50 border border-blue-200 rounded">
            <h3 className="text-lg font-normal text-neutral-900 mb-2">Don't see your role?</h3>
            <p className="text-neutral-600 font-light mb-4">
              We're always looking for talented people. Send us your resume and tell us how you want to make an impact.
            </p>
            <a
              href="mailto:careers@stemforge.co.ke"
              className="inline-block bg-neutral-900 text-white px-8 py-3 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-900 mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit', desc: 'Send your resume & cover letter' },
              { step: '02', title: 'Review', desc: 'Our team reviews applications' },
              { step: '03', title: 'Interview', desc: 'Phone screen & in-person meetings' },
              { step: '04', title: 'Offer', desc: 'Receive offer & join our team' },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
                )}
                <div className="bg-neutral-50 p-6 border border-neutral-200 rounded text-center">
                  <div className="text-3xl font-light text-blue-600 mb-3">{item.step}</div>
                  <h4 className="font-medium text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-600 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export const FAQPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Programs',
      questions: [
        {
          q: 'What age groups do you serve?',
          a: 'We serve students ages 5-18 with programs tailored to each developmental stage. Our bootstrap programs start at age 5, while advanced programs cater to ages 14-18.',
        },
        {
          q: 'Are your programs expensive?',
          a: 'We offer a range of programs from free community-based learning to premium instruction (KSh 120,000 - 450,000). We believe quality education should be accessible, which is why we offer scholarships.',
        },
        {
          q: 'Can my child start if they\'ve never coded?',
          a: 'Absolutely! We have beginner programs specifically designed for students with no prior experience. Our curriculum builds from fundamentals up.',
        },
        {
          q: 'What is your class size?',
          a: 'We maintain small cohorts—maximum 15 students per class. This ensures personalized attention and optimal learning outcomes.',
        },
      ],
    },
    {
      category: 'Registration & Enrollment',
      questions: [
        {
          q: 'How do I apply?',
          a: 'Visit our Programs page, select a course, and click "Apply Now." Complete the application form and our admissions team will contact you within 48 hours.',
        },
        {
          q: 'What is the application process like?',
          a: 'We review applications on a rolling basis. After submission, we conduct a brief phone screen to understand your child\'s interests and goals.',
        },
        {
          q: 'When can we start?',
          a: 'New cohorts begin monthly. After enrollment, you\'ll be contacted about the next available start date for your chosen program.',
        },
        {
          q: 'Is there a refund policy?',
          a: 'Yes. Refunds available up to 7 days before program start. After that, we offer program transfers or completion certificates.',
        },
      ],
    },
    {
      category: 'Learning Experience',
      questions: [
        {
          q: 'How many hours per week?',
          a: 'Programs range from 4-12 hours per week depending on the program. Beginners typically have 4-6 hours weekly, while advanced students may have 8-12.',
        },
        {
          q: 'Will my child get certified?',
          a: 'Yes! Every program includes completion certification. We also prepare students for external certifications like Cambridge IGCSE Computer Science.',
        },
        {
          q: 'What happens after completion?',
          a: 'Our Student Success team helps with next steps—whether that\'s university preparation, internships, or advanced programs. Many alumni stay engaged in our community.',
        },
        {
          q: 'Do you offer summer camps?',
          a: 'Yes, we run intensive 4-week summer bootcamps in July-August. These are immersive programs covering multiple disciplines.',
        },
      ],
    },
    {
      category: 'Technical & Support',
      questions: [
        {
          q: 'What do students need?',
          a: 'A laptop or tablet with internet connection. We provide all software (most is free/open-source). For robotics, we provide kits.',
        },
        {
          q: 'Is there technical support?',
          a: 'Yes! We offer 24/7 email support, office hours with instructors, and a community forum where students help each other.',
        },
        {
          q: 'Can I audit a class?',
          a: 'We don\'t offer auditing currently, but we do offer free webinars and resource libraries that anyone can access.',
        },
        {
          q: 'Do you have an online option?',
          a: 'Some programs are available online (Python, Web Dev). Others require in-person (Robotics, Physical Making). Check individual program descriptions.',
        },
      ],
    },
    {
      category: 'Scholarships & Financial Aid',
      questions: [
        {
          q: 'Do you offer scholarships?',
          a: 'Yes! We offer merit-based and need-based scholarships. 20% of our students receive partial to full scholarships.',
        },
        {
          q: 'How do I apply for a scholarship?',
          a: 'During registration, indicate your interest in financial aid. We\'ll send you a scholarship application form.',
        },
        {
          q: 'Are payment plans available?',
          a: 'Yes. We offer flexible payment plans spreading costs over 3-4 months for premium programs.',
        },
      ],
    },
    {
      category: 'For Schools & Groups',
      questions: [
        {
          q: 'Do you do school visits?',
          a: 'Yes! We offer field trips, assemblies, and custom workshops for schools. Contact our partnerships team.',
        },
        {
          q: 'Can we bring our school group?',
          a: 'Absolutely. Groups of 20+ get special rates. We customize experiences for specific age groups and interests.',
        },
      ],
    },
  ];

  const filteredFaqs = searchTerm
    ? faqs.map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (q) =>
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      })).filter((cat) => cat.questions.length > 0)
    : faqs;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-300 font-light">
            Can't find an answer? <a href="/contact" className="underline hover:no-underline">Contact us</a> directly.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 px-8 bg-neutral-50 sticky top-0 z-40 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 bg-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600">No results found for "{searchTerm}"</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFaqs.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-light text-neutral-900 mb-6 pb-4 border-b border-neutral-200">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, qIndex) => {
                      const itemId = `${catIndex}-${qIndex}`;
                      return (
                        <div
                          key={itemId}
                          className="border border-neutral-200 overflow-hidden hover:border-neutral-400 transition-colors"
                        >
                          <button
                            onClick={() => setExpanded(expanded === itemId ? null : itemId)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                          >
                            <h3 className="font-normal text-neutral-900 pr-8">{item.q}</h3>
                            <ChevronDown
                              size={20}
                              className={`text-neutral-400 flex-shrink-0 transition-transform ${
                                expanded === itemId ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {expanded === itemId && (
                            <div className="px-6 pb-6 bg-neutral-50 border-t border-neutral-200">
                              <p className="text-neutral-600 font-light leading-relaxed">{item.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Still have questions?</h2>
          <p className="text-neutral-300 font-light mb-8">
            Our admissions team is here to help. Get in touch!
          </p>
          <a
            href="/contact"
            className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;