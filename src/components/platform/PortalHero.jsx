import StatusPill from './StatusPill.jsx';
import { worldStyle } from '../../data/trainingCatalog.js';
import { BRAND } from '../../data/company.js';

// Hero for a training-world portal. `tone` = dark | light; `visual` renders in the right column.
export default function PortalHero({ world, tone = 'dark', eyebrow, title, lede, pill, pillTone = 'preview', actions, visual, id = 'overview' }) {
  return (
    <section className={`aa-portal-hero aa-portal-hero--${tone}${tone === 'dark' ? ' aa-on-dark' : ''}`} style={worldStyle(world)} aria-labelledby={`${id}-title`}>
      <div className="aa-container">
        <div className={'aa-portal-hero__grid' + (visual ? '' : ' aa-portal-hero__grid--single')}>
          <div>
            {pill ? <div className="aa-portal-hero__pill"><StatusPill tone={tone === 'dark' ? 'on-dark' : pillTone}>{pill}</StatusPill></div> : null}
            <p className="aa-eyebrow">{eyebrow || `${BRAND.name} · Training world`}</p>
            <h1 id={`${id}-title`} className="aa-h1 aa-anchor">{title || world.name}</h1>
            {lede ? <p className="aa-lede">{lede}</p> : null}
            {actions ? <div className="aa-btn-row aa-portal-hero__actions">{actions}</div> : null}
          </div>
          {visual ? <div className="aa-portal-hero__visual">{visual}</div> : null}
        </div>
      </div>
    </section>
  );
}
