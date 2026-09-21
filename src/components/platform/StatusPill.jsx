const TONE = { available: 'available', preview: 'preview', demo: 'available', development: 'development', neutral: 'neutral', 'on-dark': 'on-dark', draft: 'development' };

export default function StatusPill({ tone = 'neutral', className = '', children }) {
  return <span className={`aa-pill aa-pill--${TONE[tone] || 'neutral'} ${className}`.trim()}>{children}</span>;
}
