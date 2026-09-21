import GlobalHeader from './GlobalHeader.jsx';
import GlobalFooter from './GlobalFooter.jsx';
import { isReviewMode } from '../../utils/reviewMode.js';

// Shared shell for every public platform route: skip link, global header, main region, footer.
export default function PlatformShell({ path, children }) {
  const review = isReviewMode();
  return (
    <div className="aa-platform">
      <a className="aa-skip-link" href="#aa-main">Skip to main content</a>
      <GlobalHeader path={path} />
      <main id="aa-main" className="aa-main" tabIndex={-1}>
        {children}
      </main>
      <GlobalFooter />
      {review ? <div className="aa-review-badge" aria-label="Management review mode is on">Review mode</div> : null}
    </div>
  );
}
