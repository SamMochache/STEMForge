export const blogPosts = [
  {
    id: 1,
    title: 'The Future of STEM Education in Africa',
    slug: 'future-of-stem-education-africa',
    excerpt: 'How innovative learning approaches are reshaping the educational landscape across the continent, and why now is the critical moment for investment in youth STEM capabilities.',
    published_at: '2026-06-06T09:00:00.000Z',
    is_published: true,
    content: `
<h2>A Transformative Moment</h2>
<p>Africa stands at a unique intersection of challenge and opportunity. With the world's youngest population and fastest-growing tech ecosystems, the continent is poised to become a global innovation hub, but only if we invest strategically in STEM education today.</p>
<h2>The Challenge</h2>
<p>Traditional educational models were designed for a different era. They emphasize rote memorization over creative problem-solving, theory over practical application, and individual work over collaborative innovation.</p>
<h2>The Opportunity</h2>
<p>At STEMForge, we've witnessed what happens when young people get access to world-class tools, expert mentorship, and the freedom to create. Students who enter our programs curious become confident.</p>
<blockquote>The question is no longer whether African youth can compete globally in STEM fields. It is whether we can create enough pathways for all who have the passion and potential.</blockquote>
<h2>What Success Looks Like</h2>
<p>Our alumni are building companies, publishing research, and solving real problems in their communities. They are prototyping, iterating, and improving exactly as we train them to do.</p>
<p>The next decade will determine whether Africa becomes a consumer of technology or a creator of it. We're betting on the latter.</p>
`,
  },
  {
    id: 2,
    title: 'Why Project-Based Learning Works',
    slug: 'why-project-based-learning-works',
    excerpt: "Traditional instruction tells students what to think. Project-based learning teaches them how to think. Here's why that distinction matters more than ever.",
    published_at: '2026-05-30T09:00:00.000Z',
    is_published: true,
    content: `
<h2>The Fundamental Shift</h2>
<p>When students build a robot that must navigate a maze, they're not just learning about motors and sensors. They're learning to break complex problems into manageable pieces, test hypotheses, fail productively, and persevere through frustration.</p>
<h2>Real Skills for Real Challenges</h2>
<p>The problems our students will face in their careers do not come with answer keys. They'll need to define unclear problems, create new solutions, collaborate across differences, and adapt when circumstances change.</p>
<h2>The Science Behind It</h2>
<p>Students retain information better when they use it to create something meaningful. The act of building, whether code, circuits, or prototypes, creates understanding that passive learning rarely matches.</p>
<h2>Beyond Technical Skills</h2>
<p>Project-based learning builds confidence. When a student debugs a program or demonstrates a robot they built, they develop a powerful belief: <em>I can figure this out.</em></p>
<p>That belief often determines whether someone becomes a creator or remains a consumer of technology.</p>
`,
  },
  {
    id: 3,
    title: 'Student Spotlight: Building an Agricultural Monitoring System',
    slug: 'student-spotlight-agricultural-monitoring',
    excerpt: "Meet Sarah, a 15-year-old STEMForge student who developed an IoT system to help her family's farm optimize irrigation and improve crop yields.",
    published_at: '2026-05-23T09:00:00.000Z',
    is_published: true,
    content: `
<h2>The Problem</h2>
<p>Sarah's family has farmed the same land for three generations. Increasingly unpredictable weather patterns were making traditional farming knowledge less reliable, especially around irrigation decisions.</p>
<h2>The Solution</h2>
<p>Drawing on skills from robotics, engineering, and Python programming, Sarah designed a monitoring system that tracks soil moisture, temperature, and humidity across different sections of the farm.</p>
<p>The system sends alerts when any zone needs attention. It also logs data over time, allowing the family to identify patterns and make more informed decisions.</p>
<h2>The Impact</h2>
<p>"We've reduced our water usage by about 30% while actually improving our yields," Sarah's father told us. "But more than that, I'm amazed at what my daughter can do."</p>
<blockquote>I didn't know I could build something that would actually help my family. Now I'm thinking about what else I can create.</blockquote>
<h2>What's Next</h2>
<p>Sarah is now working with a local agricultural cooperative to deploy similar systems on other farms in her region. She's also considering starting her own company.</p>
`,
  },
  {
    id: 4,
    title: 'The Role of Failure in Innovation',
    slug: 'role-of-failure-in-innovation',
    excerpt: "At STEMForge, we don't just tolerate failure. We celebrate it. Here's why mistakes are essential to mastery and how we've built a culture that embraces them.",
    published_at: '2026-05-16T09:00:00.000Z',
    is_published: true,
    content: `
<h2>The Fear That Holds Students Back</h2>
<p>In many educational settings, mistakes are punished. Students learn to play it safe and attempt only what they are confident they can complete perfectly.</p>
<p>This approach produces compliant students. It does not produce innovators.</p>
<h2>A Different Approach</h2>
<p>In our labs, failure is data. A robot that doesn't navigate correctly tells us something important about our design. Code that doesn't run reveals gaps in our understanding.</p>
<h2>Creating Safe Spaces for Risk</h2>
<p>This mindset requires intentional culture-building: celebrating iterations, documenting failures as learning moments, sharing real engineering stories, and rewarding creative approaches.</p>
<h2>The Long-Term Impact</h2>
<p>Students who learn to fail productively develop resilience that extends far beyond STEM fields. They become more willing to attempt challenging projects and more persistent when facing obstacles.</p>
`,
  },
  {
    id: 5,
    title: "Preparing Students for Careers That Don't Exist Yet",
    slug: 'preparing-for-unknown-careers',
    excerpt: "By some estimates, 65% of children entering primary school today will work in jobs that don't currently exist. Here's how we're preparing them.",
    published_at: '2026-05-09T09:00:00.000Z',
    is_published: true,
    content: `
<h2>The Impossibility of Prediction</h2>
<p>Ten years ago, machine learning engineer was a niche specialization. Social media manager barely existed. Drone operator was not a common career path.</p>
<p>The technologies and industries of 2035 will likely be just as unpredictable. So how do we prepare students for unknown futures?</p>
<h2>Teaching Adaptability</h2>
<p>The answer is not only teaching specific skills. It is teaching the capacity to learn new skills quickly and effectively.</p>
<h3>Meta-Learning Skills</h3>
<p>Students learn how to break down complex topics, identify reliable resources, test understanding, and persist through confusion.</p>
<h3>Foundational Capabilities</h3>
<p>Core programming concepts, mathematical reasoning, systems thinking, and design principles transfer across technologies.</p>
<h2>The Portfolio Approach</h2>
<p>Our students build portfolios of real projects. These demonstrate not just what they know, but what they can create.</p>
<h2>Embracing Continuous Learning</h2>
<p>Learning is a lifelong practice that enables continuous growth and adaptation. That's the real skill we're teaching.</p>
`,
  },
];

export const getBlogPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);
