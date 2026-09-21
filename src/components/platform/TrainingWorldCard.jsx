import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';
import StatusPill from './StatusPill.jsx';
import { worldStyle, coursesForWorld, COURSE_STATUS } from '../../data/trainingCatalog.js';

// One training world on the homepage / explore grid. The whole card is the link.
export default function TrainingWorldCard({ world, featured = false }) {
  const courses = coursesForWorld(world.id);
  const demo = courses.filter(c => c.status === COURSE_STATUS.DEMO);
  const inDev = courses.filter(c => c.status === COURSE_STATUS.DEVELOPMENT);
  const body = (
    <>
      <span className="aa-world-card__icon"><Icon name={world.icon} size={26} /></span>
      <h3 className="aa-world-card__title">{world.name}</h3>
      <p className="aa-world-card__text">{world.description}</p>
      <div className="aa-world-card__foot">
        <StatusPill tone={world.status}>{world.statusLabel}</StatusPill>
        <span className="aa-world-card__cta">Explore <Icon name="arrow-right" size={16} /></span>
      </div>
    </>
  );
  if (featured && demo.length) {
    return (
      <Link to={world.path} className="aa-world-card aa-world-card--featured" style={worldStyle(world)} aria-label={`Explore ${world.name}`}>
        <div className="aa-world-card__main">{body}</div>
        <div className="aa-world-card__aside">
          <span className="aa-world-card__aside-label">Inside this world</span>
          {demo.map(c => <span key={c.id} className="aa-world-card__aside-course">{c.name}<br /><StatusPill tone="demo">{c.statusLabel}</StatusPill></span>)}
          {inDev.length ? <span className="aa-world-card__aside-more">{inDev.map(c => c.abbreviation).join(' and ')} in development</span> : null}
        </div>
      </Link>
    );
  }
  return (
    <Link to={world.path} className="aa-world-card" style={worldStyle(world)} aria-label={`Explore ${world.name}`}>
      {body}
    </Link>
  );
}
