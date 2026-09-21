import Button from './Button.jsx';

// Closing call-to-action band used at the bottom of platform pages.
export default function CtaBand({ title, text, primary, secondary, tone = 'dark' }) {
  return (
    <section className="aa-section" aria-label={title}>
      <div className="aa-container">
        <div className={`aa-band${tone === 'light' ? ' aa-band--light' : ' aa-on-dark'}`}>
          <div>
            <h2 className="aa-h3">{title}</h2>
            {text ? <p className="aa-body" style={{ marginTop: 10 }}>{text}</p> : null}
          </div>
          <div className="aa-band__actions">
            {primary ? <Button to={primary.to} variant={tone === 'light' ? 'primary' : 'accent'} iconAfter="arrow-right">{primary.label}</Button> : null}
            {secondary ? <Button to={secondary.to} variant={tone === 'light' ? 'secondary' : 'on-dark'}>{secondary.label}</Button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
