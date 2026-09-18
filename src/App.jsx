import { useCourseEngine } from './state/useCourseEngine.js';
import AppView from './screens/AppView.jsx';

export default function App() {
  const v = useCourseEngine();
  return <AppView v={v} />;
}
