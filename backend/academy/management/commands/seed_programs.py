from django.core.management.base import BaseCommand
from academy.models import Program


class Command(BaseCommand):
    help = 'Seed comprehensive program catalog for all ages'

    def handle(self, *args, **options):
        programs = [
            # === BEGINNER TIER (Ages 5-8) ===
            {
                "title": "Scratch Jr. Adventures",
                "slug": "scratch-jr-adventures",
                "summary": "Introduction to coding through visual storytelling. Young learners create interactive stories and simple games using Scratch Jr, building computational thinking from the ground up.",
                "age_min": 5,
                "age_max": 8,
                "duration_weeks": 8,
                "price": 15000,
                "features": [
                    "Visual block-based programming",
                    "Creative storytelling fundamentals",
                    "Basic sequencing and logic",
                    "Character animation basics",
                    "Simple game mechanics",
                    "Parent showcase project"
                ],
                "is_published": True
            },
            {
                "title": "LEGO Robotics Explorer",
                "slug": "lego-robotics-explorer",
                "summary": "Hands-on introduction to robotics using LEGO Education kits. Children build and program simple robots, learning engineering principles through play-based activities.",
                "age_min": 6,
                "age_max": 9,
                "duration_weeks": 10,
                "price": 18000,
                "features": [
                    "LEGO WeDo construction",
                    "Basic mechanical principles",
                    "Simple motor control",
                    "Sensor introduction",
                    "Collaborative building",
                    "Problem-solving through play"
                ],
                "is_published": True
            },
            
            # === INTERMEDIATE TIER (Ages 8-12) ===
            {
                "title": "Scratch Programming Mastery",
                "slug": "scratch-programming-mastery",
                "summary": "Comprehensive Scratch programming course teaching game development, animation, and interactive projects. Students master variables, loops, conditionals, and event-driven programming.",
                "age_min": 8,
                "age_max": 12,
                "duration_weeks": 12,
                "price": 22000,
                "features": [
                    "Complete Scratch environment mastery",
                    "Variables and data structures",
                    "Loops and conditional logic",
                    "Event-driven programming",
                    "Game development fundamentals",
                    "Portfolio of 5+ projects"
                ],
                "is_published": True
            },
            {
                "title": "Python for Young Coders",
                "slug": "python-young-coders",
                "summary": "Introduction to text-based programming with Python. Students learn syntax, logic, and problem-solving through engaging projects including games, animations, and creative coding.",
                "age_min": 9,
                "age_max": 13,
                "duration_weeks": 14,
                "price": 25000,
                "features": [
                    "Python fundamentals & syntax",
                    "Turtle graphics programming",
                    "Basic data types & structures",
                    "Functions and modular code",
                    "Simple game development",
                    "Interactive project portfolio"
                ],
                "is_published": True
            },
            {
                "title": "Robotics & Engineering",
                "slug": "robotics-engineering",
                "summary": "Foundational principles of mechanical design, sensor integration, and autonomous systems. Students construct and program robots that solve real-world challenges using Arduino, sensors, and mechanical components.",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 12,
                "price": 28000,
                "features": [
                    "Arduino programming fundamentals",
                    "Sensor integration & electronics",
                    "Mechanical design principles",
                    "Problem-solving methodology",
                    "Team collaboration projects",
                    "Competition preparation"
                ],
                "is_published": True
            },
            {
                "title": "Web Development Foundations",
                "slug": "web-development-foundations",
                "summary": "Learn to build modern websites using HTML, CSS, and JavaScript. Students create responsive, interactive web pages and deploy their first live websites.",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 12,
                "price": 24000,
                "features": [
                    "HTML5 & CSS3 mastery",
                    "JavaScript fundamentals",
                    "Responsive web design",
                    "Interactive elements & animations",
                    "Version control with Git",
                    "Live project deployment"
                ],
                "is_published": True
            },
            {
                "title": "Digital Innovation",
                "slug": "digital-innovation",
                "summary": "From concept to creation—students master the complete innovation cycle. App development, 3D design, and entrepreneurial thinking converge in this comprehensive program.",
                "age_min": 11,
                "age_max": 15,
                "duration_weeks": 10,
                "price": 26000,
                "features": [
                    "Mobile app development basics",
                    "3D design & printing",
                    "UI/UX fundamentals",
                    "Entrepreneurial thinking",
                    "Product prototyping",
                    "Pitch presentation skills"
                ],
                "is_published": True
            },
            
            # === ADVANCED TIER (Ages 13-18) ===
            {
                "title": "Python Advanced Programming",
                "slug": "python-advanced-programming",
                "summary": "Deep dive into Python with object-oriented programming, data structures, algorithms, and real-world applications. Students build complex projects and learn professional development practices.",
                "age_min": 12,
                "age_max": 16,
                "duration_weeks": 16,
                "price": 30000,
                "features": [
                    "Object-oriented programming",
                    "Data structures & algorithms",
                    "File handling & databases",
                    "API integration",
                    "Testing & debugging",
                    "Professional project portfolio"
                ],
                "is_published": True
            },
            {
                "title": "Artificial Intelligence & Machine Learning",
                "slug": "artificial-intelligence",
                "summary": "Comprehensive exploration of machine learning, neural networks, and ethical AI. Students develop applications with genuine utility and social impact using Python and modern AI frameworks.",
                "age_min": 13,
                "age_max": 17,
                "duration_weeks": 16,
                "price": 35000,
                "features": [
                    "Python for data science",
                    "Machine learning fundamentals",
                    "Neural networks & deep learning",
                    "Computer vision projects",
                    "Natural language processing",
                    "AI ethics & responsibility"
                ],
                "is_published": True
            },
            {
                "title": "Full-Stack Web Development",
                "slug": "fullstack-web-development",
                "summary": "Professional web development from front-end to back-end. Master React, Node.js, databases, and deployment. Build and launch complete web applications.",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 18,
                "price": 38000,
                "features": [
                    "React & modern JavaScript",
                    "Node.js & Express backend",
                    "Database design & SQL",
                    "RESTful API development",
                    "Authentication & security",
                    "Cloud deployment & DevOps"
                ],
                "is_published": True
            },
            {
                "title": "Mobile App Development",
                "slug": "mobile-app-development",
                "summary": "Create professional iOS and Android applications using React Native. Learn mobile UI/UX design, app architecture, and publish apps to app stores.",
                "age_min": 13,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 36000,
                "features": [
                    "React Native fundamentals",
                    "Mobile UI/UX design patterns",
                    "Native device features",
                    "State management",
                    "App store deployment",
                    "Portfolio of published apps"
                ],
                "is_published": True
            },
            {
                "title": "Game Development with Unity",
                "slug": "game-development-unity",
                "summary": "Professional game development using Unity and C#. Create 2D and 3D games with physics, AI, and multiplayer features. Build a complete game portfolio.",
                "age_min": 12,
                "age_max": 17,
                "duration_weeks": 16,
                "price": 34000,
                "features": [
                    "Unity engine mastery",
                    "C# programming for games",
                    "2D & 3D game mechanics",
                    "Physics & collision systems",
                    "Game AI programming",
                    "Published game projects"
                ],
                "is_published": True
            },
            {
                "title": "Cybersecurity Foundations",
                "slug": "cybersecurity-foundations",
                "summary": "Introduction to ethical hacking, network security, and digital forensics. Learn to identify vulnerabilities, secure systems, and understand the landscape of modern cybersecurity.",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 14,
                "price": 32000,
                "features": [
                    "Network security fundamentals",
                    "Ethical hacking principles",
                    "Cryptography basics",
                    "Penetration testing",
                    "Security best practices",
                    "Capture the Flag competitions"
                ],
                "is_published": True
            },
            
            # === ELITE/RESEARCH TIER (Ages 15-18) ===
            {
                "title": "Advanced Research Track",
                "slug": "advanced-research",
                "summary": "For exceptional students seeking mastery. Independent research projects mentored by industry professionals and academic partners. Students tackle real-world problems with cutting-edge solutions.",
                "age_min": 15,
                "age_max": 18,
                "duration_weeks": 20,
                "price": 45000,
                "features": [
                    "Independent research methodology",
                    "Scientific paper writing",
                    "Data analysis & statistics",
                    "Industry mentor pairing",
                    "Conference presentation prep",
                    "University application support"
                ],
                "is_published": True
            },
            {
                "title": "Data Science & Analytics",
                "slug": "data-science-analytics",
                "summary": "Master data analysis, visualization, and machine learning using Python, pandas, and modern data science tools. Work with real datasets to extract insights and build predictive models.",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 36000,
                "features": [
                    "Python data analysis stack",
                    "Statistical analysis",
                    "Data visualization",
                    "Machine learning pipelines",
                    "Big data fundamentals",
                    "Real-world case studies"
                ],
                "is_published": True
            },
            
            # === SPECIALIZED TRACKS ===
            {
                "title": "Individual Mentorship Program",
                "slug": "individual-mentorship",
                "summary": "Personalized 1-on-1 instruction tailored to your child's interests, goals, and learning pace. Custom curriculum designed around specific projects, competitions, or skill development.",
                "age_min": 8,
                "age_max": 18,
                "duration_weeks": 8,
                "price": 50000,
                "features": [
                    "Personalized curriculum design",
                    "One-on-one instruction",
                    "Flexible scheduling",
                    "Custom project development",
                    "Competition preparation",
                    "Portfolio building support"
                ],
                "is_published": True
            },
            {
                "title": "Competition Prep: Olympiads & Hackathons",
                "slug": "competition-prep",
                "summary": "Intensive preparation for international STEM competitions including robotics olympiads, coding competitions, and hackathons. Expert coaching and practice with past competition challenges.",
                "age_min": 10,
                "age_max": 18,
                "duration_weeks": 12,
                "price": 32000,
                "features": [
                    "Competition strategy training",
                    "Past problem solving",
                    "Team collaboration skills",
                    "Time management under pressure",
                    "Technical interview prep",
                    "Hackathon participation"
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