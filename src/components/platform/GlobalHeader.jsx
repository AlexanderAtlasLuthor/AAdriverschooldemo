import { useEffect, useRef, useState } from 'react';
import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';
import TrainingSwitcher from './TrainingSwitcher.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import { BRAND, ASSETS } from '../../data/company.js';
import { isActivePath } from '../../router/navigation.js';
import { PRIMARY_NAV } from './navItems.js';

export default function GlobalHeader({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => { setMenuOpen(false); }, [path]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    if (firstItemRef.current) firstItemRef.current.focus();
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); if (menuButtonRef.current) menuButtonRef.current.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const learningActive = isActivePath(path, '/my-learning');
  return (
    <header className="aa-header">
      <div className="aa-header__inner">
        <Link to="/" className="aa-brand" aria-label={`${BRAND.name} — home`}>
          <img className="aa-brand__logo" src={ASSETS.logo} alt="" />
          <span className="aa-brand__text">
            <span className="aa-brand__name">{BRAND.name}</span>
            <span className="aa-brand__tag">{BRAND.tagline}</span>
          </span>
        </Link>
        <nav className="aa-nav" aria-label="Primary">
          <TrainingSwitcher path={path} />
          {PRIMARY_NAV.map(item => {
            const active = isActivePath(path, item.to);
            return (
              <Link key={item.to} to={item.to} className={'aa-nav__link' + (active ? ' is-active' : '')} aria-current={active ? 'page' : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="aa-header__actions">
          <Link to="/my-learning" className="aa-btn aa-btn--primary aa-btn--sm aa-header__learning" aria-current={learningActive ? 'page' : undefined}>
            <Icon name="user" size={16} />
            <span>My Learning</span>
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="aa-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="aa-mobile-nav"
            onClick={() => setMenuOpen(o => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
            <span className="aa-visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      <MobileNavigation id="aa-mobile-nav" open={menuOpen} path={path} onNavigate={() => setMenuOpen(false)} firstItemRef={firstItemRef} />
    </header>
  );
}
