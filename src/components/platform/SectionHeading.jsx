// Eyebrow + heading + lede used at the top of every platform section.
export default function SectionHeading({ eyebrow, title, lede, align = 'left', as = 'h2', id, className = '', titleClassName = 'aa-h2' }) {
  const Tag = as;
  return (
    <div className={`aa-section-heading aa-section-heading--${align} ${className}`.trim()}>
      {eyebrow ? <p className="aa-eyebrow">{eyebrow}</p> : null}
      <Tag id={id} className={`${titleClassName}${id ? ' aa-anchor' : ''}`}>{title}</Tag>
      {lede ? <p className="aa-lede">{lede}</p> : null}
    </div>
  );
}
