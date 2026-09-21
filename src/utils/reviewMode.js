// Management-review mode: internal review tooling (review panel, demo jumps, window.__AA)
// is available only in development builds or when the page is opened with ?review=1.
// ?review=0 turns it off again for the current browser session.
const KEY = 'aa-review-mode';

export function isReviewMode() {
  try {
    if (import.meta.env.DEV) return true;
    const q = new URLSearchParams(window.location.search).get('review');
    if (q === '1') { sessionStorage.setItem(KEY, '1'); return true; }
    if (q === '0') { sessionStorage.removeItem(KEY); return false; }
    return sessionStorage.getItem(KEY) === '1';
  } catch (e) { return false; }
}
