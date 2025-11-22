from django.core.management.base import BaseCommand
from academy.models import Program


class Command(BaseCommand):
    help = 'Seed the database with sample programs'

    def handle(self, *args, **options):
        programs = [
            {
                "title": "Robotics & Engineering",
                "slug": "robotics-engineering",
                "summary": "Foundational principles of mechanical design, sensor integration, and autonomous systems. Students construct and program robots that solve real-world challenges using Arduino, sensors, and mechanical components.",
                "age_min": 8,
                "age_max": 12,
                "duration_weeks": 12,
                "price": 25000,
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
                "title": "Artificial Intelligence",
                "slug": "artificial-intelligence",
                "summary": "Comprehensive exploration of machine learning, neural networks, and ethical AI. Students develop applications with genuine utility and social impact using Python and modern AI frameworks.",
                "age_min": 13,
                "age_max": 17,
                "duration_weeks": 16,
                "price": 35000,
                "features": [
                    "Python programming mastery",
                    "Machine learning fundamentals",
                    "Neural networks & deep learning",
                    "Computer vision projects",
                    "Natural language processing",
                    "AI ethics & responsibility"
                ],
                "is_published": True
            },
            {
                "title": "Digital Innovation",
                "slug": "digital-innovation",
                "summary": "From concept to creation—students master the complete innovation cycle. App development, 3D design, and entrepreneurial thinking converge in this comprehensive program.",
                "age_min": 10,
                "age_max": 15,
                "duration_weeks": 10,
                "price": 20000,
                "features": [
                    "Mobile app development",
                    "3D design & printing",
                    "UI/UX fundamentals",
                    "Entrepreneurial thinking",
                    "Product prototyping",
                    "Pitch presentation skills"
                ],
                "is_published": True
            },
            {
                "title": "Advanced Research",
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
                    self.style.SUCCESS(f'Created: {program.title}')
                )
            else:
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'Updated: {program.title}')
                )

        self.stdout.write(
            self.style.SUCCESS(
                f'\nDone! Created: {created_count}, Updated: {updated_count}'
            )
        )