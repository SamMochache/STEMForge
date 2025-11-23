from django.core.management.base import BaseCommand
from django.utils import timezone
from academy.models import BlogPost
from datetime import timedelta


class Command(BaseCommand):
    help = 'Seed blog posts with sample content'

    def handle(self, *args, **options):
        posts = [
            {
                "title": "The Future of STEM Education in Africa",
                "slug": "future-of-stem-education-africa",
                "excerpt": "How innovative learning approaches are reshaping the educational landscape across the continent, and why now is the critical moment for investment in youth STEM capabilities.",
                "content": """
<h2>A Transformative Moment</h2>
<p>Africa stands at a unique intersection of challenge and opportunity. With the world's youngest population and fastest-growing tech ecosystems, the continent is poised to become a global innovation hub—but only if we invest strategically in STEM education today.</p>

<h2>The Challenge</h2>
<p>Traditional educational models were designed for a different era. They emphasize rote memorization over creative problem-solving, theory over practical application, and individual work over collaborative innovation. These approaches fail to prepare students for a world where adaptability, creativity, and technical fluency are paramount.</p>

<h2>The Opportunity</h2>
<p>At STEMForge, we've witnessed firsthand what happens when you give young people access to world-class tools, expert mentorship, and the freedom to create. Students who enter our programs curious become confident. Those who start uncertain become unstoppable.</p>

<blockquote>The question is no longer whether African youth can compete globally in STEM fields—it's whether we can create enough pathways for all who have the passion and potential.</blockquote>

<h2>What Success Looks Like</h2>
<p>Our alumni are building companies, publishing research, and solving real problems in their communities. They're not waiting for permission or perfect circumstances. They're prototyping, iterating, and improving—exactly as we've trained them to do.</p>

<p>This is just the beginning. The next decade will determine whether Africa becomes a consumer of technology or a creator of it. We're betting on the latter.</p>
""",
                "is_published": True,
                "published_at": timezone.now() - timedelta(days=7)
            },
            {
                "title": "Why Project-Based Learning Works",
                "slug": "why-project-based-learning-works",
                "excerpt": "Traditional instruction tells students what to think. Project-based learning teaches them how to think. Here's why that distinction matters more than ever.",
                "content": """
<h2>The Fundamental Shift</h2>
<p>When students build a robot that must navigate a maze, they're not just learning about motors and sensors. They're learning to break complex problems into manageable pieces, to test hypotheses, to fail productively, and to persevere through frustration.</p>

<h2>Real Skills for Real Challenges</h2>
<p>The problems our students will face in their careers don't come with answer keys. They'll need to:</p>
<ul>
<li>Define problems that haven't been articulated</li>
<li>Create solutions that haven't been imagined</li>
<li>Collaborate with people who think differently</li>
<li>Adapt when circumstances change</li>
</ul>

<p>These capabilities can't be taught through lectures. They must be practiced, refined, and internalized through experience.</p>

<h2>The Science Behind It</h2>
<p>Decades of educational research confirm what we observe daily: students retain information better when they use it to create something meaningful. The act of building—whether code, circuits, or prototypes—creates neural pathways that passive learning simply cannot match.</p>

<h2>Beyond Technical Skills</h2>
<p>Perhaps most importantly, project-based learning builds confidence. When a student successfully debugs a program they wrote or demonstrates a robot they built, they develop a powerful belief: <em>I can figure this out.</em></p>

<p>That belief, more than any specific technical skill, determines whether someone becomes a creator or remains a consumer of technology.</p>
""",
                "is_published": True,
                "published_at": timezone.now() - timedelta(days=14)
            },
            {
                "title": "Student Spotlight: Building an Agricultural Monitoring System",
                "slug": "student-spotlight-agricultural-monitoring",
                "excerpt": "Meet Sarah, a 15-year-old STEMForge student who developed an IoT system to help her family's farm optimize irrigation and improve crop yields.",
                "content": """
<h2>The Problem</h2>
<p>Sarah's family has farmed the same land for three generations. But increasingly unpredictable weather patterns were making traditional farming knowledge less reliable. Her parents often had to guess when to irrigate, sometimes wasting precious water, sometimes letting crops become stressed.</p>

<h2>The Solution</h2>
<p>Drawing on skills from our Robotics & Engineering and Python programming courses, Sarah designed a monitoring system that tracks soil moisture, temperature, and humidity across different sections of the farm.</p>

<p>The system sends alerts to her father's phone when any zone needs attention. It also logs data over time, allowing the family to identify patterns and make more informed decisions about planting and irrigation.</p>

<h2>The Impact</h2>
<p>"We've reduced our water usage by about 30% while actually improving our yields," Sarah's father told us. "But more than that, I'm amazed at what my daughter can do. She's thinking about problems in ways I never imagined."</p>

<blockquote>I didn't know I could build something that would actually help my family. Now I'm thinking about what else I can create.</blockquote>

<h2>What's Next</h2>
<p>Sarah is now working with a local agricultural cooperative to deploy similar systems on other farms in her region. She's also been accepted into several university engineering programs with scholarship offers.</p>

<p>But she hasn't decided yet. She's considering starting her own company first.</p>

<p>This is why we do what we do.</p>
""",
                "is_published": True,
                "published_at": timezone.now() - timedelta(days=21)
            },
            {
                "title": "The Role of Failure in Innovation",
                "slug": "role-of-failure-in-innovation",
                "excerpt": "At STEMForge, we don't just tolerate failure—we celebrate it. Here's why mistakes are essential to mastery and how we've built a culture that embraces them.",
                "content": """
<h2>The Fear That Holds Students Back</h2>
<p>In most educational settings, mistakes are punished. Red ink covers assignments. Grades drop. Students learn to play it safe, to attempt only what they're confident they can complete perfectly.</p>

<p>This approach produces compliant students. It does not produce innovators.</p>

<h2>A Different Approach</h2>
<p>In our labs, failure is data. A robot that doesn't navigate correctly tells us something important about our design. Code that doesn't run reveals gaps in our understanding. A prototype that breaks shows us what to reinforce.</p>

<p>We teach students to ask not "Why didn't this work?" but "What did this teach me?"</p>

<h2>Creating Safe Spaces for Risk</h2>
<p>This mindset doesn't happen automatically. It requires intentional culture-building:</p>
<ul>
<li>Celebrating iterations, not just final products</li>
<li>Documenting failures as learning moments</li>
<li>Sharing stories of professional engineers' mistakes</li>
<li>Rewarding creative approaches, even when they don't work</li>
</ul>

<h2>The Long-Term Impact</h2>
<p>Students who learn to fail productively develop resilience that extends far beyond STEM fields. They become more willing to attempt challenging projects, more persistent when facing obstacles, and more creative in their problem-solving approaches.</p>

<p>These are the people who will build the future. And they're learning how to do it in our labs, one failure at a time.</p>
""",
                "is_published": True,
                "published_at": timezone.now() - timedelta(days=28)
            },
            {
                "title": "Preparing Students for Careers That Don't Exist Yet",
                "slug": "preparing-for-unknown-careers",
                "excerpt": "By some estimates, 65% of children entering primary school today will work in jobs that don't currently exist. Here's how we're preparing them.",
                "content": """
<h2>The Impossibility of Prediction</h2>
<p>Ten years ago, "machine learning engineer" was a niche specialization. "Social media manager" barely existed. "Drone operator" wasn't a career path anyone planned for.</p>

<p>The technologies and industries of 2035 will likely be just as unpredictable. So how do we prepare students for unknown futures?</p>

<h2>Teaching Adaptability</h2>
<p>The answer isn't teaching specific skills—it's teaching the capacity to learn new skills quickly and effectively. We focus on:</p>

<h3>Meta-Learning Skills</h3>
<p>How to break down complex topics, identify reliable resources, test understanding, and persist through confusion.</p>

<h3>Foundational Capabilities</h3>
<p>Core programming concepts, mathematical reasoning, systems thinking, and design principles that transfer across technologies.</p>

<h3>Collaborative Innovation</h3>
<p>How to work effectively with people who have different expertise, communicate technical concepts clearly, and contribute to larger projects.</p>

<h2>The Portfolio Approach</h2>
<p>Rather than grades and test scores, our students build portfolios of real projects. These demonstrate not just what they know, but what they can create—a far more valuable signal in rapidly evolving fields.</p>

<h2>Embracing Continuous Learning</h2>
<p>Perhaps most importantly, we're modeling continuous learning ourselves. Our curriculum evolves constantly as new technologies emerge. Our instructors actively work in industry. We bring in guest experts regularly.</p>

<p>Students see that learning isn't something that ends with formal education—it's a lifelong practice that enables continuous growth and adaptation.</p>

<p>That's the real skill we're teaching. And it's the one that will matter most.</p>
""",
                "is_published": True,
                "published_at": timezone.now() - timedelta(days=35)
            }
        ]

        created_count = 0
        updated_count = 0

        for post_data in posts:
            post, created = BlogPost.objects.update_or_create(
                slug=post_data["slug"],
                defaults=post_data
            )
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'✓ Created: {post.title}')
                )
            else:
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'↻ Updated: {post.title}')
                )

        self.stdout.write(
            self.style.SUCCESS(
                f'\n{"="*60}\n'
                f'✅ Done! Created: {created_count}, Updated: {updated_count}\n'
                f'Total Posts: {BlogPost.objects.count()}\n'
                f'{"="*60}'
            )
        )