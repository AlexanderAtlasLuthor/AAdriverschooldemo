import PortalSubnav from '../components/platform/PortalSubnav.jsx';
import PortalHero from '../components/platform/PortalHero.jsx';
import SectionHeading from '../components/platform/SectionHeading.jsx';
import Button from '../components/platform/Button.jsx';
import AreaCard from '../components/platform/AreaCard.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import Link from '../router/Link.jsx';
import Icon from '../components/platform/Icon.jsx';
import { getWorld, worldStyle } from '../data/trainingCatalog.js';
import { BRAND } from '../data/company.js';

const SUBNAV = [
  { label: 'Overview', href: '#overview' },
  { label: 'Training Areas', href: '#areas' },
  { label: 'For Employers', href: '#employers' },
  { label: 'Resources', href: '#resources' },
  { label: 'Help', to: '/help' },
];

const EMPLOYER_POINTS = [
  { title: 'Consistent onboarding', text: 'Designed to support the same foundational training for every new officer, delivered the same way each time.' },
  { title: 'Supervisor tracks', text: 'Planned development paths for shift leads and supervisors, so leadership on site is built deliberately.' },
  { title: 'Documented completion', text: 'Completion records that live in each learner’s shared My Learning account — planned for the organization view as well.' },
];

export default function SecurityTrainingPage() {
  const world = getWorld('security');
  return (
    <>
      <PortalSubnav world={world} items={SUBNAV} />
      <PortalHero
        world={world}
        tone="dark"
        title={world.name}
        lede={world.purpose}
        pill="Portal preview · courses launching later"
        actions={(
          <>
            <Button href="#employers" variant="accent" iconAfter="arrow-right">For Employers</Button>
            <Button to="/training" variant="on-dark">Explore all training</Button>
          </>
        )}
        visual={(
          <div className="aa-portal-hero__tiles" aria-label="Security training areas">
            {world.areas.map((a, i) => <AreaCard key={a.name} index={i} area={{ name: a.name }} onDark tag="Concept" />)}
          </div>
        )}
      />

      <section className="aa-section" aria-labelledby="areas" style={worldStyle(world)}>
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Training Areas" id="areas" title="How Security Training is organized" lede="These are the areas the Security Training world is designed around. They describe planned training concepts — not courses currently offered for enrollment." />
          </div>
          <div className="aa-grid aa-grid--2">
            {world.areas.map((a, i) => <AreaCard key={a.name} index={i} area={a} />)}
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--deep aa-on-dark" aria-labelledby="employers" style={worldStyle(world)}>
        <div className="aa-container">
          <div className="aa-split aa-split--wide-left aa-split--top">
            <div>
              <SectionHeading eyebrow="For Employers" id="employers" title="Built with employers in mind." lede="Security Training is designed to support organizations that need consistent, documented training for their teams — with enrollment and completion tracked in one platform." />
              <div className="aa-btn-row" style={{ marginTop: 28 }}>
                <Button to="/help" variant="accent" iconAfter="arrow-right">Talk to A&A about security training</Button>
                <Button to="/for-organizations" variant="on-dark">For Organizations</Button>
              </div>
            </div>
            <ul className="aa-points" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: 20 }}>
              {EMPLOYER_POINTS.map(p => (
                <li key={p.title} className="aa-point">
                  <h3 className="aa-point__title">{p.title}</h3>
                  <p className="aa-point__text">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="resources">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Resources" id="resources" title="Security training resources" lede="Resources for security professionals and employers will be published here as courses launch. Until then, these platform pages are the best place to start." />
            <ul className="aa-link-list">
              <li><Link to="/for-organizations">Training for organizations <Icon name="arrow-right" size={18} /></Link></li>
              <li><Link to="/help">Help & Support <Icon name="arrow-right" size={18} /></Link></li>
              <li><Link to="/about">About {BRAND.name} <Icon name="arrow-right" size={18} /></Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="platform-note">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="One platform" id="platform-note" title="A dedicated world, inside the same platform." />
            <p className="aa-body" style={{ paddingTop: 6 }}>Security Training shares the {BRAND.name} account, My Learning and support experience with every other training world. Learners see only security training while they are here — and all of their completed training in one place when they leave.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Planning security training for your team?" text="Tell us about your organization and we’ll follow up as Security Training courses launch." primary={{ label: 'Contact A&A', to: '/help' }} secondary={{ label: 'Explore other training', to: '/training' }} />
    </>
  );
}
