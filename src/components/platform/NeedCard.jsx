import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';
import { needTarget } from '../../data/trainingCatalog.js';

// "I need to…" card. Routes to the training world that covers the need.
export default function NeedCard({ need }) {
  const target = needTarget(need);
  return (
    <Link to={target.path} className="aa-need-card">
      <span className="aa-need-card__label">{need.label}</span>
      <span className="aa-need-card__target">{target.label} <Icon name="arrow-right" size={14} /></span>
    </Link>
  );
}
