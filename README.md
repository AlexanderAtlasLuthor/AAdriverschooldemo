# A&A Online Training — front end

One platform → multiple training worlds → individual courses.

React 18 + Vite 5, no other runtime dependencies. A custom History API router
(`src/router/`) serves the public platform; the existing Florida BDI course
experience is code-split and mounted only on `/course/bdi`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Platform homepage |
| `/training` | Explore Training (all worlds) |
| `/training/driver` | Driver & Traffic Training portal |
| `/training/driver/bdi` | Florida Basic Driver Improvement course page |
| `/training/security` | Security Training portal |
| `/training/workplace` · `/training/professional` · `/training/compliance` | Portal landing pages |
| `/for-organizations` · `/about` · `/help` | Platform pages |
| `/my-learning` | Shared learner dashboard |
| `/terms` · `/privacy` · `/accessibility` | Policy pages |
| `/course/bdi` | BDI course experience (registration → certificate) |

## Structure

```
src/
  App.jsx                 platform entry → AppRouter
  apps/BDICourseApp.jsx   lazy-loaded BDI course experience (engine + screens)
  router/                 navigation.js (History API), Link.jsx, AppRouter.jsx
  components/platform/    GlobalHeader, GlobalFooter, MobileNavigation, TrainingSwitcher,
                          PortalSubnav, PortalHero, TrainingWorldCard, CourseCard, NeedCard,
                          Button, Icon, SectionHeading, StatusPill, Breadcrumb, CtaBand, …
  pages/                  Home, TrainingIndex, DriverTraining, SecurityTraining, TrainingWorld,
                          BDI, MyLearning, Organizations, About, Help, Legal, NotFound
  data/trainingCatalog.js training worlds, course display identities, need-based discovery
  data/company.js         brand, contact and asset references
  data/legalContent.js    terms / privacy / accessibility copy (shared with course dialogs)
  data/learnerState.js    safe read of saved BDI progress for My Learning
  data/course.js          BDI instructional content (unchanged)
  state/engine.js         BDI course engine (unchanged curriculum logic)
  screens/                BDI course screens
  styles/platform.css     design tokens (--aa-*) + platform components + responsive rules
  styles/global.css       base resets, focus ring, print rules
public/_redirects         Cloudflare Pages SPA fallback
```

## Scripts

```
npm install
npm run dev
npm run build     # production build → dist/
npm run preview
```

Management review tooling (review panel, demo jumps, `window.__AA`) is available in
development builds or by opening any route with `?review=1` (`?review=0` turns it off).
