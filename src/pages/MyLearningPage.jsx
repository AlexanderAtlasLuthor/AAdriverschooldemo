import { useEffect, useState } from 'react';
import Link from '../router/Link.jsx';
import Button from '../components/platform/Button.jsx';
import Icon from '../components/platform/Icon.jsx';
import SectionHeading from '../components/platform/SectionHeading.jsx';
import StatusPill from '../components/platform/StatusPill.jsx';
import { readLearnerCourses, clearLearnerState } from '../data/learnerState.js';
import { TRAINING_WORLDS, getCourse, getWorld, worldStyle } from '../data/trainingCatalog.js';
import { isReviewMode } from '../utils/reviewMode.js';
import { BRAND } from '../data/company.js';

// Shared learner dashboard. Reads the BDI prototype's saved state; structured so courses from
// any training world can appear here.
export default function MyLearningPage() {
  const [learner, setLearner] = useState(() => readLearnerCourses());
  useEffect(() => { setLearner(readLearnerCourses()); }, []);
  const review = isReviewMode();

  const active = learner.courses.filter(c => c.status !== 'completed');
  const completed = learner.courses.filter(c => c.status === 'completed');
  const worldsWithCourses = new Set(learner.courses.map(c => c.worldId));

  const reset = () => { clearLearnerState(); setLearner(readLearnerCourses()); };

  return (
    <>
      <section className="aa-page-head aa-page-head--tint" aria-labelledby="learning-title">
        <div className="aa-container">
          <div className="aa-section__head" style={{ marginBottom: 0 }}>
            <SectionHeading as="h1" titleClassName="aa-h1" eyebrow={learner.firstName ? `Welcome back, ${learner.firstName}` : BRAND.name} id="learning-title" title="My Learning" lede="Your courses from every training world, in one place." />
            {review ? <Button variant="ghost" size="sm" onClick={reset}>Reset demo progress</Button> : null}
          </div>
        </div>
      </section>

      <section className="aa-section" aria-labelledby="continue-title">
        <div className="aa-container">
          <h2 id="continue-title" className="aa-h3" style={{ marginBottom: 20 }}>Continue learning</h2>
          {active.length ? (
            <div className="aa-grid" style={{ gap: 16 }}>
              {active.map(c => <LearningCard key={c.courseId} entry={c} />)}
            </div>
          ) : (
            <div className="aa-empty">
              <span className="aa-empty__icon"><Icon name="book" size={26} /></span>
              <h3 className="aa-h4">No active courses yet.</h3>
              <p className="aa-small" style={{ maxWidth: 440 }}>When you enroll in a course from any training world, it appears here with your progress and a way to continue.</p>
              <Button to="/training" variant="primary" iconAfter="arrow-right">Explore Training</Button>
            </div>
          )}
        </div>
      </section>

      <section className="aa-section aa-section--tint aa-section--bordered" aria-labelledby="completed-title">
        <div className="aa-container">
          <h2 id="completed-title" className="aa-h3" style={{ marginBottom: 20 }}>Completed training</h2>
          {completed.length ? (
            <div className="aa-grid" style={{ gap: 16 }}>
              {completed.map(c => <LearningCard key={c.courseId} entry={c} />)}
            </div>
          ) : (
            <p className="aa-small">Completed courses from any training world will appear here, along with their completion dates.</p>
          )}
        </div>
      </section>

      <section className="aa-section" aria-labelledby="worlds-title">
        <div className="aa-container">
          <div className="aa-section__head">
            <SectionHeading eyebrow="One account" id="worlds-title" title="Every training world, one learner account." lede="Courses you take in any world share this dashboard. You never need a separate account for driver, security, workplace, professional or compliance training." />
          </div>
          <ul className="aa-world-strip">
            {TRAINING_WORLDS.map(w => {
              const has = worldsWithCourses.has(w.id);
              return (
                <li key={w.id}>
                  <Link to={w.path} className={'aa-world-strip__item' + (has ? ' is-active' : '')} style={worldStyle(w)}>
                    <span className="aa-world-strip__icon"><Icon name={w.icon} size={18} /></span>
                    <span>
                      {w.shortName}
                      <span className="aa-world-strip__status">{has ? 'Course in your account' : 'No courses yet'}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="aa-small" style={{ marginTop: 20 }}>Demo note: progress is stored in this browser. Sign-in for returning students is not part of this demo.</p>
        </div>
      </section>
    </>
  );
}

function LearningCard({ entry }) {
  const course = getCourse(entry.courseId);
  const world = getWorld(entry.worldId);
  if (!course || !world) return null;
  const done = entry.status === 'completed';
  const progressText = entry.doneMinutes != null ? `${entry.doneMinutes} of ${entry.totalMinutes} minutes` : `${entry.modulesDone} of ${entry.modulesTotal} modules`;
  return (
    <article className="aa-learning-card" style={worldStyle(world)} aria-labelledby={`learning-${entry.courseId}`}>
      <div>
        <p className="aa-learning-card__world"><Icon name={world.icon} size={16} />{world.name}</p>
        <h3 id={`learning-${entry.courseId}`} className="aa-learning-card__title">{course.name}</h3>
        <p className="aa-learning-card__status">
          <StatusPill tone={done ? 'available' : 'preview'}>{entry.statusLabel}</StatusPill>
          {done && entry.completionDate ? <span style={{ marginLeft: 10 }}>Completed {entry.completionDate}</span> : null}
        </p>
        <div className="aa-learning-card__progress" aria-hidden={done ? 'true' : undefined}>
          <div className="aa-learning-card__progress-text"><span>{done ? 'Course complete' : `${entry.pct}% complete`}</span><span>{progressText}</span></div>
          <div className="aa-progress" role="progressbar" aria-valuenow={entry.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${course.name} progress`}>
            <div className={'aa-progress__bar' + (done ? ' aa-progress__bar--done' : '')} style={{ width: `${entry.pct}%` }} />
          </div>
        </div>
      </div>
      <div className="aa-btn-row">
        <Button to={course.launchPath} variant="primary" iconAfter="arrow-right">{done ? 'Open Course' : 'Continue Course'}</Button>
        <Button to={course.path} variant="ghost" size="sm">Course details</Button>
      </div>
    </article>
  );
}
