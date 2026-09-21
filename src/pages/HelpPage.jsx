import SectionHeading from '../components/platform/SectionHeading.jsx';
import Icon from '../components/platform/Icon.jsx';
import Link from '../router/Link.jsx';
import { BRAND, CONTACT, COURSE_SUPPORT_NOTE } from '../data/company.js';
import { LEGAL_LINKS } from '../data/legalContent.js';

const FAQ = [
  { q: 'How do I return to a course I started?', a: <>Open <Link to="/my-learning" className="aa-inline-link">My Learning</Link>. Your active courses and progress are there.</> },
  { q: 'Do I need a separate account for each training world?', a: <>No. {BRAND.name} is built around one learner account — My Learning is shared across every training world.</> },
  { q: 'Where do I find course details?', a: <>Each training world has a Courses section with a dedicated page for every course. Start from <Link to="/training" className="aa-inline-link">Explore Training</Link>.</> },
  { q: 'I need help with a course I’m taking.', a: <>{COURSE_SUPPORT_NOTE} You can also call {BRAND.parent} at <a className="aa-inline-link" href={CONTACT.phoneHref}>{CONTACT.phone}</a>.</> },
  { q: 'Is the platform accessible?', a: <>Yes — see our <Link to="/accessibility" className="aa-inline-link">Accessibility</Link> page for what is in place today and what is planned.</> },
];

export default function HelpPage() {
  return (
    <>
      <section className="aa-page-head" aria-labelledby="help-title">
        <div className="aa-container">
          <SectionHeading as="h1" titleClassName="aa-h1" eyebrow="Help" id="help-title" title="Help & Support" lede="Questions about the platform, a training world or a course? Start here." />
        </div>
      </section>

      <section className="aa-section" aria-labelledby="contact-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <div>
              <SectionHeading eyebrow="Contact" id="contact-title" title="Reach A&A" lede={`${BRAND.parent} corporate headquarters can help with enrollment, course access and general questions about ${BRAND.name}.`} />
              <p className="aa-small" style={{ marginTop: 18 }}>{COURSE_SUPPORT_NOTE}</p>
            </div>
            <div className="aa-contact-card">
              <div className="aa-contact-card__row">
                <span className="aa-contact-card__row-icon"><Icon name="phone" size={18} /></span>
                <span><span className="aa-contact-card__label">Phone</span><a className="aa-contact-card__value" href={CONTACT.phoneHref}>{CONTACT.phone}</a></span>
              </div>
              <div className="aa-contact-card__row">
                <span className="aa-contact-card__row-icon"><Icon name="fax" size={18} /></span>
                <span><span className="aa-contact-card__label">Fax</span><span className="aa-contact-card__value">{CONTACT.fax}</span></span>
              </div>
              <div className="aa-contact-card__row">
                <span className="aa-contact-card__row-icon"><Icon name="map-pin" size={18} /></span>
                <span><span className="aa-contact-card__label">Corporate headquarters</span><span className="aa-contact-card__value">{CONTACT.addressLines[0]}<br />{CONTACT.addressLines[1]}</span></span>
              </div>
              <div className="aa-contact-card__row">
                <span className="aa-contact-card__row-icon"><Icon name="globe" size={18} /></span>
                <span><span className="aa-contact-card__label">Web</span><a className="aa-contact-card__value" href={CONTACT.websiteHref} target="_blank" rel="noreferrer">{CONTACT.website}</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="faq-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Common questions" id="faq-title" title="Quick answers" />
            <div className="aa-faq">
              {FAQ.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="legal-title">
        <div className="aa-container">
          <div className="aa-split aa-split--top">
            <SectionHeading eyebrow="Policies" id="legal-title" title="Terms, privacy and accessibility" />
            <ul className="aa-link-list">
              {LEGAL_LINKS.map(l => <li key={l.to}><Link to={l.to}>{l.label} <Icon name="arrow-right" size={18} /></Link></li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
