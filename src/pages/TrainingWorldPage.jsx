import PortalSubnav from '../components/platform/PortalSubnav.jsx';
import PortalHero from '../components/platform/PortalHero.jsx';
import SectionHeading from '../components/platform/SectionHeading.jsx';
import Button from '../components/platform/Button.jsx';
import AreaCard from '../components/platform/AreaCard.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Link from '../router/Link.jsx';
import Icon from '../components/platform/Icon.jsx';
import { getWorld, worldStyle } from '../data/trainingCatalog.js';
import { BRAND } from '../data/company.js';

const SUBNAV = [
  { label: 'Overview', href: '#overview' },
  { label: 'Training Areas', href: '#areas' },
  { label: 'For Organizations', to: '/for-organizations' },
  { label: 'Resources', href: '#resources' },
  { label: 'Help', to: '/help' },
];

const GROWTH = [
  { title: 'Courses stay in their world', text: 'New courses are added inside this training world only. Other worlds stay separate, so learners are never shown unrelated training.' },
  { title: 'One shared account', text: 'Completed training appears in the learner’s My Learning account alongside courses from every other world.' },
  { title: 'Ready for organizations', text: 'Planned to support organizations that direct their teams here as programs launch.' },
];

// Lighter portal landing used by Workplace & Safety, Professional Development and Compliance Training.
export default function TrainingWorldPage({ worldId }) {
  const world = getWorld(worldId);
  if (!world) return <NotFoundPage />;
  return (
    <>
      <PortalSubnav world={world} items={SUBNAV} />
      <PortalHero
        world={world}
        tone="light"
        title={world.name}
        lede={world.purpose}
        pill="Portal preview · courses launching later"
        actions={(
          <>
            <Button to="/for-organizations" variant="primary" iconAfter="arrow-right">For Organizations</Button>
            <Button to="/training" variant="secondary">Explore all training</Button>
          </>
        )}
        visual={(
          <div className="aa-index">
            <p className="aa-index__title">Planned training areas</p>
            {world.areas.map((a, i) => (
              <div key={a.name} className="aa-index__item">
                <span className="aa-index__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="aa-index__name">{a.name}</span>
              </div>
            ))}
            <p className="aa-index__note">Concepts this world is designed around — not courses currently open for enrollment.</p>
          </div>
        )}
      />

      <section className="aa-section" aria-labelledby="areas" style={worldStyle(world)}>
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Training Areas" id="areas" title={`What ${world.name} will cover`} lede="Each area below is a training concept the world is being built around. Course details will be published here as they are developed." />
          </div>
          <div className={`aa-grid ${world.areas.length === 3 ? 'aa-grid--3' : 'aa-grid--2'}`}>
            {world.areas.map((a, i) => <AreaCard key={a.name} index={i} area={a} />)}
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="future">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Looking ahead" id="future" title="How this world will grow" lede={world.future} />
            <ul className="aa-points" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: 20 }}>
              {GROWTH.map(g => (
                <li key={g.title} className="aa-point">
                  <h3 className="aa-point__title">{g.title}</h3>
                  <p className="aa-point__text">{g.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="resources">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Resources" id="resources" title={`${world.shortName} resources`} lede="Resources for this training world will be published as courses launch. These platform pages are the best place to start today." />
            <ul className="aa-link-list">
              <li><Link to="/for-organizations">Training for organizations <Icon name="arrow-right" size={18} /></Link></li>
              <li><Link to="/help">Help & Support <Icon name="arrow-right" size={18} /></Link></li>
              <li><Link to="/about">About {BRAND.name} <Icon name="arrow-right" size={18} /></Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title={`Interested in ${world.name} for your organization?`} text="Tell us what your team needs and we’ll follow up as courses in this world launch." primary={{ label: 'For Organizations', to: '/for-organizations' }} secondary={{ label: 'Contact A&A', to: '/help' }} />
    </>
  );
}
