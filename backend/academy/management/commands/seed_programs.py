# backend/academy/management/commands/seed_programs.py
from django.core.management.base import BaseCommand
from academy.models import Program


class Command(BaseCommand):
    help = 'Seed comprehensive program catalog for all ages'

    def handle(self, *args, **options):
        programs = [
            # === BOOTSTRAP TIER - NO CAPITAL REQUIRED (Ages 5-8) ===
            # These 4 programs are featured on homepage with free/minimal setup
            {
                "title": "Scratch Jr. Community Workshops",
                "slug": "scratch-jr-community",
                "summary": "Free community-led workshops where young learners discover coding through visual storytelling. Open to all ages 5-8. Meet once weekly in group settings.",
                "age_min": 5,
                "age_max": 8,
                "duration_weeks": 12,
                "price": 0,  # Free/Community based
                "features": [
                    "Visual block-based programming",
                    "Community learning environment",
                    "Peer collaboration",
                    "Creative expression through code",
                    "Open-source tools (Scratch Jr)",
                    "Group showcase project"
                ],
                "is_published": True
            },
            {
                "title": "Python Self-Paced Learning Path",
                "slug": "python-self-paced",
                "summary": "Guided self-paced curriculum where learners progress at their own speed. Community support through forums and peer mentorship. All resources are open-source and freely available.",
                "age_min": 9,
                "age_max": 13,
                "duration_weeks": 16,
                "price": 0,  # Free with community support
                "features": [
                    "Self-guided curriculum modules",
                    "Python fundamentals via free resources",
                    "Community forum support",
                    "Peer code review groups",
                    "Open-source project library",
                    "Completion certificate"
                ],
                "is_published": True
            },
            {
                "title": "DIY Robotics & Electronics Club",
                "slug": "diy-robotics-club",
                "summary": "Learn robotics using affordable, open-source hardware (Arduino, breadboards). Students source their own affordable components (~3,000 KSh per project). Community workshops for hands-on learning.",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 14,
                "price": 0,  # Free instruction, students buy ~3K hardware
                "features": [
                    "Arduino programming fundamentals",
                    "Affordable electronics sourcing guide",
                    "Community maker lab access",
                    "Peer teaching opportunities",
                    "Open-source circuit designs",
                    "Project showcase competitions"
                ],
                "is_published": True
            },
            {
                "title": "Web Development Bootcamp (Open Source)",
                "slug": "web-dev-bootcamp-free",
                "summary": "Learn modern web development using free tools (VS Code, GitHub, Netlify). Community-driven curriculum built collaboratively. Monetize projects early to fund growth.",
                "age_min": 11,
                "age_max": 15,
                "duration_weeks": 12,
                "price": 0,  # Free with monetization pathway
                "features": [
                    "HTML5, CSS3, JavaScript fundamentals",
                    "Free deployment (GitHub Pages, Netlify)",
                    "Open-source framework learning",
                    "Freelance project opportunities",
                    "Revenue-sharing on student projects",
                    "Portfolio building for paid work"
                ],
                "is_published": True
            },

            # === PROFESSIONAL TIER - FOR HIGH-END CLIENTS ===
            # Premium pricing targeting affluent Nairobi families
            
            # === BEGINNER TIER (Ages 5-9) - PREMIUM ===
            {
                "title": "Scratch Jr. Intensive (Small Group)",
                "slug": "scratch-jr-intensive",
                "summary": "Intimate group sessions (max 4 students) with personalized attention. Premium curriculum combining storytelling, game design, and computational thinking fundamentals.",
                "age_min": 5,
                "age_max": 8,
                "duration_weeks": 8,
                "price": 120000,
                "features": [
                    "Maximum 4 students per session",
                    "Personalized learning pace",
                    "Advanced animation techniques",
                    "Interactive game design principles",
                    "Professional project documentation",
                    "Parent progress reports"
                ],
                "is_published": True
            },
            {
                "title": "LEGO Robotics Explorer (Premium)",
                "slug": "lego-robotics-explorer-premium",
                "summary": "Hands-on robotics education using premium LEGO Education kits in state-of-the-art facilities. Small cohorts with instructor mentorship and competition preparation.",
                "age_min": 6,
                "age_max": 9,
                "duration_weeks": 10,
                "price": 145000,
                "features": [
                    "Premium LEGO Education kits provided",
                    "Max 5 students per cohort",
                    "Modern maker lab facilities",
                    "STEM competition preparation",
                    "Take-home project kits",
                    "Monthly family demo days"
                ],
                "is_published": True
            },

            # === INTERMEDIATE TIER (Ages 10-14) - PREMIUM ===
            {
                "title": "Python Programming Mastery",
                "slug": "python-mastery",
                "summary": "Comprehensive Python course for aspiring young developers. Master variables, functions, OOP, and build real applications. Curated for high-achieving students.",
                "age_min": 9,
                "age_max": 13,
                "duration_weeks": 14,
                "price": 175000,
                "features": [
                    "Object-oriented programming (OOP)",
                    "Data structures and algorithms",
                    "Real-world application projects",
                    "Code portfolio development",
                    "Individual code review sessions",
                    "Career pathway guidance"
                ],
                "is_published": True
            },
            {
                "title": "Robotics & Engineering Excellence",
                "slug": "robotics-engineering-premium",
                "summary": "Advanced robotics program combining mechanical engineering, embedded systems, and autonomous systems. Perfect for competitive robotics preparation.",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 14,
                "price": 185000,
                "features": [
                    "Professional Arduino/Microcontroller boards",
                    "Advanced sensor integration",
                    "Mechanical design CAD software",
                    "Robotics competition coaching",
                    "State-of-the-art maker labs",
                    "Internship opportunities"
                ],
                "is_published": True
            },
            {
                "title": "Web Development Foundations (Premium)",
                "slug": "web-development-premium",
                "summary": "Professional web development bootcamp covering modern tech stack. Build real, deployed websites. Designed for future full-stack developers.",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 14,
                "price": 165000,
                "features": [
                    "HTML5, CSS3, JavaScript mastery",
                    "React fundamentals",
                    "Responsive design patterns",
                    "Live project deployment",
                    "Git/GitHub version control",
                    "Client project simulation"
                ],
                "is_published": True
            },
            {
                "title": "Digital Innovation Lab",
                "slug": "digital-innovation-lab",
                "summary": "Hands-on innovation course covering app development, 3D design, digital prototyping, and entrepreneurial thinking. Build and pitch ideas.",
                "age_min": 11,
                "age_max": 15,
                "duration_weeks": 12,
                "price": 155000,
                "features": [
                    "Mobile app development (No-Code & Low-Code)",
                    "3D design and CAD software",
                    "UI/UX fundamentals",
                    "Business pitch development",
                    "Prototype to presentation",
                    "Innovation fair participation"
                ],
                "is_published": True
            },

            # === ADVANCED TIER (Ages 13-18) - PREMIUM ===
            {
                "title": "Python Advanced Programming",
                "slug": "python-advanced",
                "summary": "Deep dive into professional Python development. Object-oriented design, data structures, algorithms, API development. Perfect for competitive programming.",
                "age_min": 12,
                "age_max": 16,
                "duration_weeks": 16,
                "price": 225000,
                "features": [
                    "Advanced OOP and design patterns",
                    "Data structures and algorithms",
                    "RESTful API development",
                    "Database design and SQL",
                    "Testing and debugging techniques",
                    "Professional code portfolio"
                ],
                "is_published": True
            },
            {
                "title": "Artificial Intelligence & Machine Learning",
                "slug": "ai-machine-learning",
                "summary": "Comprehensive AI/ML course exploring neural networks, computer vision, and NLP. Real-world projects with TensorFlow and scikit-learn.",
                "age_min": 13,
                "age_max": 17,
                "duration_weeks": 18,
                "price": 295000,
                "features": [
                    "Machine learning fundamentals",
                    "Neural networks and deep learning",
                    "Computer vision projects",
                    "Natural language processing",
                    "TensorFlow and PyTorch",
                    "Kaggle competition preparation"
                ],
                "is_published": True
            },
            {
                "title": "Full-Stack Web Development",
                "slug": "fullstack-web-development",
                "summary": "Professional full-stack course covering React, Node.js, databases, and deployment. Build and deploy complete web applications.",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 18,
                "price": 285000,
                "features": [
                    "React and modern JavaScript",
                    "Node.js and Express backend",
                    "MongoDB and PostgreSQL",
                    "RESTful and GraphQL APIs",
                    "Cloud deployment (AWS/Heroku)",
                    "Freelance-ready portfolio projects"
                ],
                "is_published": True
            },
            {
                "title": "Mobile App Development (iOS & Android)",
                "slug": "mobile-app-development",
                "summary": "Build professional iOS and Android apps using React Native. Learn app architecture, UI/UX patterns, and app store deployment.",
                "age_min": 13,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 265000,
                "features": [
                    "React Native fundamentals",
                    "iOS and Android specific features",
                    "App store submission process",
                    "User authentication and databases",
                    "API integration",
                    "Published app portfolio"
                ],
                "is_published": True
            },
            {
                "title": "Game Development with Unity",
                "slug": "game-development-unity",
                "summary": "Professional game development using Unity and C#. Create 2D/3D games, physics engines, AI, and multiplayer features.",
                "age_min": 12,
                "age_max": 17,
                "duration_weeks": 16,
                "price": 245000,
                "features": [
                    "Unity engine mastery",
                    "C# programming for games",
                    "2D and 3D game mechanics",
                    "Physics and collision systems",
                    "Game AI programming",
                    "Game submission and publishing"
                ],
                "is_published": True
            },
            {
                "title": "Cybersecurity & Ethical Hacking",
                "slug": "cybersecurity-hacking",
                "summary": "Comprehensive cybersecurity course covering network security, penetration testing, and ethical hacking. Hands-on labs and CTF competitions.",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 235000,
                "features": [
                    "Network security fundamentals",
                    "Penetration testing methodology",
                    "Cryptography and encryption",
                    "Capture-the-Flag competitions",
                    "Hands-on lab environments",
                    "Security certification prep"
                ],
                "is_published": True
            },

            # === ELITE TIER - RESEARCH & MENTORSHIP ===
            {
                "title": "Advanced Research Track",
                "slug": "advanced-research",
                "summary": "For exceptional students pursuing mastery. Independent research mentored by industry leaders and academics. Tackle real-world STEM challenges.",
                "age_min": 15,
                "age_max": 18,
                "duration_weeks": 20,
                "price": 385000,
                "features": [
                    "1-on-1 research mentorship",
                    "Industry mentor pairing",
                    "Academic publication support",
                    "Conference presentation prep",
                    "University application guidance",
                    "Internship coordination"
                ],
                "is_published": True
            },
            {
                "title": "Data Science & Analytics Intensive",
                "slug": "data-science-analytics",
                "summary": "Master data analysis, statistics, machine learning, and visualization. Work with real datasets and build predictive models.",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 255000,
                "features": [
                    "Python data science stack",
                    "Statistical analysis methods",
                    "Data visualization mastery",
                    "Machine learning pipelines",
                    "Real-world dataset projects",
                    "Tableau and Power BI"
                ],
                "is_published": True
            },

            # === SPECIALIZED PREMIUM PROGRAMS ===
            {
                "title": "VIP 1-on-1 Mentorship",
                "slug": "vip-mentorship",
                "summary": "Completely personalized 1-on-1 instruction tailored to your child's unique interests and goals. Custom curriculum, flexible scheduling, elite instructor pairing.",
                "age_min": 8,
                "age_max": 18,
                "duration_weeks": 8,
                "price": 450000,
                "features": [
                    "Personalized curriculum design",
                    "Elite instructor pairing",
                    "Flexible scheduling (evenings/weekends)",
                    "Custom project development",
                    "Unlimited email support",
                    "College/career pathway planning"
                ],
                "is_published": True
            },
            {
                "title": "Competition Prep: International Olympiads",
                "slug": "competition-prep",
                "summary": "Intensive preparation for International STEM Olympiads, robotics competitions, and hackathons. Expert coaching from competition veterans.",
                "age_min": 10,
                "age_max": 18,
                "duration_weeks": 14,
                "price": 195000,
                "features": [
                    "Past competition problem solving",
                    "Olympiad-specific strategies",
                    "Team collaboration coaching",
                    "Time management training",
                    "Mock competitions",
                    "International competition travel support"
                ],
                "is_published": True
            },
            {
                "title": "Summer Immersion Boot Camp (4 Weeks)",
                "slug": "summer-bootcamp",
                "summary": "Intensive 4-week residential summer program combining multiple tech tracks. Accelerated learning, project showcases, and competition preparation.",
                "age_min": 12,
                "age_max": 17,
                "duration_weeks": 4,
                "price": 395000,
                "features": [
                    "Multi-track curriculum rotation",
                    "4 days per week intensive sessions",
                    "Professional-grade projects",
                    "Industry guest speakers",
                    "Showcase and competition",
                    "Networking with peers and mentors"
                ],
                "is_published": True
            },
            {
                "title": "Corporate Training & Workshops (Custom)",
                "slug": "corporate-training",
                "summary": "Custom STEM programs designed for corporate and school teams. From 2-hour workshops to multi-day immersions. Tailored to organizational goals.",
                "age_min": 8,
                "age_max": 25,
                "duration_weeks": 2,
                "price": 500000,
                "features": [
                    "Fully customized curriculum",
                    "On-site or at STEMForge facility",
                    "Multiple cohorts available",
                    "Post-program support",
                    "Participant certificates",
                    "Impact assessment and reporting"
                ],
                "is_published": True
            },
        ]

        created_count = 0
        updated_count = 0

        for program_data in programs:
            program, created = Program.objects.update_or_create(
                slug=program_data["slug"],
                defaults=program_data
            )
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'✓ Created: {program.title}')
                )
            else:
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'↻ Updated: {program.title}')
                )

        self.stdout.write(
            self.style.SUCCESS(
                f'\n{"="*60}\n'
                f'✅ Done! Created: {created_count}, Updated: {updated_count}\n'
                f'Total Programs: {Program.objects.count()}\n'
                f'{"="*60}'
            )
        )