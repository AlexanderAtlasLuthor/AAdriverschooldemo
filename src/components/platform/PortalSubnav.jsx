import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';
import { worldStyle } from '../../data/trainingCatalog.js';
import { BRAND } from '../../data/company.js';

// Local portal navigation: world identity on the left, section links on the right.
// Items are anchors within the portal page (`href`) or platform routes (`to`).
export default function PortalSubnav({ world, items, activeHref }) {
  return (
    <div className="aa-subnav" style={worldStyle(world)}>
      <div className="aa-subnav__inner">
        <Link to={world.path} className="aa-subnav__identity" aria-label={`${world.name} overview`}>
          <span className="aa-subnav__icon"><Icon name={world.icon} size={18} /></span>
          <span>
            <span className="aa-subnav__crumb">{BRAND.name}</span>
            <span className="aa-subnav__name">{world.name}</span>
          </span>
        </Link>
        <nav className="aa-subnav__links" aria-label={`${world.name} sections`}>
          {items.map(item => item.to ? (
            <Link key={item.label} to={item.to} className="aa-subnav__link">{item.label}</Link>
          ) : (
            <a key={item.label} href={item.href} className={'aa-subnav__link' + (activeHref === item.href ? ' is-active' : '')}>{item.label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}
