import Breadcrumb from '../components/platform/Breadcrumb.jsx';
import Button from '../components/platform/Button.jsx';
import StatusPill from '../components/platform/StatusPill.jsx';
import Icon from '../components/platform/Icon.jsx';
import CtaBand from '../components/platform/CtaBand.jsx';
import { BDI_COURSE, getWorld, worldStyle } from '../data/trainingCatalog.js';
import { BRAND } from '../data/company.js';

const AUDIENCE = [
  'Drivers who choose to take a Basic Driver Improvement course after a non-criminal moving violation',
  'Drivers directed by a court to complete a Basic Driver Improvement course',
  'Drivers who need to complete BDI to meet a Florida licensing requirement',
  'Drivers taking the course voluntarily — for example, at the request of an insurer',
];

const EXPECT = [
  { title: 'Timed, sequential modules', text: 'Each module has a required minimum time and unlocks the next when complete.' },
  { title: 'Knowledge checks', text: 'Short quizzes reinforce each module before you move on.' },
  { title: 'Two required breaks', text: 'Ten-minute breaks are built into the course after the fifth and tenth modules.' },
  { title: 'Identity verification', text: 'You answer security questions you set up at the start — they confirm the registered student is the one completing the course.' },
  { title: 'Stop and resume', text: 'Your progress is saved, so you can return where you left off.' },
  { title: 'Open-book final exam', text: '40 questions with no time limit. You may review course material while you take it.' },
];

const STEPS = [
  { title: 'Enroll and register', text: 'Create your student record and complete checkout.' },
  { title: 'Confirm your details', text: 'Verify your student information, set your security questions and acknowledge the course requirements.' },
  { title: 'Complete the modules', text: 'Work through the introduction and eleven modules in order, with knowledge checks and two breaks.' },
  { title: 'Pass the exam and finish', text: 'Pass the 40-question final exam, sign your completion statement and confirm your certificate details.' },
];

const FAQ = [
  { q: 'Is this course approved in Florida?', a: 'This page describes the A&A Online Training development and management demo. Provider and course approval details will be published on this page when they are finalized.' },
  { q: 'How long does the course take?', a: 'The course requires four hours: 220 instructional minutes plus two 10-minute breaks. You can complete it in more than one sitting.' },
  { q: 'What happens if I don’t pass the final exam?', a: 'You can review the course material and retake the exam.' },
  { q: 'Do I need to finish in one sitting?', a: 'No. Your progress is saved and you can resume where you left off.' },
  { q: 'What does the course demo show?', a: 'The full student journey — registration, checkout, student setup, the course player, knowledge checks, breaks, final exam, completion statement and certificate — using accelerated timers and sample data.' },
];

const FACTS = [
  ['Duration', `${BDI_COURSE.duration} — ${BDI_COURSE.durationDetail}`],
  ['Delivery', BDI_COURSE.delivery],
  ['Jurisdiction', BDI_COURSE.jurisdiction],
  ['Structure', BDI_COURSE.structure],
  ['Final exam', BDI_COURSE.exam],
  ['Completion', BDI_COURSE.completion],
];

