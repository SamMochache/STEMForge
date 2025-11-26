import { useState, useEffect } from 'react';
import { Mail, Linkedin, GraduationCap, Award, Users, Book, ArrowUpRight, MapPin, Briefcase } from 'lucide-react';
import api from '../services/api';

const TeamPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await api.getInstructors();
        setInstructors(data.results || data);
      } catch (err) {
        console.error('Failed to load instructors:', err);
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
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
      expertise: ['Python', 'Machine Learning', 'AI Ethics', 'Data Science'],
      experience: '12+ years',
      education: 'PhD Computer Science - MIT',
      email: 'amara@stemforge.co.ke',
      location: 'Nairobi, Kenya',
    },
    {
      id: 2,
      full_name: 'James Kipchoge',
      title: 'Robotics & Engineering Lead',
      bio: 'Serial roboticist and competition winner. Led 5 teams to international robotics championships. Former aerospace engineer at Safaricom.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      expertise: ['Robotics', 'Arduino', 'Mechanical Design', '3D CAD'],
      experience: '8+ years',
      education: 'BSc Engineering - Nairobi University',
      email: 'james@stemforge.co.ke',
      location: 'Nairobi, Kenya',
    },
    {
      id: 3,
      full_name: 'Sarah Mutua',
      title: 'Web Development & Innovation',
      bio: 'Full-stack developer and startup mentor. Built 15+ production applications. Mentors young developers entering the tech industry.',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
      expertise: ['React', 'Node.js', 'Web Design', 'Startups'],
      experience: '9+ years',
      education: 'BSc Information Technology - University of Nairobi',
      email: 'sarah@stemforge.co.ke',
      location: 'Nairobi, Kenya',
    },
    {
      id: 4,
      full_name: 'Dr. David Chen',
      title: 'Game Development & Graphics',
      bio: 'Game developer with shipped titles on Steam. CTO of indie game studio. Specializes in teaching 3D graphics and game engine architecture.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
      expertise: ['Unity', 'C#', '3D Graphics', 'Game Design'],
      experience: '10+ years',
      education: 'MSc Computer Graphics - Cambridge University',
      email: 'david@stemforge.co.ke',
      location: 'Nairobi, Kenya',
    },
    {
      id: 5,
      full_name: 'Prof. Grace Ouma',
      title: 'Mathematics & Problem Solving',
      bio: 'Former high school mathematics champion coach. Has trained 20+ winners of national math competitions. Makes abstract concepts tangible.',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
      expertise: ['Advanced Math', 'Problem Solving', 'Logic', 'Competitions'],
      experience: '15+ years',
      education: 'MSc Mathematics - Cambridge University',
      email: 'grace@stemforge.co.ke',
      location: 'Nairobi, Kenya',
    },
    {
      id: 6,
      full_name: 'Marcus Okonkwo',
      title: 'Digital Design & UX',
      bio: 'Award-winning UX designer. Worked at Airbnb and Google. Teaches students how technology meets human-centered design.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      expertise: ['UI/UX Design', 'Figma', 'Design Thinking', 'Prototyping'],
      experience: '11+ years',
      education: 'BFA Interaction Design - RISD',
      email: 'marcus@stemforge.co.ke',
      location: 'Nairobi, Kenya',
    },
  ];

  const displayInstructors = loading ? sampleInstructors : instructors.length > 0 ? instructors : sampleInstructors;

  const InstructorCard = ({ instructor }) => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 aspect-square">
        {instructor.photo ? (
          <img
            src={instructor.photo}
            alt={instructor.full_name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Users size={64} className="text-neutral-300" />
          </div>
        )}

        {/* Overlay with Social */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-end justify-between p-4">
          {/* Social Icons */}
          <div className="flex gap-2">
            {instructor.email && (
              <a
                href={`mailto:${instructor.email}`}
                className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all transform hover:scale-110"
                title={`Email ${instructor.full_name}`}
              >
                <Mail size={18} className="text-white" />
              </a>
            )}
            <a
              href={`https://linkedin.com/search/results/people/?keywords=${instructor.full_name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all transform hover:scale-110"
              title={`${instructor.full_name} on LinkedIn`}
            >
              <Linkedin size={18} className="text-white" />
            </a>
          </div>

          {/* Location badge */}
          {instructor.location && (
            <div className="flex items-center gap-1 text-white text-xs bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin size={12} />
              {instructor.location}
            </div>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Name & Title */}
        <div className="mb-3">
          <h3 className="text-lg font-normal text-neutral-900 leading-tight">
            {instructor.full_name}
          </h3>
          {instructor.title && (
            <p className="text-sm font-medium text-blue-600 tracking-wide mt-1">
              {instructor.title}
            </p>
          )}
        </div>

        {/* Bio */}
        {instructor.bio && (
          <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4 flex-1 line-clamp-3">
            {instructor.bio}
          </p>
        )}

        {/* Experience & Education Grid */}
        {(instructor.experience || instructor.education) && (
          <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-t border-neutral-100 pt-4">
            {instructor.experience && (
              <div>
                <p className="text-xs text-neutral-400 tracking-widest uppercase font-semibold mb-1">Experience</p>
                <p className="text-sm font-medium text-neutral-900 flex items-center gap-1">
                  <Briefcase size={14} className="text-blue-600" />
                  {instructor.experience}
                </p>
              </div>
            )}
            {instructor.education && (
              <div>
                <p className="text-xs text-neutral-400 tracking-widest uppercase font-semibold mb-1">Education</p>
                <p className="text-sm font-medium text-neutral-900 flex items-center gap-1">
                  <GraduationCap size={14} className="text-blue-600" />
                  {instructor.education.split(' - ')[0]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Expertise Tags */}
        {instructor.expertise && instructor.expertise.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-neutral-400 tracking-widest uppercase font-semibold mb-2">Expertise</p>
            <div className="flex flex-wrap gap-1.5">
              {instructor.expertise.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100 font-light"
                >
                  {skill}
                </span>
              ))}
              {instructor.expertise.length > 3 && (
                <span className="px-2.5 py-1 text-xs text-neutral-500 font-light">
                  +{instructor.expertise.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Contact Button */}
        {instructor.email && (
          <a
            href={`mailto:${instructor.email}`}
            className="w-full py-2.5 px-4 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all duration-200 inline-flex items-center justify-center gap-2 group/btn"
          >
            Contact
            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
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

      {/* Team Count */}
      <section className="py-8 px-8 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-normal text-neutral-900">
            {loading ? 'Loading Instructors...' : `${displayInstructors.length} Expert Instructors`}
          </h2>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-neutral-100 animate-pulse rounded-xl aspect-square" />
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

      {/* Advisory Board */}
      <section className="py-20 px-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Guidance & Mentorship</p>
            <h2 className="text-4xl font-light text-neutral-900 mb-4">Industry Advisory Board</h2>
            <p className="text-neutral-600 font-light text-lg max-w-2xl mx-auto">
              Beyond our core team, we partner with industry leaders and university professors who guide curriculum and provide mentorship.
            </p>
          </div>

          <div className="bg-white p-8 border border-neutral-200 rounded-lg">
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
                  className="px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-center text-sm text-neutral-600 hover:bg-blue-50 hover:border-blue-200 transition-all"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Passionate About Education?</h2>
          <p className="text-neutral-300 font-light text-lg mb-12 max-w-2xl mx-auto">
            We're always looking for talented educators and professionals who want to make a difference in STEM education.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 transition-all"
          >
            Explore Careers
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;