// frontend/src/pages/TeamPage.jsx
import { useState, useEffect } from 'react';
import { Mail, Linkedin, GraduationCap, Award, Users, Book } from 'lucide-react';
import api from '../services/api';

const TeamPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await api.getInstructors();
        setInstructors(data.results || data);
      } catch (err) {
        console.error('Failed to load instructors:', err);
        // Use sample data if API fails
        setInstructors(sampleInstructors);
      } finally {
        setLoading(false);
      }
    };
    fetchInstructors();
  }, []);

  // Sample instructor data (fallback)
  const sampleInstructors = [
    {
      id: 1,
      full_name: 'Dr. Amara Okonkwo',
      title: 'Python & AI Specialist',
      bio: 'Former Google engineer with 10+ years in AI/ML. PhD in Computer Science from MIT. Passionate about bringing cutting-edge AI education to African students.',
      expertise: ['Python', 'Machine Learning', 'AI Ethics', 'Data Science'],
      experience: '12+ years',
      education: 'PhD Computer Science - MIT',
      email: 'amara@stemforge.co.ke',
    },
    {
      id: 2,
      full_name: 'James Kipchoge',
      title: 'Robotics & Engineering Lead',
      bio: 'Serial roboticist and competition winner. Led 5 teams to international robotics championships. Former aerospace engineer at Safaricom.',
      expertise: ['Robotics', 'Arduino', 'Mechanical Design', '3D CAD'],
      experience: '8+ years',
      education: 'BSc Engineering - Nairobi University',
      email: 'james@stemforge.co.ke',
    },
    {
      id: 3,
      full_name: 'Sarah Mutua',
      title: 'Web Development & Innovation',
      bio: 'Full-stack developer and startup mentor. Built 15+ production applications. Mentors young developers entering the tech industry.',
      expertise: ['React', 'Node.js', 'Web Design', 'Startups'],
      experience: '9+ years',
      education: 'BSc Information Technology - University of Nairobi',
      email: 'sarah@stemforge.co.ke',
    },
    {
      id: 4,
      full_name: 'Dr. David Chen',
      title: 'Game Development & Graphics',
      bio: 'Game developer with shipped titles on Steam. CTO of indie game studio. Specializes in teaching 3D graphics and game engine architecture.',
      expertise: ['Unity', 'C#', '3D Graphics', 'Game Design'],
      experience: '10+ years',
      education: 'MSc Computer Graphics - Cambridge University',
      email: 'david@stemforge.co.ke',
    },
    {
      id: 5,
      full_name: 'Prof. Grace Ouma',
      title: 'Mathematics & Problem Solving',
      bio: 'Former high school mathematics champion coach. Has trained 20+ winners of national math competitions. Makes abstract concepts tangible.',
      expertise: ['Advanced Math', 'Problem Solving', 'Logic', 'Competitions'],
      experience: '15+ years',
      education: 'MSc Mathematics - Cambridge University',
      email: 'grace@stemforge.co.ke',
    },
    {
      id: 6,
      full_name: 'Marcus Okonkwo',
      title: 'Digital Design & UX',
      bio: 'Award-winning UX designer. Worked at Airbnb and Google. Teaches students how technology meets human-centered design.',
      expertise: ['UI/UX Design', 'Figma', 'Design Thinking', 'Prototyping'],
      experience: '11+ years',
      education: 'BFA Interaction Design - RISD',
      email: 'marcus@stemforge.co.ke',
    },
  ];

  const displayInstructors = loading ? sampleInstructors : instructors;

  const categories = [
    { id: 'all', label: 'All Instructors' },
    { id: 'programming', label: 'Programming' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'design', label: 'Design' },
    { id: 'leadership', label: 'Leadership' },
  ];

  const InstructorCard = ({ instructor }) => (
    <div className="bg-white border border-neutral-200 hover:border-neutral-400 transition-all hover:shadow-lg overflow-hidden group">
      {/* Header Color Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />

      <div className="p-8">
        {/* Name & Title */}
        <h3 className="text-xl font-normal text-neutral-900 mb-1">{instructor.full_name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide">{instructor.title}</p>

        {/* Bio */}
        <p className="text-neutral-600 font-light leading-relaxed text-sm mb-6">
          {instructor.bio}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-t border-neutral-100">
          <div className="pt-4">
            <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">Experience</p>
            <p className="text-sm font-medium text-neutral-900">{instructor.experience}</p>
          </div>
          <div className="pt-4">
            <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">Education</p>
            <p className="text-sm font-medium text-neutral-900">{instructor.education}</p>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="mb-6">
          <p className="text-xs text-neutral-400 tracking-widest uppercase mb-3 font-medium">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {instructor.expertise.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex gap-3 pt-4 border-t border-neutral-100">
          <a
            href={`mailto:${instructor.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition-colors w-full justify-center"
            title="Email"
          >
            <Mail size={14} />
            <span className="text-xs">Email</span>
          </a>
          <a
            href={`https://linkedin.com/search/results/people/?keywords=${instructor.full_name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-neutral-200 hover:border-neutral-400 text-sm transition-colors w-full justify-center"
            title="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">Our Team</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Meet World-Class Instructors
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Our team of elite educators and industry leaders bring decades of combined experience. From Google engineers to competition-winning roboticists, each instructor is dedicated to your success.
          </p>
        </div>
      </section>

      {/* Why Our Teachers Matter */}
      <section className="py-16 px-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Leaders',
                desc: 'Not just teachers—active practitioners in their fields',
              },
              {
                icon: GraduationCap,
                title: 'Top Credentials',
                desc: 'PhDs, advanced degrees from top global universities',
              },
              {
                icon: Users,
                title: 'Mentors First',
                desc: 'Personal attention to help you reach your unique potential',
              },
              {
                icon: Book,
                title: 'Lifelong Learners',
                desc: 'Continuously updating skills with latest technologies',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <Icon size={32} className="text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-8 bg-white sticky top-32 z-40 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-lg font-normal text-neutral-900">
              {loading ? 'Loading Instructors...' : `${displayInstructors.length} Expert Instructors`}
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-sm transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-neutral-900 text-white'
                      : 'border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-neutral-100 animate-pulse rounded h-96" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayInstructors.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Advisory Board Highlight */}
      <section className="py-20 px-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Guidance & Mentorship</p>
            <h2 className="text-4xl font-light text-neutral-900 mb-4">Industry Advisory Board</h2>
            <p className="text-neutral-600 font-light text-lg max-w-2xl mx-auto">
              Beyond our core team, we partner with industry leaders and university professors who guide curriculum and provide mentorship.
            </p>
          </div>

          <div className="bg-white p-8 border border-neutral-200 rounded">
            <h3 className="font-medium text-neutral-900 mb-6">Partners & Advisors</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Google Africa',
                'Microsoft Kenyan Operations',
                'Nairobi Tech Community',
                'University of Nairobi',
                'Kenya Tech Leaders Association',
                'East African Robotics Federation',
              ].map((partner, i) => (
                <div
                  key={i}
                  className="px-4 py-3 bg-neutral-50 border border-neutral-200 rounded text-center text-sm text-neutral-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-8 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Passionate About Education?</h2>
          <p className="text-neutral-300 font-light text-lg mb-12 max-w-2xl mx-auto">
            We're always looking for talented educators and professionals who want to make a difference.
          </p>
          <a
            href="/careers"
            className="bg-white text-neutral-900 px-10 py-4 text-sm tracking-wide hover:bg-neutral-100 transition-colors inline-block"
          >
            Explore Careers
          </a>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;