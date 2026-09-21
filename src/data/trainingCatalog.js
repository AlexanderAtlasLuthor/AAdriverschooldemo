// Central platform catalog: training worlds, course display identities and need-based discovery.
// Instructional course content (lessons, quizzes, exam) stays in src/data/course.js — this file
// only carries what the platform pages need to present and route.

export const WORLD_STATUS = { AVAILABLE: 'available', PREVIEW: 'preview' };
export const COURSE_STATUS = { DEMO: 'demo', DEVELOPMENT: 'development' };

export const TRAINING_WORLDS = [
  {
    id: 'driver',
    slug: 'driver',
    path: '/training/driver',
    name: 'Driver & Traffic Training',
    shortName: 'Driver & Traffic',
    icon: 'road',
    accent: '#1B6A93',
    accentSoft: '#E4F0F6',
    accentLight: '#8FC9E6',
    status: WORLD_STATUS.AVAILABLE,
    statusLabel: 'Courses available',
    menuLine: 'BDI course · driver education',
    description: 'Online driver education for Florida drivers — Basic Driver Improvement today, with TLSAE, ADI and future driver courses as they are developed.',
    purpose: 'Online driver education built around Florida’s required course structure — timed modules, clear lessons and a straightforward path from enrollment to certificate.',
    courseIds: ['bdi', 'tlsae', 'adi'],
    areas: [],
    future: '',
  },
  {
    id: 'security',
    slug: 'security',
    path: '/training/security',
    name: 'Security Training',
    shortName: 'Security',
    icon: 'shield',
    accent: '#1F6B5A',
    accentSoft: '#E3F0EB',
    accentLight: '#8ED0BC',
    status: WORLD_STATUS.PREVIEW,
    statusLabel: 'Portal preview',
    menuLine: 'Officer, supervisor and site training',
    description: 'A dedicated environment for security professionals and the organizations that employ them — onboarding, supervisor development and site-specific readiness.',
    purpose: 'A dedicated environment for security professionals and the organizations that employ them — built for structured onboarding, supervisor development and site-specific readiness.',
    courseIds: [],
    areas: [
      { name: 'Individual Security Training', text: 'Foundational training for people entering or working in security roles — professional conduct, observation and reporting, and clear communication.' },
      { name: 'Supervisor Development', text: 'Development for shift leads and supervisors — leading a team, handling incidents and maintaining standards on site.' },
      { name: 'Site-Specific Training', text: 'Orientation built around a client’s property, procedures and post orders, so officers arrive prepared for the site they will serve.' },
      { name: 'Operational Readiness', text: 'Recurring training that keeps teams sharp — procedures, emergency coordination and refreshers.' },
    ],
    future: 'Security Training will publish its courses inside this world only. Completed security training will appear in the learner’s shared My Learning account alongside every other course.',
  },
  {
    id: 'workplace',
    slug: 'workplace',
    path: '/training/workplace',
    name: 'Workplace & Safety',
    shortName: 'Workplace & Safety',
    icon: 'helmet',
    accent: '#9A5B16',
    accentSoft: '#F7EDE0',
    accentLight: '#F0BE7A',
    status: WORLD_STATUS.PREVIEW,
    statusLabel: 'Portal preview',
    menuLine: 'Safety, emergency and operational training',
    description: 'Safety, emergency preparedness and operational training that helps teams work safely and respond with confidence.',
    purpose: 'Safety, emergency preparedness and operational training that helps teams work safely and respond with confidence.',
    courseIds: [],
    areas: [
      { name: 'Safety Fundamentals', text: 'Core workplace safety awareness — recognizing hazards, following safe practices and reporting concerns.' },
      { name: 'Emergency Preparedness', text: 'What to do before, during and after an emergency — evacuation, communication and roles.' },
      { name: 'Operational Training', text: 'Role- and task-specific training that supports consistent, safe day-to-day operations.' },
    ],
    future: 'Workplace & Safety is planned as the home for required and recurring workplace training. Courses will be added here as they are developed, with completion tracked in My Learning.',
  },
  {
    id: 'professional',
    slug: 'professional',
    path: '/training/professional',
    name: 'Professional Development',
    shortName: 'Professional Development',
    icon: 'people',
    accent: '#5C4B8A',
    accentSoft: '#ECE8F4',
    accentLight: '#BFB2E0',
    status: WORLD_STATUS.PREVIEW,
    statusLabel: 'Portal preview',
    menuLine: 'Leadership, service and team development',
    description: 'Leadership, customer service, supervision and team development — training that helps people grow in their roles.',
    purpose: 'Leadership, customer service, supervision and team development — training that helps people grow in their roles.',
    courseIds: [],
    areas: [
      { name: 'Leadership', text: 'Practical leadership skills for people who guide the work of others.' },
      { name: 'Customer Service', text: 'Communication and service skills for front-line and client-facing roles.' },
      { name: 'Supervision', text: 'Foundations for new and developing supervisors — expectations, feedback and accountability.' },
      { name: 'Team Development', text: 'Programs that help teams communicate and work together more effectively.' },
    ],
    future: 'Professional Development is planned to grow into a catalog of short, focused courses that individuals can take on their own and organizations can assign to their teams.',
  },
  {
    id: 'compliance',
    slug: 'compliance',
    path: '/training/compliance',
    name: 'Compliance Training',
    shortName: 'Compliance',
    icon: 'document-check',
    accent: '#8A3A46',
    accentSoft: '#F5E6E8',
    accentLight: '#E0A3AC',
    status: WORLD_STATUS.PREVIEW,
    statusLabel: 'Portal preview',
    menuLine: 'HR, policy and industry compliance',
    description: 'HR, policy, industry and organization-specific compliance training — delivered clearly and documented in one place.',
    purpose: 'HR, policy, industry and organization-specific compliance training — delivered clearly and documented in one place.',
    courseIds: [],
    areas: [
      { name: 'HR Compliance', text: 'Workplace conduct, policy acknowledgement and related human-resources training.' },
      { name: 'Policy Training', text: 'Training built around an organization’s own policies and procedures.' },
      { name: 'Industry Compliance', text: 'Training that supports the requirements of specific industries.' },
      { name: 'Organization-Specific Programs', text: 'Custom programs developed with an organization for its own compliance needs.' },
    ],
    future: 'Compliance Training is planned to support recurring, documented training cycles for organizations, with completion records kept alongside every other course in the learner’s account.',
  },
];

