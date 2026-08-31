import type { LegalDocument } from '../types/content';

const LAST_UPDATED = 'December 1, 2024';

export const termsDocument: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Terms of Service',
  lastUpdated: LAST_UPDATED,
  sections: [
  {
    title: 'Acceptance of Terms',
    paragraphs: [
    'Welcome to STEMForge Academy. By accessing or using our website (stemforge.co.ke) and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.',
    'These Terms constitute a legally binding agreement between you and STEMForge Academy, a registered educational institution in Kenya.']

  },
  {
    title: 'Our Services',
    paragraphs: ['STEMForge Academy provides:'],
    bullets: [
    'In-school STEM solutions for students ages 14–18',
    'Facilitated workshops and AI-assisted learning modules',
    'Access to educational resources, materials, and platforms',
    'Mentorship, venture guidance, and competency assessment',
    'Partner-school events, showcases, and competitions']

  },
  {
    title: 'Eligibility and Registration',
    subsections: [
    {
      title: 'Age Requirements',
      bullets: [
      'Students must fall within the age band for their selected solution',
      'Parents/guardians must be 18+ to register a student',
      'Parental consent is required for all students under 18']

    },
    {
      title: 'Account Registration',
      paragraphs: [
      'To access certain services, you must create an account and provide accurate information:'],

      bullets: [
      'You are responsible for maintaining account confidentiality',
      'You must notify us immediately of unauthorized access',
      'You are responsible for all activities under your account',
      'One account per family or student is permitted']

    }]

  },
  {
    title: 'Enrollment and Payment Terms',
    highlight: true,
    subsections: [
    {
      title: 'Application Process',
      bullets: [
      'Enrollment is subject to availability and acceptance',
      'We reserve the right to accept or decline applications',
      'Acceptance is confirmed via email within 48 hours']

    },
    {
      title: 'Payment',
      bullets: [
      'Fees must be paid in full before a term starts, unless a payment plan is arranged',
      'Payment instructions are shared after acceptance',
      'All fees are in Kenyan Shillings (KSh)',
      'Payment confirmation is sent via email']

    },
    {
      title: 'Refund Policy',
      bullets: [
      'Full refund: cancellation 7+ days before a term starts',
      '50% refund: cancellation 3–6 days before start',
      'No refund: cancellation less than 3 days before start, or after the term begins',
      'Transfer option: program credits valid for 12 months',
      'Refunds are processed within 14 business days']

    }]

  },
  {
    title: 'Student and User Conduct',
    paragraphs: [
    'We expect every participant to contribute to a safe, respectful learning environment. The following are prohibited:'],

    bullets: [
    'Harassment, bullying, or discriminatory behavior',
    'Sharing account credentials or platform materials outside the cohort',
    'Plagiarism or misrepresenting work produced by others or by AI tools',
    'Damaging equipment, kits, or school facilities',
    'Any activity that is unlawful under Kenyan law']

  },
  {
    title: 'Intellectual Property',
    paragraphs: [
    'Curriculum, lesson plans, platform code, and assessment rubrics remain the intellectual property of STEMForge Academy and are licensed to partner schools for the duration of the partnership.',
    'Students retain ownership of the projects and ventures they create. We may request permission to feature student work in showcases and marketing.']

  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
    'STEMForge Academy is not liable for indirect or consequential loss arising from use of our services. Our total liability is limited to the fees paid for the term in question.',
    'Partner schools remain responsible for student supervision, safeguarding, and duty of care on their premises.']

  },
  {
    title: 'Changes to These Terms',
    paragraphs: [
    'We may update these Terms from time to time. Material changes will be communicated to partner schools directly and posted on this page with a revised date.']

  },
  {
    title: 'Contact',
    paragraphs: [
    'Questions about these Terms can be sent to admissions@stemforge.co.ke or raised through the Contact page.']

  }]

};

