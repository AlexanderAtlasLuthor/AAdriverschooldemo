import StatusPill from './StatusPill.jsx';

// A training-area concept inside a portal. Always labelled as a concept, never as an available course.
export default function AreaCard({ index, area, onDark = false, tag = 'Training area · concept' }) {
  return (
    <article className={'aa-area-card' + (onDark ? ' aa-area-card--on-dark' : '')}>
      <span className="aa-area-card__num">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="aa-area-card__title">{area.name}</h3>
      {area.text ? <p className="aa-area-card__text">{area.text}</p> : null}
      {tag ? <span className="aa-area-card__tag"><StatusPill tone={onDark ? 'on-dark' : 'neutral'}>{tag}</StatusPill></span> : null}
    </article>
  );
}