// Course display identities. The BDI entry is the single source for the course name used
// across the platform pages and the course experience.
export const COURSES = [
  {
    id: 'bdi',
    worldId: 'driver',
    path: '/training/driver/bdi',
    launchPath: '/course/bdi',
    name: 'Florida Basic Driver Improvement',
    shortName: 'Florida BDI',
    abbreviation: 'BDI',
    displayTitle: 'Florida 4-Hour Basic Driver Improvement',
    status: COURSE_STATUS.DEMO,
    statusLabel: 'Available · management demo',
    contextLabel: 'Development / management demo',
    summary: 'A four-hour online driver improvement course — eleven instructional modules plus an introduction, short knowledge checks, two required breaks and an open-book final exam.',
    duration: '4 hours (240 minutes)',
    durationDetail: '220 instructional minutes plus two 10-minute breaks',
    delivery: '100% online',
    jurisdiction: 'Florida',
    structure: 'Introduction + 11 modules',
    exam: '40 questions, open book · 32 of 40 (80%) to pass',
    completion: 'Certificate of completion after passing and signing the completion statement',
    ctaLabel: 'View Course',
  },
  {
    id: 'tlsae',
    worldId: 'driver',
    name: 'Traffic Law and Substance Abuse Education',
    shortName: 'TLSAE',
    abbreviation: 'TLSAE',
    status: COURSE_STATUS.DEVELOPMENT,
    statusLabel: 'In development · coming later',
    summary: 'Florida’s course category for new drivers, planned as the next Driver & Traffic Training course.',
  },
  {
    id: 'adi',
    worldId: 'driver',
    name: 'Advanced Driver Improvement',
    shortName: 'ADI',
    abbreviation: 'ADI',
    status: COURSE_STATUS.DEVELOPMENT,
    statusLabel: 'In development · coming later',
    summary: 'A longer driver improvement course for drivers directed to advanced improvement, planned for a later phase.',
  },
];

export const BDI_COURSE = COURSES[0];

// Need-based discovery: each intent routes to a training world (or the organizations page).
export const NEEDS = [
  { id: 'citation', label: 'Resolve a traffic citation', worldId: 'driver' },
  { id: 'driver-education', label: 'Get started with driver education', worldId: 'driver' },
  { id: 'workplace-training', label: 'Complete required workplace training', worldId: 'workplace' },
  { id: 'train-employees', label: 'Train my employees', path: '/for-organizations', targetLabel: 'For Organizations' },
  { id: 'develop-team', label: 'Develop my team', worldId: 'professional' },
  { id: 'compliance-requirement', label: 'Meet a compliance requirement', worldId: 'compliance' },
];

export function getWorld(id) { return TRAINING_WORLDS.find(w => w.id === id || w.slug === id) || null; }
export function getCourse(id) { return COURSES.find(c => c.id === id) || null; }
export function coursesForWorld(worldId) { return COURSES.filter(c => c.worldId === worldId); }
export function worldForCourse(course) { return course ? getWorld(course.worldId) : null; }
export function needTarget(need) {
  if (need.path) return { path: need.path, label: need.targetLabel || need.path };
  const world = getWorld(need.worldId);
  return { path: world ? world.path : '/training', label: world ? world.name : 'Explore Training' };
}
export function worldStyle(world) {
  if (!world) return undefined;
  return { '--world-accent': world.accent, '--world-accent-soft': world.accentSoft, '--world-accent-light': world.accentLight };
}