export const privacyDocument: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lastUpdated: LAST_UPDATED,
  sections: [
  {
    title: 'Our Commitment',
    paragraphs: [
    'STEMForge Academy is committed to protecting the privacy of students, parents, and partner-school staff. This policy explains what we collect, why we collect it, and the choices you have.']

  },
  {
    title: 'Information We Collect',
    bullets: [
    'School details: institution name, contact person, role, student population',
    'Contact details: name, email address, phone number',
    'Student information: first name, age band, cohort, competency progress',
    'Submission content: inquiry notes and partnership intent',
    'Technical data: browser type, device type, and anonymised usage analytics']

  },
  {
    title: 'How We Use Information',
    bullets: [
    'To review partnership inquiries and schedule discovery sessions',
    'To deliver solutions and report competency progress to school leadership',
    'To improve curriculum, facilitation quality, and platform experience',
    'To send program updates that you or your school have opted into']

  },
  {
    title: 'Student Data and Safeguarding',
    paragraphs: [
    'Student records are minimised by design. We collect only what is required for facilitation and assessment, store it under the partner school’s instruction, and never sell it.'],

    bullets: [
    'No student data is shared with advertisers',
    'Access is limited to assigned facilitators and program staff',
    'Parents may request access, correction, or deletion through the school']

  },
  {
    title: 'Data Retention and Security',
    paragraphs: [
    'We retain inquiry data for 24 months and student competency data for the duration of the partnership plus one academic year. Data is stored with encryption in transit and at rest.']

  },
  {
    title: 'Third-Party Services',
    paragraphs: [
    'We use a small number of trusted providers for hosting, email, and analytics. Each is bound by its own privacy commitments and processes data on our behalf only.']

  },
  {
    title: 'Your Rights',
    bullets: [
    'Request a copy of the personal data we hold about you',
    'Ask us to correct inaccurate information',
    'Ask us to delete data we no longer need',
    'Withdraw consent for program communications at any time']

  },
  {
    title: 'Contact',
    paragraphs: [
    'Privacy questions and data requests can be sent to admissions@stemforge.co.ke.']

  }]

};

export const cookiesDocument: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Cookies Policy',
  lastUpdated: LAST_UPDATED,
  sections: [
  {
    title: 'Introduction',
    paragraphs: [
    'This Cookies Policy explains how we use cookies and similar technologies on our website. By using our site, you agree to the use of cookies as described in this policy.']

  },
  {
    title: 'What Are Cookies?',
    paragraphs: [
    'Cookies are small text files placed on your device to improve your browsing experience. They help websites remember your actions and preferences over time.'],

    bullets: [
    'Session cookies (deleted when you close your browser)',
    'Persistent cookies (remain until manually removed or expired)',
    'First-party cookies (placed by our website)',
    'Third-party cookies (placed by external services like analytics tools)']

  },
  {
    title: 'Why We Use Cookies',
    paragraphs: [
    'We use cookies to enhance functionality, improve performance, and ensure you have a smooth browsing experience.'],

    bullets: [
    'To remember user preferences, including light or dark appearance',
    'To analyse website performance',
    'To enable essential site features',
    'To keep sessions secure']

  },
  {
    title: 'Types of Cookies We Use',
    subsections: [
    {
      title: 'Essential Cookies',
      paragraphs: ['These cookies are required for the website to function properly.'],
      bullets: ['Security and fraud prevention', 'Core navigation features']
    },
    {
      title: 'Functional Cookies',
      paragraphs: [
      'These cookies allow us to remember your preferences and improve usability.'],

      bullets: ['Appearance preference', 'Saved settings', 'Enhanced experience features']
    },
    {
      title: 'Analytics Cookies',
      paragraphs: [
      'These cookies help us understand how visitors interact with the website.'],

      bullets: ['Pages visited', 'Time spent on the site', 'Website performance insights']
    }]

  },
  {
    title: 'Managing Your Cookies',
    paragraphs: [
    'You can adjust your browser settings to refuse or delete cookies at any time.'],

    bullets: [
    'Disable cookies completely',
    'Delete existing cookies',
    'Block third-party cookies',
    'Receive warnings before cookies are stored']

  },
  {
    title: 'Third-Party Cookies',
    paragraphs: [
    'Some cookies may be provided by trusted third-party tools such as analytics providers or embedded services. These providers have their own privacy and cookies policies.']

  },
  {
    title: 'Updates to This Policy',
    paragraphs: [
    'We may update this Cookies Policy occasionally. Any changes will be posted on this page with a revised “Last Updated” date.']

  },
  {
    title: 'Contact Us',
    paragraphs: [
    'If you have any questions about this Cookies Policy, contact us at admissions@stemforge.co.ke.']

  }]

};