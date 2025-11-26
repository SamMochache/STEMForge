# backend/academy/management/commands/seed_programs.py
from django.core.management.base import BaseCommand
from academy.models import Program


class Command(BaseCommand):
    help = 'Seed comprehensive program catalog with proper categorization'

    def handle(self, *args, **options):
        programs = [
            # === BOOTSTRAP TIER - NO CAPITAL REQUIRED ===
            {
                "title": "Scratch Jr. Community Workshops",
                "slug": "scratch-jr-community",
                "summary": "Free community-led workshops where young learners discover coding through visual storytelling.",
                "category": "bootstrap",
                "age_min": 5,
                "age_max": 8,
                "duration_weeks": 12,
                "price": 0,
                "features": ["Visual block-based programming", "Community learning", "Peer collaboration", "Creative expression"],
                "is_published": True
            },
            {
                "title": "Python Self-Paced Learning Path",
                "slug": "python-self-paced",
                "summary": "Guided self-paced curriculum where learners progress at their own speed with community support.",
                "category": "bootstrap",
                "age_min": 9,
                "age_max": 13,
                "duration_weeks": 16,
                "price": 0,
                "features": ["Self-guided modules", "Python fundamentals", "Community forum support", "Peer code review"],
                "is_published": True
            },
            {
                "title": "DIY Robotics & Electronics Club",
                "slug": "diy-robotics-club",
                "summary": "Learn robotics using affordable, open-source hardware. Students source their own components.",
                "category": "bootstrap",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 14,
                "price": 0,
                "features": ["Arduino programming", "Electronics basics", "Community maker lab access", "Open-source designs"],
                "is_published": True
            },
            {
                "title": "Web Development Bootcamp (Open Source)",
                "slug": "web-dev-bootcamp-free",
                "summary": "Learn modern web development using free tools. Community-driven curriculum with monetization pathways.",
                "category": "bootstrap",
                "age_min": 11,
                "age_max": 15,
                "duration_weeks": 12,
                "price": 0,
                "features": ["HTML5, CSS3, JavaScript", "Free deployment", "Freelance opportunities", "Portfolio building"],
                "is_published": True
            },

            # === BEGINNER TIER (Ages 5-9) - PREMIUM ===
            {
                "title": "Scratch Jr. Intensive (Small Group)",
                "slug": "scratch-jr-intensive",
                "summary": "Intimate group sessions (max 4 students) with personalized attention and premium curriculum.",
                "category": "beginner",
                "age_min": 5,
                "age_max": 8,
                "duration_weeks": 8,
                "price": 120000,
                "features": ["Max 4 students", "Personalized pace", "Advanced animation", "Game design principles"],
                "is_published": True
            },
            {
                "title": "LEGO Robotics Explorer (Premium)",
                "slug": "lego-robotics-explorer-premium",
                "summary": "Hands-on robotics education using premium LEGO Education kits in state-of-the-art facilities.",
                "category": "beginner",
                "age_min": 6,
                "age_max": 9,
                "duration_weeks": 10,
                "price": 145000,
                "features": ["Premium LEGO kits", "Max 5 students", "Maker lab facilities", "STEM competition prep"],
                "is_published": True
            },

            # === INTERMEDIATE TIER (Ages 10-14) - PREMIUM ===
            {
                "title": "Python Programming Mastery",
                "slug": "python-mastery",
                "summary": "Comprehensive Python course covering OOP, data structures, and real-world applications.",
                "category": "intermediate",
                "age_min": 9,
                "age_max": 13,
                "duration_weeks": 14,
                "price": 175000,
                "features": ["Object-oriented programming", "Data structures", "Real-world projects", "Code portfolio"],
                "is_published": True
            },
            {
                "title": "Robotics & Engineering Excellence",
                "slug": "robotics-engineering-premium",
                "summary": "Advanced robotics program combining mechanical engineering and autonomous systems.",
                "category": "intermediate",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 14,
                "price": 185000,
                "features": ["Arduino/Microcontroller", "Advanced sensors", "Mechanical CAD", "Competition coaching"],
                "is_published": True
            },
            {
                "title": "Web Development Foundations (Premium)",
                "slug": "web-development-premium",
                "summary": "Professional web development bootcamp covering modern tech stack and deployed projects.",
                "category": "intermediate",
                "age_min": 10,
                "age_max": 14,
                "duration_weeks": 14,
                "price": 165000,
                "features": ["HTML5, CSS3, JavaScript", "React fundamentals", "Responsive design", "Live deployment"],
                "is_published": True
            },
            {
                "title": "Digital Innovation Lab",
                "slug": "digital-innovation-lab",
                "summary": "Hands-on innovation course covering app development, 3D design, and entrepreneurial thinking.",
                "category": "intermediate",
                "age_min": 11,
                "age_max": 15,
                "duration_weeks": 12,
                "price": 155000,
                "features": ["Mobile app development", "3D design", "UI/UX fundamentals", "Business pitch development"],
                "is_published": True
            },

            # === ADVANCED TIER (Ages 13-18) - PREMIUM ===
            {
                "title": "Python Advanced Programming",
                "slug": "python-advanced",
                "summary": "Deep dive into professional Python development covering OOP design patterns and algorithms.",
                "category": "advanced",
                "age_min": 12,
                "age_max": 16,
                "duration_weeks": 16,
                "price": 225000,
                "features": ["Advanced OOP", "Algorithms", "API development", "Database design", "Professional portfolio"],
                "is_published": True
            },
            {
                "title": "Artificial Intelligence & Machine Learning",
                "slug": "ai-machine-learning",
                "summary": "Comprehensive AI/ML course exploring neural networks, computer vision, and NLP.",
                "category": "advanced",
                "age_min": 13,
                "age_max": 17,
                "duration_weeks": 18,
                "price": 295000,
                "features": ["Machine learning fundamentals", "Neural networks", "Computer vision", "NLP", "Kaggle competitions"],
                "is_published": True
            },
            {
                "title": "Full-Stack Web Development",
                "slug": "fullstack-web-development",
                "summary": "Professional full-stack course covering React, Node.js, databases, and cloud deployment.",
                "category": "advanced",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 18,
                "price": 285000,
                "features": ["React", "Node.js", "MongoDB/PostgreSQL", "GraphQL APIs", "Cloud deployment", "Freelance projects"],
                "is_published": True
            },
            {
                "title": "Mobile App Development (iOS & Android)",
                "slug": "mobile-app-development",
                "summary": "Build professional iOS and Android apps using React Native with app store deployment.",
                "category": "advanced",
                "age_min": 13,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 265000,
                "features": ["React Native", "iOS/Android features", "App store submission", "Authentication", "Published apps"],
                "is_published": True
            },
            {
                "title": "Game Development with Unity",
                "slug": "game-development-unity",
                "summary": "Professional game development using Unity and C#. Create 2D/3D games and physics engines.",
                "category": "advanced",
                "age_min": 12,
                "age_max": 17,
                "duration_weeks": 16,
                "price": 245000,
                "features": ["Unity engine", "C# programming", "2D/3D mechanics", "Physics systems", "AI programming", "Game publishing"],
                "is_published": True
            },
            {
                "title": "Cybersecurity & Ethical Hacking",
                "slug": "cybersecurity-hacking",
                "summary": "Comprehensive cybersecurity course covering network security and penetration testing.",
                "category": "advanced",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 235000,
                "features": ["Network security", "Penetration testing", "Cryptography", "CTF competitions", "Security certification prep"],
                "is_published": True
            },
            {
                "title": "Data Science & Analytics Intensive",
                "slug": "data-science-analytics",
                "summary": "Master data analysis, statistics, machine learning, and visualization with real datasets.",
                "category": "advanced",
                "age_min": 14,
                "age_max": 18,
                "duration_weeks": 16,
                "price": 255000,
                "features": ["Python data stack", "Statistical analysis", "Data visualization", "ML pipelines", "Tableau/Power BI"],
                "is_published": True
            },

            # === ELITE TIER - RESEARCH & MENTORSHIP ===
            {
                "title": "Advanced Research Track",
                "slug": "advanced-research",
                "summary": "For exceptional students pursuing mastery. Independent research mentored by industry leaders.",
                "category": "elite",
                "age_min": 15,
                "age_max": 18,
                "duration_weeks": 20,
                "price": 385000,
                "features": ["1-on-1 mentorship", "Industry mentor pairing", "Academic publication support", "Conference prep", "University guidance"],
                "is_published": True
            },
            {
                "title": "VIP 1-on-1 Mentorship",
                "slug": "vip-mentorship",
                "summary": "Completely personalized 1-on-1 instruction tailored to your unique interests and goals.",
                "category": "elite",
                "age_min": 8,
                "age_max": 18,
                "duration_weeks": 8,
                "price": 450000,
                "features": ["Personalized curriculum", "Elite instructor pairing", "Flexible scheduling", "Custom projects", "Career planning"],
                "is_published": True
            },
            {
                "title": "Competition Prep: International Olympiads",
                "slug": "competition-prep",
                "summary": "Intensive preparation for International STEM Olympiads and hackathons with expert coaching.",
                "category": "elite",
                "age_min": 10,
                "age_max": 18,
                "duration_weeks": 14,
                "price": 195000,
                "features": ["Past competition problems", "Olympiad strategies", "Team coaching", "Mock competitions", "Travel support"],
                "is_published": True
            },
            {
                "title": "Summer Immersion Boot Camp (4 Weeks)",
                "slug": "summer-bootcamp",
                "summary": "Intensive 4-week residential summer program combining multiple tech tracks.",
                "category": "elite",
                "age_min": 12,
                "age_max": 17,
                "duration_weeks": 4,
                "price": 395000,
                "features": ["Multi-track curriculum", "4 days/week intensive", "Professional projects", "Industry speakers", "Competition showcase"],
                "is_published": True
            },
            {
                "title": "Corporate Training & Workshops (Custom)",
                "slug": "corporate-training",
                "summary": "Custom STEM programs designed for corporate and school teams.",
                "category": "elite",
                "age_min": 8,
                "age_max": 25,
                "duration_weeks": 2,
                "price": 500000,
                "features": ["Fully customized", "On-site or in-facility", "Multiple cohorts", "Post-program support", "Impact reporting"],
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
                    self.style.SUCCESS(f'✓ Created: {program.title} ({program.get_category_display()})')
                )
            else:
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'↻ Updated: {program.title}')
                )

        self.stdout.write(
            self.style.SUCCESS(
                f'\n{"="*70}\n'
                f'✅ Done! Created: {created_count}, Updated: {updated_count}\n'
                f'Total Programs: {Program.objects.count()}\n'
                f'{"="*70}'
            )
        )