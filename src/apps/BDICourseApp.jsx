import { useCourseEngine } from '../state/useCourseEngine.js';
import AppView from '../screens/AppView.jsx';

// The existing BDI course experience (registration → checkout → player → exam → certificate),
// mounted only on /course/bdi so its engine and lesson content stay out of the platform bundle.
export default function BDICourseApp() {
  const v = useCourseEngine();
  return <AppView v={v} />;
}