export default function BDIPage() {
  const world = getWorld(BDI_COURSE.worldId);
  const course = BDI_COURSE;
  return (
    <div style={worldStyle(world)}>
      <section className="aa-course-hero" aria-labelledby="course-title">
        <div className="aa-container">
          <Breadcrumb items={[{ label: BRAND.name, to: '/' }, { label: world.name, to: world.path }, { label: course.name }]} />
          <div style={{ marginTop: 28 }}>
            <StatusPill tone="demo">{course.contextLabel}</StatusPill>
          </div>
          <p className="aa-eyebrow" style={{ marginTop: 18, color: world.accent }}>{world.name} · Course</p>
          <h1 id="course-title" className="aa-h1">{course.name}</h1>
          <p className="aa-lede">{course.summary}</p>
          <ul className="aa-course-hero__meta">
            <li><Icon name="clock" size={18} />{course.duration}</li>
            <li><Icon name="monitor" size={18} />{course.delivery}</li>
            <li><Icon name="map-pin" size={18} />{course.jurisdiction}</li>
            <li><Icon name="award" size={18} />Certificate of completion</li>
          </ul>
          <div className="aa-btn-row" style={{ marginTop: 28 }}>
            <Button to={course.launchPath} variant="accent" iconAfter="arrow-right">Launch Course Demo</Button>
            <Button href="#how-it-works" variant="secondary">How it works</Button>
          </div>
        </div>
      </section>

      <div className="aa-container">
        <div className="aa-course-layout">
          <div className="aa-prose">
            <section aria-labelledby="overview">
              <h2 id="overview" className="aa-anchor">Course overview</h2>
              <p>The {course.name} (BDI) course is {BRAND.name}’s first developed course and the model for how courses work across the platform. It is delivered entirely online: you enroll, confirm your student information, complete the modules in order, pass the final exam and receive a certificate of completion.</p>
              <p>The course covers the topics Florida driver improvement courses are built around — crash prevention, traffic law, impaired driving, sharing the road, safety equipment and driver attitude — across an introduction and eleven instructional modules.</p>
              <div className="aa-note"><strong>Status:</strong> this course is presented as a development and management demo. Provider and course approval information will be published here when finalized.</div>
            </section>

            <section aria-labelledby="who">
              <h2 id="who" className="aa-anchor">Who this course is for</h2>
              <ul>
                {AUDIENCE.map(a => <li key={a}>{a}</li>)}
              </ul>
              <p style={{ marginTop: 14 }}>Whether BDI applies to your situation depends on your citation, court order or notice. If you are not sure, review the notice you received before enrolling.</p>
            </section>

            <section aria-labelledby="expect">
              <h2 id="expect" className="aa-anchor">What students can expect</h2>
              <ul className="aa-expect">
                {EXPECT.map(e => <li key={e.title}><strong>{e.title}</strong><span>{e.text}</span></li>)}
              </ul>
            </section>

            <section aria-labelledby="how-it-works">
              <h2 id="how-it-works" className="aa-anchor">How online training works</h2>
              <ol className="aa-points aa-points--3" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
                {STEPS.map((s, i) => (
                  <li key={s.title} className="aa-point">
                    <span className="aa-point__num">STEP {String(i + 1).padStart(2, '0')}</span>
                    <h3 className="aa-point__title">{s.title}</h3>
                    <p className="aa-point__text">{s.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="completion">
              <h2 id="completion" className="aa-anchor">Course completion experience</h2>
              <p>After passing the final exam you sign a completion statement, confirm the details that will appear on your certificate and choose how you would like it delivered. Your certificate is then processed, and completion information is prepared for any required reporting.</p>
              <p>Your completed course also appears in My Learning — the shared learner account you keep across every {BRAND.name} world.</p>
            </section>

            <section aria-labelledby="faq">
              <h2 id="faq" className="aa-anchor">Frequently asked questions</h2>
              <div className="aa-faq">
                {FAQ.map(f => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="aa-course-aside" aria-label="Course at a glance">
            <div className="aa-facts">
              <p className="aa-facts__title">Course at a glance</p>
              <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
                {FACTS.map(([k, v]) => (
                  <div key={k} className="aa-facts__row"><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
            <Button to={course.launchPath} variant="accent" block iconAfter="arrow-right">Launch Course Demo</Button>
            <p className="aa-small">The demo runs with accelerated timers so the full journey can be shown in one session. Progress is saved in this browser.</p>
          </aside>
        </div>
      </div>

      <CtaBand title="See the course experience." text="Registration, checkout, the course player, final exam and certificate — the complete student journey." primary={{ label: 'Launch Course Demo', to: course.launchPath }} secondary={{ label: `Back to ${world.name}`, to: world.path }} />
    </div>
  );
}
