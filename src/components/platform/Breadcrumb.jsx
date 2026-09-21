import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';

// Hierarchy trail: A&A Online Training → training world → course.
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="aa-breadcrumb">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              {last || !item.to ? <span aria-current={last ? 'page' : undefined}>{item.label}</span> : <Link to={item.to}>{item.label}</Link>}
              {!last ? <Icon name="chevron-right" size={14} className="aa-breadcrumb__sep" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
