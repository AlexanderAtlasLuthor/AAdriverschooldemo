# A&A Online Training — Florida Basic Driver Improvement (BDI)

A React implementation of the A&A Online Training BDI course prototype: the public
marketing site, the enrollment and checkout flow, the timed 4-hour course player,
practice quizzes, mandatory breaks, the 40-question final exam, and certificate
issuance.

This is a **prototype**. Items marked *TBD* or *Requires A&A Decision* in the UI are
open questions carried over from the course mapping — pricing, FLHSMV approval
numbers, the signature asset and the state reporting integration are not implemented.

## Running it

```bash
npm install
npm run dev      # development server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## What the app covers

**Public site** — course card, Florida requirements, how-it-works, help and sign-in
dialogs.

**Enrollment** — registration with full field validation (legal name, date of birth,
driver license, citation number, county, issuing agency and reason for taking the
course), checkout with card validation, receipt.

**Course** — twelve modules (an introduction plus eleven instructional modules)
totalling 220 instructional minutes, plus two mandatory 10-minute breaks for the full
4-hour requirement. Each module enforces a minimum seat time before the student can
continue. Six modules carry a practice quiz. Periodic identity-validation prompts
interrupt lessons, and repeated failures lock the course.

**Exam and certificate** — an open-book 40-question final exam requiring 32 correct
(80%) to pass, a signed completion statement, certificate information confirmation,
delivery selection, and a printable certificate that also downloads as a generated PDF.

**Management review panel** — the floating button at the bottom right jumps to any
screen in the journey and to thirteen failure and edge states. It also toggles demo
mode, which runs the timers 60× faster so the whole four-hour journey can be walked
through in minutes. This panel is prototype tooling, not part of the student product.

## Layout

```
src/
  data/
    content.js     Verbatim Source A course text for all 12 modules
    course.js      Module, lesson, quiz, break and final-exam definitions
    helpers.js     Formatting and validation helpers, county and agency lists
  state/
    engine.js      The course engine: state, timers, persistence, history,
                   validation, quiz and exam flow, and the certificate PDF builder
    useCourseEngine.js  Binds the engine to React and owns the one-second tick
  screens/
    AppView.jsx    Public site, app shell and screen dispatch
    *Screen.jsx    One component per screen in the journey
    Modal.jsx      Help, sign-in, terms, privacy and accessibility dialogs
    ReviewPanel.jsx  The management review panel
  components/
    MediaImage.jsx   Lesson image with a placeholder fallback
  styles/global.css  Base styles, focus rings, print rules and hover states
public/assets/       Logos and the sponsor portrait
```

The engine keeps course state in a single mutable object and notifies React when it
changes; `renderVals()` derives every value the screens bind to, so the screens stay
presentational and the whole flow lives in one place.

## Course content and media

The instructional text is the verbatim mapped Source A course material and should not
be edited by hand — every lesson cites the mapping location it draws from.

The course data references illustration artwork (`proto/graphics/*.svg` and
`sources/lpts-media/*`) that is not part of this repository. Those references are kept
intact so the artwork can be dropped in later; until then each one renders as a
labelled placeholder showing the expected path. The media strips describing videos,
animations and interactive exercises are likewise placeholders — they are tagged
either *Required/Supported by Mapping* or *A&A UX Enhancement*.

## Progress persistence

Course progress is saved to `localStorage` under `aa-bdi-proto-v1` and restored on
return, with the student sent back to the furthest screen they have unlocked. Browser
back and forward move through the journey and are re-checked against what the student
has actually unlocked. **Restart demo** clears the saved progress.
