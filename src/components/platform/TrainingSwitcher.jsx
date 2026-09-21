import { useEffect, useRef, useState } from 'react';
import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';
import { TRAINING_WORLDS, worldStyle } from '../../data/trainingCatalog.js';
import { isActivePath } from '../../router/navigation.js';

// "Explore Training" — moves between training worlds without listing individual courses.
export default function TrainingSwitcher({ path }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); if (btnRef.current) btnRef.current.focus(); } };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('focusin', onPointer);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('focusin', onPointer);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const active = isActivePath(path, '/training');
  return (
    <div className="aa-switcher" ref={rootRef}>
      <button
        ref={btnRef}
        type="button"
        className={'aa-nav__link' + (active ? ' is-active' : '')}
        aria-expanded={open}
        aria-controls="aa-training-menu"
        aria-haspopup="true"
        onClick={() => setOpen(o => !o)}
      >
        <span>Explore Training</span>
        <Icon name="chevron-down" size={16} className={'aa-switcher__chev' + (open ? ' is-open' : '')} />
      </button>
      <div id="aa-training-menu" className="aa-switcher__menu" hidden={!open} role="group" aria-label="Training worlds">
        <ul className="aa-switcher__list">
          {TRAINING_WORLDS.map(w => (
            <li key={w.id}>
              <Link to={w.path} className="aa-switcher__item" style={worldStyle(w)}>
                <span className="aa-switcher__icon"><Icon name={w.icon} size={20} /></span>
                <span>
                  <span className="aa-switcher__name">{w.shortName}</span>
                  <span className="aa-switcher__desc">{w.menuLine}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/training" className="aa-switcher__all">
          <span>View All Training</span>
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </div>
  );
}
