import PortalSubnav from '../components/platform/PortalSubnav.jsx';
import PortalHero from '../components/platform/PortalHero.jsx';
import SectionHeading from '../components/platform/SectionHeading.jsx';
import Button from '../components/platform/Button.jsx';
import CourseCard from '../components/platform/CourseCard.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import Link from '../router/Link.jsx';
import Icon from '../components/platform/Icon.jsx';
import { getWorld, coursesForWorld, BDI_COURSE, worldStyle } from '../data/trainingCatalog.js';

const SUBNAV = [
  { label: 'Overview', href: '#overview' },
  { label: 'Courses', href: '#courses' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Resources', href: '#resources' },
  { label: 'Help', to: '/help' },
];

const STEPS = [
  { title: 'Enroll', text: 'Create your student record, confirm your details and set up the identity-verification questions used during the course.' },
  { title: 'Complete timed modules', text: 'Work through the introduction and eleven modules in order. Each module has a required minimum time and a short knowledge check.' },
  { title: 'Take the final exam', text: 'A 40-question, open-book final exam. A passing score is 32 of 40 (80%). If needed, review and retake.' },
  { title: 'Sign and receive your certificate', text: 'Sign your completion statement, confirm the details for your certificate and choose how it is delivered.' },
];

const RESOURCES = [
  { title: 'Which course is right for me?', text: 'BDI is commonly taken after a traffic citation or when a court or the state directs a driver to complete a driver improvement course. TLSAE is the course category for new Florida drivers, and ADI is a longer course for drivers directed to advanced improvement. If you’re unsure, check the notice or citation you received — or contact us.', to: '/help', link: 'Get help choosing' },
  { title: 'What to expect from online driver training', text: 'Timed, sequential modules, knowledge checks after each module, identity verification during the course and an open-book final exam — all completed at your own pace.', to: BDI_COURSE.path + '#how-it-works', link: 'See how the BDI course works' },
  { title: 'Return to a course in progress', text: 'Your progress is saved as you go. Continue any course from My Learning, your shared learner account across every training world.', to: '/my-learning', link: 'Open My Learning' },
];

export default function DriverTrainingPage() {
  const world = getWorld('driver');
  const courses = coursesForWorld('driver');
  return (
    <>
      <PortalSubnav world={world} items={SUBNAV} />
      <PortalHero
        world={world}
        tone="dark"
        title={world.name}
        lede={world.purpose}
        pill="Courses available · management demo"
        actions={(
          <>
            <Button to={BDI_COURSE.path} variant="accent" iconAfter="arrow-right">View BDI Course</Button>
            <Button href="#how-it-works" variant="on-dark">How it works</Button>
          </>
        )}
        visual={<CourseCard course={BDI_COURSE} ctaLabel="View BDI Course" spotlight />}
      />

      <section className="aa-section" aria-labelledby="courses" style={worldStyle(world)}>
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Courses" id="courses" title="Driver & Traffic courses" lede="One course is developed and available as a management demo. Additional Florida driver courses are in development and will be published here when complete." />
          </div>
          <div className="aa-grid aa-grid--3">
            {courses.map(c => <CourseCard key={c.id} course={c} ctaLabel={c.id === 'bdi' ? 'View BDI Course' : undefined} />)}
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="how-it-works">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="How It Works" id="how-it-works" title="From enrollment to certificate, in order." lede="Every Driver & Traffic course follows the same clear path." />
          </div>
          <ol className="aa-points">
            {STEPS.map((s, i) => (
              <li key={s.title} className="aa-point">
                <span className="aa-point__num">STEP {String(i + 1).padStart(2, '0')}</span>
                <h3 className="aa-point__title">{s.title}</h3>
                <p className="aa-point__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="resources">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Resources" id="resources" title="Driver education resources" />
          </div>
          <div className="aa-grid aa-grid--3">
            {RESOURCES.map(r => (
              <article key={r.title} className="aa-resource-card">
                <h3 className="aa-resource-card__title">{r.title}</h3>
                <p className="aa-resource-card__text">{r.text}</p>
                <Link to={r.to} className="aa-resource-card__link">{r.link} <Icon name="arrow-right" size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to look at the course?" text={`${BDI_COURSE.name} — the first course developed for ${world.name}.`} primary={{ label: 'View BDI Course', to: BDI_COURSE.path }} secondary={{ label: 'Explore other training', to: '/training' }} />
    </>
  );
}
