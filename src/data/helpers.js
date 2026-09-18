// A&A BDI prototype – shared helpers (formatting, module status, exam key). Loaded from the DC helmet.
export const AA_PROTO = (() => {
  const fmt = s => { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60), r = s % 60; return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`; };
  const mins = s => Math.round(s / 60);
  const today = () => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const citationOk = v => /^[A-Z0-9]{6}[A-Z]$/i.test((v || '').trim());
  const emailOk = v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v || '');
  const dobOk = v => /^\d{4}-\d{2}-\d{2}$/.test(v || '') || /^\d{2}\/\d{2}\/\d{4}$/.test(v || '');
  const counties = ['Alachua', 'Brevard', 'Broward', 'Collier', 'Duval', 'Escambia', 'Hillsborough', 'Lee', 'Leon', 'Manatee', 'Marion', 'Miami-Dade', 'Orange', 'Osceola', 'Palm Beach', 'Pasco', 'Pinellas', 'Polk', 'Sarasota', 'Seminole', 'St. Johns', 'St. Lucie', 'Volusia', 'Other'];
  const reasons = [
    { v: 'elected', t: 'I elected to attend BDI for a non-criminal moving violation (in lieu of points)' },
    { v: 'court', t: 'A court ordered me to complete a Basic Driver Improvement course' },
    { v: 'required', t: 'FLHSMV / crash-related requirement (at-fault crash with hospitalization; two crashes in 2 years; qualifying conviction)' },
    { v: 'insurance', t: 'Voluntary – insurance discount (at the insurer\u2019s discretion)' },
  ];
  const agencies = ['(1) F.H.P.', '(2) P.D.', '(3) S.O.', '(4) OTHER'];
  return { fmt, mins, today, citationOk, emailOk, dobOk, counties, reasons, agencies };
})();
