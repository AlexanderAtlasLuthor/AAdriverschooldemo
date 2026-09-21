import Link from '../../router/Link.jsx';
import { BRAND, CONTACT } from '../../data/company.js';
import { TRAINING_WORLDS } from '../../data/trainingCatalog.js';
import { LEGAL_LINKS } from '../../data/legalContent.js';

const PLATFORM_LINKS = [
  { label: 'Explore Training', to: '/training' },
  { label: 'For Organizations', to: '/for-organizations' },
  { label: 'About', to: '/about' },
  { label: 'Help', to: '/help' },
  { label: 'My Learning', to: '/my-learning' },
];

export default function GlobalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="aa-footer">
      <div className="aa-container">
        <div className="aa-footer__grid">
          <div>
            <p className="aa-footer__brand-name">{BRAND.name}</p>
            <p className="aa-footer__brand-tag">{BRAND.tagline}</p>
            <p className="aa-footer__brand-text">{BRAND.descriptor}. One platform for driver, security, workplace, professional and compliance training.</p>
          </div>
          <nav aria-label="Platform">
            <h2 className="aa-footer__title">{BRAND.name}</h2>
            <ul className="aa-footer__list">
              {PLATFORM_LINKS.map(l => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Training worlds">
            <h2 className="aa-footer__title">Training</h2>
            <ul className="aa-footer__list">
              {TRAINING_WORLDS.map(w => <li key={w.id}><Link to={w.path}>{w.shortName}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="aa-footer__title">Corporate</h2>
            <address className="aa-footer__address">
              {BRAND.parent} · Corporate Headquarters<br />
              {CONTACT.addressLines[0]}<br />
              {CONTACT.addressLines[1]}<br />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a><br />
              <a href={CONTACT.websiteHref} target="_blank" rel="noreferrer">{CONTACT.website}</a>
            </address>
          </div>
        </div>
        <div className="aa-footer__bottom">
          <span>© {year} {BRAND.parent}. {BRAND.name} is a training initiative of {BRAND.parent}.</span>
          <ul className="aa-footer__legal" aria-label="Legal">
            {LEGAL_LINKS.map(l => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
