import SectionHeading from '../components/platform/SectionHeading.jsx';
import StatusPill from '../components/platform/StatusPill.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import { LEGAL } from '../data/legalContent.js';

// /terms, /privacy and /accessibility — the same copy the course dialogs use.
export default function LegalPage({ doc }) {
  const d = LEGAL[doc];
  if (!d) return <NotFoundPage />;
  return (
    <>
      <section className="aa-page-head" aria-labelledby="legal-title">
        <div className="aa-container">
          <SectionHeading as="h1" titleClassName="aa-h1" eyebrow="Policies" id="legal-title" title={d.title} lede={d.intro} />
        </div>
      </section>
      <section className="aa-section">
        <div className="aa-container">
          <div className="aa-text-page">
            <p className="aa-text-page__status"><StatusPill tone={doc === 'accessibility' ? 'preview' : 'draft'}>{d.status}</StatusPill></p>
            {d.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>
    </>
  );
}
