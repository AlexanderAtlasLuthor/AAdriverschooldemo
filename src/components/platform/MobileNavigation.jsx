import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';
import { TRAINING_WORLDS, worldStyle } from '../../data/trainingCatalog.js';
import { isActivePath } from '../../router/navigation.js';
import { PRIMARY_NAV } from './navItems.js';

// Full-width panel under the header on small screens. Rendered with `hidden` when closed so
// the menu button's aria-controls target always exists.
export default function MobileNavigation({ id, open, path, onNavigate, firstItemRef }) {
  return (
    <nav id={id} className="aa-mobile-nav" aria-label="Mobile" hidden={!open}>
      <div className="aa-mobile-nav__title">Explore Training</div>
      <ul className="aa-mobile-nav__list">
        {TRAINING_WORLDS.map((w, i) => (
          <li key={w.id}>
            <Link ref={i === 0 ? firstItemRef : undefined} to={w.path} onClick={onNavigate} style={worldStyle(w)} className={'aa-mobile-nav__item' + (isActivePath(path, w.path) ? ' is-active' : '')} aria-current={isActivePath(path, w.path) ? 'page' : undefined}>
              <span className="aa-mobile-nav__icon"><Icon name={w.icon} size={18} /></span>
              <span>{w.name}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link to="/training" onClick={onNavigate} className={'aa-mobile-nav__item' + (path === '/training' ? ' is-active' : '')}>
            <span className="aa-mobile-nav__icon"><Icon name="layers" size={18} /></span>
            <span>View All Training</span>
          </Link>
        </li>
      </ul>
      <hr className="aa-mobile-nav__divider" />
      <ul className="aa-mobile-nav__list">
        {PRIMARY_NAV.map(item => (
          <li key={item.to}>
            <Link to={item.to} onClick={onNavigate} className={'aa-mobile-nav__item' + (isActivePath(path, item.to) ? ' is-active' : '')} aria-current={isActivePath(path, item.to) ? 'page' : undefined}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="aa-mobile-nav__cta">
        <Link to="/my-learning" onClick={onNavigate} className="aa-btn aa-btn--primary aa-btn--block">
          <Icon name="user" size={18} />
          <span>My Learning</span>
        </Link>
      </div>
    </nav>
  );
}
