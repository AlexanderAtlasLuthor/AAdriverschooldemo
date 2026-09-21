import Icon from './Icon.jsx';
import { TRAINING_WORLDS, BDI_COURSE, worldStyle, getWorld } from '../../data/trainingCatalog.js';
import { BRAND, ASSETS } from '../../data/company.js';

// Visual explanation of the platform model: one platform → training worlds → individual courses.
export default function PlatformDiagram() {
  const driver = getWorld(BDI_COURSE.worldId);
  return (
    <div className="aa-diagram" role="img" aria-label={`${BRAND.name} contains five training worlds; each world contains its own courses, such as ${BDI_COURSE.name} inside ${driver.name}.`}>
      <div className="aa-diagram__tier">
        <span className="aa-diagram__label">One platform</span>
        <div className="aa-diagram__platform">
          <img className="aa-diagram__platform-logo" src={ASSETS.logo} alt="" />
          <span>{BRAND.name}</span>
        </div>
      </div>
      <div className="aa-diagram__connector" />
      <div className="aa-diagram__tier">
        <span className="aa-diagram__label">Training worlds</span>
        <div className="aa-diagram__worlds">
          {TRAINING_WORLDS.map(w => (
            <div key={w.id} className="aa-diagram__world" style={worldStyle(w)}>
              <span className="aa-diagram__world-icon"><Icon name={w.icon} size={16} /></span>
              <span>{w.shortName}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="aa-diagram__connector" />
      <div className="aa-diagram__tier">
        <span className="aa-diagram__label">Individual courses</span>
        <div className="aa-diagram__course">
          <strong>{BDI_COURSE.name}</strong>
          <span className="aa-diagram__course-world">{driver.name}</span>
        </div>
      </div>
    </div>
  );
}
