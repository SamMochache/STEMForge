import type { AgeGroup } from '../types/content';

export const ageGroups: AgeGroup[] = [
{
  id: 'ages-14-15',
  label: 'Foundation',
  range: 'Ages 14–15',
  stage: '01',
  description:
  'Students meet AI, code, and making for the first time in a structured way. The emphasis is on curiosity, confidence, and finishing something real in the first term.',
  focus: [
  'AI awareness & prompt basics',
  'Logic and computational thinking',
  'First working prototype'],

  solutions: ['AI Literacy & Responsible Technology']
},
{
  id: 'ages-15-16',
  label: 'Builder',
  range: 'Ages 15–16',
  stage: '02',
  description:
  'Students move from guided exercises to independent building. Text-based coding, electronics, and data become the working material.',
  focus: [
  'Python & web fundamentals',
  'Arduino & sensor integration',
  'Data literacy & model evaluation'],

  solutions: [
  'Coding & Software Development',
  'Robotics & Physical Computing']

},
{
  id: 'ages-16-17',
  label: 'Practitioner',
  range: 'Ages 16–17',
  stage: '03',
  description:
  'Students work at project scale: full-stack applications, autonomous systems, and validated venture ideas with real users.',
  focus: [
  'Full-stack applications',
  'Autonomous systems',
  'Customer discovery & validation'],

  solutions: [
  'Coding & Software Development',
  'Innovation & Entrepreneurship']

},
{
  id: 'ages-17-18',
  label: 'Founder',
  range: 'Ages 17–18',
  stage: '04',
  description:
  'Students launch ventures with revenue, mentor younger cohorts, and leave with a competency portfolio they can take to university or work.',
  focus: [
  'Venture launch & revenue testing',
  'Pitching to real stakeholders',
  'Portfolio & mentorship'],

  solutions: [
  'Innovation & Entrepreneurship',
  'AI Literacy & Responsible Technology']

}];