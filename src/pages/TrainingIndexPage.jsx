import Link from '../router/Link.jsx';
import Icon from '../components/platform/Icon.jsx';
import Button from '../components/platform/Button.jsx';
import StatusPill from '../components/platform/StatusPill.jsx';
import SectionHeading from '../components/platform/SectionHeading.jsx';
import NeedCard from '../components/platform/NeedCard.jsx';
import { TRAINING_WORLDS, NEEDS, coursesForWorld, worldStyle, COURSE_STATUS } from '../data/trainingCatalog.js';
import { BRAND } from '../data/company.js';

function insideLine(world) {
  const courses = coursesForWorld(world.id);
  if (courses.length) {
    const demo = courses.filter(c => c.status === COURSE_STATUS.DEMO).map(c => c.name);
    const dev = courses.filter(c => c.status === COURSE_STATUS.DEVELOPMENT).map(c => c.abbreviation);
    return <><strong>{demo.join(', ')}</strong>{demo.length ? ' · management demo available' : ''}{dev.length ? ` · ${dev.join(' and ')} in development` : ''}</>;
  }
  return <><strong>Training areas:</strong> {world.areas.map(a => a.name).join(' · ')}</>;
}

export default function TrainingIndexPage() {
  return (
    <>
      <section className="aa-page-head" aria-labelledby="training-title">
        <div className="aa-container">
          <SectionHeading as="h1" titleClassName="aa-h1" eyebrow="Explore Training" id="training-title" title="Training worlds" lede={`${BRAND.name} is organized into training worlds. Choose one to enter a dedicated environment focused only on that kind of training.`} />
        </div>
      </section>

      <section className="aa-section" aria-label="All training worlds">
        <div className="aa-container">
          {TRAINING_WORLDS.map(w => (
            <article key={w.id} className="aa-world-row" style={worldStyle(w)} aria-labelledby={`world-${w.id}`}>
              <span className="aa-world-row__icon"><Icon name={w.icon} size={30} /></span>
              <div>
                <div className="aa-world-row__head">
                  <h2 id={`world-${w.id}`} className="aa-h3">{w.name}</h2>
                  <StatusPill tone={w.status}>{w.statusLabel}</StatusPill>
                </div>
                <p className="aa-body">{w.description}</p>
                <p className="aa-world-row__inside">{insideLine(w)}</p>
              </div>
              <div className="aa-world-row__action">
                <Button to={w.path} variant="secondary" size="sm" iconAfter="arrow-right">Enter</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="aa-section aa-section--tint" aria-labelledby="need-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="Or start with what you need" id="need-title" title="Tell us what you need to accomplish." />
          </div>
          <div className="aa-need-grid">
            {NEEDS.map(n => <NeedCard key={n.id} need={n} />)}
          </div>
          <p className="aa-small" style={{ marginTop: 20 }}>Not finding it? <Link to="/help" className="aa-inline-link">Contact A&A</Link> and we’ll help you find the right training.</p>
        </div>
      </section>
    </>
  );
}
