import SectionHeading from '../components/platform/SectionHeading.jsx';
import Button from '../components/platform/Button.jsx';

export default function NotFoundPage() {
  return (
    <section className="aa-section" aria-labelledby="nf-title">
      <div className="aa-container">
        <SectionHeading as="h1" titleClassName="aa-h1" eyebrow="Page not found" id="nf-title" title="We couldn’t find that page." lede="The address may have changed. Start from Explore Training or return to the homepage." />
        <div className="aa-btn-row" style={{ marginTop: 28 }}>
          <Button to="/training" variant="primary" iconAfter="arrow-right">Explore Training</Button>
          <Button to="/" variant="secondary">Home</Button>
        </div>
      </div>
    </section>
  );
}
