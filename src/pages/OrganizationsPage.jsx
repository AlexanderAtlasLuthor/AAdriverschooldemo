import SectionHeading from '../components/platform/SectionHeading.jsx';
import Button from '../components/platform/Button.jsx';
import Icon from '../components/platform/Icon.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import Link from '../router/Link.jsx';
import { TRAINING_WORLDS, worldStyle } from '../data/trainingCatalog.js';
import { BRAND } from '../data/company.js';

const PILLARS = [
  { title: 'One training destination', text: 'A single platform where your people enroll, learn and keep their completed training — whatever category it belongs to.' },
  { title: 'Multiple training categories', text: 'Driver, security, workplace, professional and compliance training, each in its own dedicated world so learners are never shown unrelated content.' },
  { title: 'Future scalable programs', text: 'Designed so new programs — including organization-specific ones — join the same platform as they launch, rather than a new system each time.' },
];

const USE_CASES = [
  { title: 'Employee onboarding', text: 'Designed to support consistent, structured training for people joining your organization.' },
  { title: 'Required and recurring training', text: 'Planned to support workplace-safety and compliance training that must be completed and repeated on a schedule.' },
  { title: 'Team development', text: 'Professional Development courses your people can take individually or as part of a team program.' },
];

export default function OrganizationsPage() {
  return (
    <>
      <section className="aa-page-head" aria-labelledby="org-title">
        <div className="aa-container">
          <div className="aa-split aa-split--wide-left">
            <div>
              <SectionHeading as="h1" titleClassName="aa-h1" eyebrow="For Organizations" id="org-title" title="Training for teams and organizations." lede="One training destination for your people — across driver, security, workplace, professional and compliance training." />
              <div className="aa-btn-row" style={{ marginTop: 28 }}>
                <Button to="/help" variant="primary" iconAfter="arrow-right">Contact A&A</Button>
                <Button to="/training" variant="secondary">Explore Training</Button>
              </div>
            </div>
            <ul className="aa-world-strip" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }} aria-label="Training categories">
              {TRAINING_WORLDS.map(w => (
                <li key={w.id}>
                  <Link to={w.path} className="aa-world-strip__item" style={worldStyle(w)}>
                    <span className="aa-world-strip__icon"><Icon name={w.icon} size={18} /></span>
                    <span>{w.shortName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="pillars-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="One platform" id="pillars-title" title="Everything your organization’s training needs, in one place." />
          </div>
          <ul className="aa-points aa-points--3">
            {PILLARS.map(p => (
              <li key={p.title} className="aa-point">
                <h3 className="aa-point__title">{p.title}</h3>
                <p className="aa-point__text">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="usecases-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Use cases" id="usecases-title" title="Built around how organizations train." />
          </div>
          <div className="aa-grid aa-grid--3">
            {USE_CASES.map(u => (
              <article key={u.title} className="aa-resource-card">
                <h3 className="aa-resource-card__title">{u.title}</h3>
                <p className="aa-resource-card__text">{u.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="planned-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="What’s planned" id="planned-title" title="Organization tools are on the roadmap." />
            <div className="aa-body" style={{ display: 'grid', gap: 14, paddingTop: 6 }}>
              <p className="aa-body">Tools for organizations — designed to support assigning training to employees and following their completion — are planned for a later phase and are not part of the current demo.</p>
              <p className="aa-body">Organization-specific programs are planned within Compliance Training and Workplace & Safety. Today, {BRAND.name} focuses on the learner experience: clear training worlds, dedicated course pages and one shared My Learning account.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Talk with A&A about training for your organization." text="Tell us about your team and the training you need. We’ll follow up as programs in each training world launch." primary={{ label: 'Contact A&A', to: '/help' }} secondary={{ label: 'Explore Training', to: '/training' }} />
    </>
  );
}
