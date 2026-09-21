import SectionHeading from '../components/platform/SectionHeading.jsx';
import Button from '../components/platform/Button.jsx';
import TrainingWorldCard from '../components/platform/TrainingWorldCard.jsx';
import NeedCard from '../components/platform/NeedCard.jsx';
import CourseCard from '../components/platform/CourseCard.jsx';
import PlatformDiagram from '../components/platform/PlatformDiagram.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import { BRAND } from '../data/company.js';
import { TRAINING_WORLDS, NEEDS, BDI_COURSE } from '../data/trainingCatalog.js';

const WHY = [
  { title: 'Clear learning experiences', text: 'Structured courses with clear expectations, visible progress and defined completion steps.' },
  { title: 'Multiple training categories', text: 'Driver, security, workplace, professional and compliance training — each in its own dedicated world.' },
  { title: 'One learner destination', text: 'A single My Learning experience across every training world, with one account and one place to continue.' },
  { title: 'Built to grow with new programs', text: 'New courses and categories join the platform without changing how you find and use your training.' },
];

const ORG_POINTS = [
  { title: 'Centralized training', text: 'One platform for every category of training your organization needs.' },
  { title: 'Employee learning', text: 'Courses your people can complete online, at their own pace, with progress they can return to.' },
  { title: 'Ready for future programs', text: 'Designed to support new training programs as they launch — inside the same platform, not a new one.' },
];

export default function HomePage() {
  return (
    <>
      <section className="aa-hero" aria-labelledby="home-title">
        <div className="aa-container">
          <div className="aa-hero__grid">
            <div>
              <p className="aa-eyebrow">{BRAND.name}</p>
              <h1 id="home-title" className="aa-display">Training built for the real world.</h1>
              <p className="aa-lede">One platform for driver, security, workplace, professional and compliance education — organized so you only see the training that applies to you.</p>
              <div className="aa-btn-row aa-hero__actions">
                <Button to="/training" variant="accent" iconAfter="arrow-right">Explore Training</Button>
                <Button to="/my-learning" variant="secondary">My Learning</Button>
              </div>
            </div>
            <PlatformDiagram />
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--bordered" aria-labelledby="explore-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Explore Training" id="explore-title" title="Choose your training world." lede="Each world is a dedicated environment with its own courses, resources and guidance — all inside one platform." />
            <Button to="/training" variant="ghost" iconAfter="arrow-right">View all training</Button>
          </div>
          <div className="aa-world-grid">
            {TRAINING_WORLDS.map((w, i) => <TrainingWorldCard key={w.id} world={w} featured={i === 0} />)}
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="need-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Find your training" id="need-title" title="Not sure where to start?" lede="Tell us what you need to accomplish and we’ll point you to the right training world." />
          </div>
          <div className="aa-need-grid">
            {NEEDS.map(n => <NeedCard key={n.id} need={n} />)}
          </div>
          <p className="aa-small" style={{ marginTop: 20 }}>Requirements vary by situation and jurisdiction. Every training world explains what its courses cover before you enroll.</p>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="featured-title">
        <div className="aa-container">
          <div className="aa-split aa-split--narrow-left">
            <SectionHeading eyebrow="Featured training" id="featured-title" title={BDI_COURSE.name} lede="The first course developed for the platform — available now as a management demo inside Driver & Traffic Training." />
            <CourseCard course={BDI_COURSE} showWorld spotlight />
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--dark aa-on-dark" aria-labelledby="org-title">
        <div className="aa-container">
          <div className="aa-split aa-split--wide-left aa-split--top">
            <div>
              <SectionHeading eyebrow="For Organizations" id="org-title" title="One training destination for your team." lede={`${BRAND.name} is designed to support employee learning across every training world — from required workplace and compliance training to professional development — with one place to enroll and follow progress.`} />
              <div className="aa-btn-row" style={{ marginTop: 28 }}>
                <Button to="/for-organizations" variant="on-dark" iconAfter="arrow-right">For Organizations</Button>
              </div>
            </div>
            <ul className="aa-points aa-points--3" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: 20 }}>
              {ORG_POINTS.map(p => (
                <li key={p.title} className="aa-point">
                  <h3 className="aa-point__title">{p.title}</h3>
                  <p className="aa-point__text">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="why-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow={`Why ${BRAND.name}`} id="why-title" title="One platform. Every kind of training." />
          </div>
          <ul className="aa-points">
            {WHY.map(p => (
              <li key={p.title} className="aa-point">
                <h3 className="aa-point__title">{p.title}</h3>
                <p className="aa-point__text">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand tone="light" title="Find the training you need." text="Start with a training world, or return to a course you’ve already begun." primary={{ label: 'Explore Training', to: '/training' }} secondary={{ label: 'My Learning', to: '/my-learning' }} />
    </>
  );
}
