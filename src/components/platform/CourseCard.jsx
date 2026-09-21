import Icon from './Icon.jsx';
import Button from './Button.jsx';
import StatusPill from './StatusPill.jsx';
import { COURSE_STATUS, worldForCourse, worldStyle } from '../../data/trainingCatalog.js';

// Concise course card. Available courses get a CTA; courses in development show status only.
export default function CourseCard({ course, showWorld = false, ctaLabel, spotlight = false }) {
  const world = worldForCourse(course);
  const available = course.status === COURSE_STATUS.DEMO;
  const cls = ['aa-course-card', available ? '' : 'aa-course-card--muted', spotlight ? 'aa-course-card--spotlight' : ''].filter(Boolean).join(' ');
  return (
    <article className={cls} style={worldStyle(world)} aria-labelledby={`course-${course.id}-title`}>
      <div className="aa-course-card__head">
        <div>
          {showWorld && world ? <p className="aa-course-card__eyebrow">{world.name}</p> : null}
          <h3 id={`course-${course.id}-title`} className="aa-course-card__title">
            {course.name}{course.abbreviation && course.abbreviation !== course.name ? <span className="aa-course-card__abbr"> ({course.abbreviation})</span> : null}
          </h3>
        </div>
        <StatusPill tone={course.status}>{course.statusLabel}</StatusPill>
      </div>
      <p className="aa-course-card__text">{course.summary}</p>
      {available ? (
        <ul className="aa-course-card__meta">
          <li><Icon name="clock" size={15} />{course.duration}</li>
          <li><Icon name="monitor" size={15} />{course.delivery}</li>
          <li><Icon name="map-pin" size={15} />{course.jurisdiction}</li>
        </ul>
      ) : null}
      <div className="aa-course-card__foot">
        {available ? (
          <Button to={course.path} variant="primary" size="sm" iconAfter="arrow-right">{ctaLabel || course.ctaLabel || 'View Course'}</Button>
        ) : (
          <span className="aa-course-card__status-note">Course details will be published when development is complete.</span>
        )}
      </div>
    </article>
  );
}
