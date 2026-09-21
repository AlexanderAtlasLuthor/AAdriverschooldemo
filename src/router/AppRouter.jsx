import { Suspense, lazy, useEffect, useRef } from 'react';
import { usePath } from './navigation.js';
import PlatformShell from '../components/platform/PlatformShell.jsx';
import HomePage from '../pages/HomePage.jsx';
import TrainingIndexPage from '../pages/TrainingIndexPage.jsx';
import TrainingWorldPage from '../pages/TrainingWorldPage.jsx';
import DriverTrainingPage from '../pages/DriverTrainingPage.jsx';
import SecurityTrainingPage from '../pages/SecurityTrainingPage.jsx';
import BDIPage from '../pages/BDIPage.jsx';
import MyLearningPage from '../pages/MyLearningPage.jsx';
import OrganizationsPage from '../pages/OrganizationsPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import HelpPage from '../pages/HelpPage.jsx';
import LegalPage from '../pages/LegalPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import { BRAND } from '../data/company.js';
import { getWorld } from '../data/trainingCatalog.js';

// The BDI course experience (engine + 300 KB of lesson content) is only loaded on /course/bdi.
const BDICourseApp = lazy(() => import('../apps/BDICourseApp.jsx'));

export const ROUTES = [
  { pattern: '/', page: HomePage, title: '' },
  { pattern: '/training', page: TrainingIndexPage, title: 'Explore Training' },
  { pattern: '/training/driver', page: DriverTrainingPage, title: 'Driver & Traffic Training' },
  { pattern: '/training/driver/bdi', page: BDIPage, title: 'Florida Basic Driver Improvement' },
  { pattern: '/training/security', page: SecurityTrainingPage, title: 'Security Training' },
  { pattern: '/training/:worldId', page: TrainingWorldPage, title: (p) => (getWorld(p.worldId) || {}).name || 'Training' },
  { pattern: '/for-organizations', page: OrganizationsPage, title: 'For Organizations' },
  { pattern: '/about', page: AboutPage, title: 'About' },
  { pattern: '/help', page: HelpPage, title: 'Help & Support' },
  { pattern: '/my-learning', page: MyLearningPage, title: 'My Learning' },
  { pattern: '/terms', page: LegalPage, props: { doc: 'terms' }, title: 'Terms and Conditions' },
  { pattern: '/privacy', page: LegalPage, props: { doc: 'privacy' }, title: 'Privacy Policy' },
  { pattern: '/accessibility', page: LegalPage, props: { doc: 'accessibility' }, title: 'Accessibility' },
  { pattern: '/course/bdi', course: true, title: 'Florida Basic Driver Improvement · Course' },
];

export function matchRoute(path) {
  const segs = path.split('/').filter(Boolean);
  for (const route of ROUTES) {
    const pSegs = route.pattern.split('/').filter(Boolean);
    if (pSegs.length !== segs.length) continue;
    const params = {};
    let ok = true;
    for (let i = 0; i < pSegs.length; i++) {
      if (pSegs[i].startsWith(':')) params[pSegs[i].slice(1)] = decodeURIComponent(segs[i]);
      else if (pSegs[i] !== segs[i]) { ok = false; break; }
    }
    if (ok) return { route, params };
  }
  return { route: { pattern: '*', page: NotFoundPage, title: 'Page not found' }, params: {} };
}

function CourseLoading() {
  return <div className="aa-loading" role="status">Loading the course experience…</div>;
}

export default function AppRouter() {
  const path = usePath();
  const { route, params } = matchRoute(path);
  const firstRender = useRef(true);

  useEffect(() => {
    const t = typeof route.title === 'function' ? route.title(params) : route.title;
    document.title = t ? `${t} · ${BRAND.name}` : BRAND.name;
    if (firstRender.current) { firstRender.current = false; return; }
    const main = document.getElementById('aa-main');
    if (main && !route.course) main.focus({ preventScroll: true });
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

  if (route.course) {
    return (
      <Suspense fallback={<CourseLoading />}>
        <BDICourseApp />
      </Suspense>
    );
  }

  const Page = route.page;
  return (
    <PlatformShell path={path}>
      <Page {...params} {...(route.props || {})} path={path} />
    </PlatformShell>
  );
}
