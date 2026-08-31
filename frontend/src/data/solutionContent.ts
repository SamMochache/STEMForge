export interface SolutionContent {
  overview: string;
  whatYouGet: string[];
  curriculum: {week: string;topic: string;details: string;}[];
  outcomes: string[];
  mentoring: string;
  community: string;
}

export const solutionContent: Record<string, SolutionContent> = {
  'ai-literacy': {
    overview:
    "Students don't just learn about AI—they build with it. This solution integrates generative tools, data literacy, and ethical evaluation into a cohesive learning experience. By the end of the term, every student has trained a model, evaluated its outputs for bias, and designed a human-centered application.",
    whatYouGet: [
    'Curriculum aligned with CBC Science & Technology strand',
    'AI-assisted learning platform access',
    'Trained facilitators for in-school delivery',
    'Assessment rubrics and progress dashboards',
    'Termly competency reports for school leadership',
    'Student AI prototype portfolio'],

    curriculum: [
    {
      week: '1-3',
      topic: 'Generative AI Fundamentals',
      details:
      'Prompt engineering, model behavior, output evaluation. Build first AI-powered tool.'
    },
    {
      week: '4-6',
      topic: 'Data Literacy',
      details: 'Training data, bias detection, data quality. Analyze real datasets for fairness.'
    },
    {
      week: '7-9',
      topic: 'Ethics & Human-Centered Design',
      details: 'AI ethics frameworks, stakeholder analysis, design principles.'
    },
    {
      week: '10-12',
      topic: 'Capstone Prototype',
      details: 'Build and present a functioning AI prototype solving a local problem.'
    }],

    outcomes: [
    'Use generative AI tools effectively and critically',
    'Evaluate AI outputs for bias and accuracy',
    'Design human-centered AI applications',
    'Understand data quality and its impact on models',
    'Present technical work to non-technical audiences'],

    mentoring:
    'Our facilitators are AI practitioners with classroom experience. They guide students through the productive uncertainty of working with generative systems—knowing when to trust, when to challenge, and when human judgment is essential.',
    community:
    'Partner schools join a network of institutions exploring AI in education. Share best practices, compare student outcomes, and access quarterly facilitator training updates.'
  },
  'coding-development': {
    overview:
    'A progressive pathway from Python fundamentals to deployable full-stack applications. Students write production-quality code, use version control, and build a professional portfolio that demonstrates real capability—not just completion.',
    whatYouGet: [
    'CBC-aligned coding curriculum',
    'Cloud-based development environments',
    'In-school facilitated workshops',
    'Peer code review and mentorship',
    'Deployable project portfolio for each student',
    'Termly progress dashboards'],

    curriculum: [
    {
      week: '1-4',
      topic: 'Python Fundamentals',
      details: 'Variables, control flow, functions, data structures. Build CLI tools and games.'
    },
    {
      week: '5-8',
      topic: 'Web Development',
      details: 'HTML, CSS, JavaScript, responsive design. Deploy first website.'
    },
    {
      week: '9-11',
      topic: 'Full-Stack Integration',
      details: 'React, APIs, databases. Build a complete web application.'
    },
    {
      week: '12-14',
      topic: 'Portfolio & Deployment',
      details: 'Version control, testing, cloud deployment. Final project showcase.'
    }],

    outcomes: [
    'Write clean, well-structured Python and JavaScript',
    'Build and deploy full-stack web applications',
    'Use version control and collaborative development workflows',
    'Debug code systematically and independently',
    'Present a professional code portfolio'],

    mentoring:
    'Facilitators are software engineers with teaching experience. They provide real-time code review, architecture guidance, and industry context that textbooks cannot replicate.',
    community:
    'Students contribute to shared repositories, participate in peer reviews, and showcase work at term-end demo days. Partner schools receive access to our facilitator community for ongoing support.'
  },
  'robotics-physical-computing': {
    overview:
    'Hands-on engineering from first principles. Students program microcontrollers, integrate sensors, and build autonomous systems. Every student leaves with a functioning robot they designed, built, and programmed—not a kit they assembled.',
    whatYouGet: [
    'Arduino and sensor kits for each student',
    'Mechanical prototyping materials',
    'In-school workshop facilitation',
    'Competition and showcase opportunities',
    'Build guides and safety protocols',
    'Termly progress assessments'],

    curriculum: [
    {
      week: '1-3',
      topic: 'Electronics & Circuits',
      details: 'Breadboards, resistors, LEDs, multimeters. Build and test circuits.'
    },
    {
      week: '4-7',
      topic: 'Microcontroller Programming',
      details: 'Arduino IDE, I/O pins, sensor integration. Program responsive systems.'
    },
    {
      week: '8-10',
      topic: 'Mechanical Design',
      details: 'CAD basics, 3D printing, structural design. Build custom chassis.'
    },
    {
      week: '11-14',
      topic: 'Autonomous Systems',
      details: 'Sensor fusion, decision logic, navigation. Build autonomous robot.'
    }],

    outcomes: [
    'Program Arduino microcontrollers for real-world tasks',
    'Design and integrate sensor-based automation systems',
    'Build mechanical prototypes using CAD and 3D printing',
    'Troubleshoot hardware-software integration issues',
    'Document and present engineering work professionally'],

    mentoring:
    'Facilitators are robotics engineers and competition veterans. They guide students through the iterative cycle of build-test-fail-improve that defines real engineering practice.',
    community:
    'Partner schools gain access to inter-school robotics showcases and regional competition pipelines. Students collaborate on team challenges and mentor younger cohorts.'
  },
  'innovation-entrepreneurship': {
    overview:
    'Entrepreneurship as pedagogy, not just a subject. Students identify real problems, validate solutions with actual customers, and launch micro-ventures with revenue. The venture is the curriculum—not a project at the end of it.',
    whatYouGet: [
    'Venture creation framework and curriculum',
    'Mentor network of Kenyan founders and investors',
    'In-school facilitated workshops',
    'Demo day and pitch opportunities',
    'Business model validation tools',
    'Termly venture outcome reports'],

    curriculum: [
    {
      week: '1-3',
      topic: 'Problem & Market',
      details:
      'Identify problems, customer interviews, market sizing. Validate before building.'
    },
    {
      week: '4-6',
      topic: 'Solution & Model',
      details: 'Prototyping, business model canvas, unit economics. Test assumptions cheaply.'
    },
    {
      week: '7-9',
      topic: 'Launch & Iterate',
      details: 'Customer acquisition, revenue testing, feedback loops. Launch real venture.'
    },
    {
      week: '10-12',
      topic: 'Scale & Pitch',
      details: 'Growth tactics, pitch preparation, demo day. Present to real stakeholders.'
    }],

    outcomes: [
    'Identify and frame problems worth solving',
    'Validate business models with real customers',
    'Launch revenue-generating micro-ventures',
    'Iterate based on market feedback',
    'Pitch ventures to investors and community leaders'],

    mentoring:
    'Mentors are active founders, not academics. They share war stories, introduce networks, and push students to confront the gap between a plan and reality.',
    community:
    'Partner schools host rotating demo days where students pitch to local business leaders. Top ventures receive seed funding and continued mentorship through our alumni network.'
  }
};

export const defaultSolutionContent: SolutionContent = {
  overview:
  'This solution combines theoretical knowledge with hands-on practical experience. Students develop mastery through project-based learning, working on real challenges that matter to their communities.',
  whatYouGet: [
  'CBC-aligned curriculum and lesson plans',
  'Professional-grade tools and platforms',
  'Trained facilitators for in-school delivery',
  'Assessment rubrics and progress dashboards',
  'Termly competency reports',
  'Student project portfolios'],

  curriculum: [],
  outcomes: [
  'Master core concepts and technologies',
  'Build a professional project portfolio',
  'Develop problem-solving and critical thinking skills',
  'Prepare for advanced academic and career opportunities'],

  mentoring:
  'Receive expert guidance from facilitators with industry experience, trained specifically for in-school delivery.',
  community:
  'Join a network of partner schools sharing best practices, student outcomes, and continuous curriculum improvements.'
};