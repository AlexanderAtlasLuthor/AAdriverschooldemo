// Legal and accessibility copy shared by the platform pages (/terms, /privacy, /accessibility)
// and by the BDI course dialogs. Draft text carried over from the prototype; final wording
// is subject to A&A management and legal approval.
export const LEGAL = {
  terms: {
    slug: 'terms',
    path: '/terms',
    title: 'Terms and Conditions',
    status: 'Draft for management review',
    intro: 'This draft summarizes the subjects the final Terms and Conditions will cover. It is not yet the approved legal text.',
    paras: [
      '1. The courses. A&A Online Training provides online training courses, including the Florida Basic Driver Improvement (BDI) course. Each course page describes the course structure, duration and completion requirements before you enroll. The BDI course requires 220 minutes of instruction and two 10-minute mandatory breaks, completed in order.',
      '2. The student. The registered student must personally complete the course without unauthorized assistance. Identity is confirmed through security questions asked at random during the course.',
      '3. Examination and certificate. The BDI final examination of 40 questions must be passed with at least 32 correct answers (80%). A failed examination must be retaken; no certificate is issued for a failed examination. A completion statement must be signed before the certificate is processed.',
      '4. Fees and refunds. Course prices, any state assessment fee shown at checkout, certificate delivery charges and the refund policy will be published before enrollment opens and are subject to A&A approval.',
      '5. Reporting. Completion information is processed and reported as required by the applicable state or agency. The technical reporting mechanism is established during regulatory integration.',
      '6. Governing law and disputes. To be drafted by A&A counsel.',
    ],
  },
  privacy: {
    slug: 'privacy',
    path: '/privacy',
    title: 'Privacy Policy',
    status: 'Draft for management review',
    intro: 'This draft summarizes the subjects the final Privacy Policy will cover. It is not yet the approved legal text.',
    paras: [
      '1. What is collected. Account details, legal name, date of birth, address, driver license information and citation information — the fields required to deliver a course and to process certificates and any required state reporting.',
      '2. Why it is collected. To deliver the course, verify that the registered student completed it, issue the certificate and report completion as required.',
      '3. Payment data. Card details are handled by a payment processor. This platform does not store card numbers or security codes, and does not retain them when your progress is saved in this browser.',
      '4. Sharing. Completion information is shared with the applicable state agency and, where applicable, the court or agency named on a citation. Any other sharing will be described here before it takes place.',
      '5. Retention and your rights. Record-retention periods and the process for requesting correction or deletion will be published in the final policy.',
      '6. Demo storage. This demo saves course progress in your own browser (local storage) so a refresh does not lose your place. It never stores payment data or your password, and clearing your browser data removes it.',
    ],
  },
  accessibility: {
    slug: 'accessibility',
    path: '/accessibility',
    title: 'Accessibility',
    status: 'Current commitments',
    intro: 'A&A Online Training is built to be usable by everyone. This page describes what is in place today and what is planned.',
    paras: [
      'Every control can be reached with a keyboard: Tab moves between controls, Enter or Space activates them, and the focused control shows a visible gold outline.',
      'Status messages, timer warnings and validation results are announced to screen readers.',
      'Text can be enlarged with your browser zoom without losing controls; the layout reflows down to phone width.',
      'Planned for a later phase: read-aloud narration, captions for instructional video, a text-size control and a high-contrast theme.',
      'If you need help completing a course in another way, contact A&A at (561) 533-5303.',
    ],
  },
};

export const LEGAL_LINKS = [LEGAL.terms, LEGAL.privacy, LEGAL.accessibility].map(d => ({ label: d.title, to: d.path }));
