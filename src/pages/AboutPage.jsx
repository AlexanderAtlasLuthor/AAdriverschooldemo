import SectionHeading from '../components/platform/SectionHeading.jsx';
import PlatformDiagram from '../components/platform/PlatformDiagram.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import Icon from '../components/platform/Icon.jsx';
import { BRAND, CONTACT } from '../data/company.js';

const MODEL = [
  { title: 'One platform', text: `${BRAND.name} is the umbrella brand. It owns the global experience: navigation, account, My Learning, help and the shared course infrastructure.` },
  { title: 'Training worlds', text: 'Training is organized into dedicated worlds — Driver & Traffic, Security, Workplace & Safety, Professional Development and Compliance. Each has its own focus, resources and courses.' },
  { title: 'Individual courses', text: 'Every course lives inside its training world with a dedicated course page that explains who it is for, what to expect and how completion works.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="aa-page-head" aria-labelledby="about-title">
        <div className="aa-container">
          <SectionHeading as="h1" titleClassName="aa-h1" eyebrow="About" id="about-title" title={BRAND.name} lede={`${BRAND.descriptor}, created to provide structured online training experiences across multiple industries and learning needs.`} />
        </div>
      </section>

      <section className="aa-section" aria-labelledby="model-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <div>
              <SectionHeading eyebrow="How the platform is organized" id="model-title" title="One platform. Multiple training worlds. Individual courses." />
              <ul className="aa-points" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: 20, marginTop: 32 }}>
                {MODEL.map(m => (
                  <li key={m.title} className="aa-point">
                    <h3 className="aa-point__title">{m.title}</h3>
                    <p className="aa-point__text">{m.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <PlatformDiagram />
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="quality-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Our standard" id="quality-title" title={BRAND.tagline} />
            <p className="aa-body" style={{ paddingTop: 6 }}>{BRAND.name} carries the A&A commitment to quality into online learning: clear course structure, honest information about what each course covers, and one learner account that grows with you as new training programs launch.</p>
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="corporate-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Corporate" id="corporate-title" title={BRAND.parent} lede={`${BRAND.name} is a training initiative of ${BRAND.parent}.`} />
            <address className="aa-body" style={{ fontStyle: 'normal', display: 'grid', gap: 10, paddingTop: 6 }}>
              <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><Icon name="map-pin" size={20} />{CONTACT.addressLines[0]}, {CONTACT.addressLines[1]}</span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="phone" size={20} /><a className="aa-inline-link" href={CONTACT.phoneHref}>{CONTACT.phone}</a></span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="globe" size={20} /><a className="aa-inline-link" href={CONTACT.websiteHref} target="_blank" rel="noreferrer">{CONTACT.website}</a></span>
            </address>
          </div>
        </div>
      </section>

      <CtaBand tone="light" title="Explore the platform." primary={{ label: 'Explore Training', to: '/training' }} secondary={{ label: 'For Organizations', to: '/for-organizations' }} />
    </>
  );
}
