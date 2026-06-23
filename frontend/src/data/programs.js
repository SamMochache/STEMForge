export const programs = [
  {
    id: 1,
    title: 'AI Literacy & Responsible Technology',
    slug: 'ai-literacy',
    summary: 'Students learn to build with AI, evaluate its outputs critically, and design human-centered applications. Ethics, bias, and generative tools integrated throughout.',
    category: 'core',
    grade_min: 'Form 1',
    grade_max: 'Form 4',
    duration_weeks: 12,
    price_per_student: 10000,
    features: [
      'Generative AI tools & prompt engineering',
      'Data literacy & model evaluation',
      'Ethics, bias & human-centered design',
      'Functioning AI prototype by term end'
    ],
    what_we_provide: [
      'Curriculum & lesson plans',
      'AI-assisted learning platform',
      'Trained facilitators',
      'Assessment rubrics & progress dashboards'
    ],
    what_school_provides: [
      'Dedicated time slot (min. 2 hours/week)',
      'Classroom with internet access',
      'A designated teacher liaison'
    ],
    investment_note: 'From KSh 10,000 per student per term. Pilot partnership rate available for first-time institutional partners.',
    is_published: true,
  },
  {
    id: 2,
    title: 'Coding & Software Development',
    slug: 'coding-development',
    summary: 'Progressive coding pathways from Python fundamentals to full-stack development. Project-based, portfolio-driven, and aligned with real industry practices.',
    category: 'core',
    grade_min: 'Form 2',
    grade_max: 'Form 4',
    duration_weeks: 14,
    price_per_student: 10000,
    features: [
      'Python fundamentals to full-stack',
      'Version control & collaborative development',
      'Deployable web applications',
      'Professional code portfolio'
    ],
    what_we_provide: [
      'Curriculum & project briefs',
      'Cloud development environments',
      'Trained facilitators',
      'Code review & mentorship'
    ],
    what_school_provides: [
      'Dedicated time slot (min. 2 hours/week)',
      'Computer lab or device access',
      'A designated teacher liaison'
    ],
    investment_note: 'From KSh 10,000 per student per term. Pilot partnership rate available for first-time institutional partners.',
    is_published: true,
  },
  {
    id: 3,
    title: 'Robotics & Physical Computing',
    slug: 'robotics-physical-computing',
    summary: 'Hands-on engineering with Arduino, microcontrollers, sensors, and automation. Students build functioning robots and automated systems from first principles.',
    category: 'core',
    grade_min: 'Form 2',
    grade_max: 'Form 4',
    duration_weeks: 14,
    price_per_student: 12000,
    features: [
      'Arduino & microcontroller programming',
      'Sensor integration & automation',
      'Mechanical design & prototyping',
      'Autonomous robot prototype'
    ],
    what_we_provide: [
      'Curriculum & build guides',
      'Robotics kits & components',
      'Trained facilitators',
      'Competition & showcase opportunities'
    ],
    what_school_provides: [
      'Dedicated time slot (min. 2 hours/week)',
      'Classroom or lab space',
      'A designated teacher liaison'
    ],
    investment_note: 'From KSh 12,000 per student per term. Pilot partnership rate available for first-time institutional partners.',
    is_published: true,
  },
  {
    id: 4,
    title: 'Innovation & Entrepreneurship',
    slug: 'innovation-entrepreneurship',
    summary: 'Design thinking, venture creation, market validation, and real customer acquisition. Students launch micro-ventures with actual revenue—not hypothetical projects.',
    category: 'core',
    grade_min: 'Form 3',
    grade_max: 'Form 4',
    duration_weeks: 12,
    price_per_student: 10000,
    features: [
      'Design thinking & problem framing',
      'Business model validation',
      'Customer acquisition & revenue testing',
      'Real venture launch with mentorship'
    ],
    what_we_provide: [
      'Curriculum & venture framework',
      'Mentor network access',
      'Trained facilitators',
      'Pitch & demo day opportunities'
    ],
    what_school_provides: [
      'Dedicated time slot (min. 2 hours/week)',
      'Classroom space',
      'A designated teacher liaison'
    ],
    investment_note: 'From KSh 10,000 per student per term. Pilot partnership rate available for first-time institutional partners.',
    is_published: true,
  },
];

export const getProgramBySlug = (slug) => programs.find((program) => program.slug === slug);