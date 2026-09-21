// Small inline SVG icon set for the platform (24×24, stroke based). No emoji, no icon dependency.
const PATHS = {
  road: ['M6 21 10 3', 'M18 21 14 3', 'M12 7v3', 'M12 14v3'],
  shield: ['M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6l7-3z', 'M9 12l2 2 4-4'],
  helmet: ['M3 17h18', 'M5 17v-3a7 7 0 0 1 14 0v3', 'M10 10V5.5A1.5 1.5 0 0 1 11.5 4h1A1.5 1.5 0 0 1 14 5.5V10'],
  people: ['M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M2.5 20a6.5 6.5 0 0 1 13 0', 'M16 4.5a3.5 3.5 0 0 1 0 6.6', 'M17.5 14a6 6 0 0 1 4 5.7'],
  'document-check': ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z', 'M14 3v5h5', 'M9 15l2 2 4-4'],
  'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
  'arrow-left': ['M19 12H5', 'M11 6l-6 6 6 6'],
  'chevron-down': ['M6 9l6 6 6-6'],
  'chevron-right': ['M9 6l6 6-6 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  check: ['M5 12.5l4.5 4.5L20 6.5'],
  clock: ['M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z', 'M12 7.5V12l3 2'],
  monitor: ['M3 4.5h18v12H3z', 'M8 20h8', 'M12 16.5V20'],
  'map-pin': ['M12 21s-6.5-5.3-6.5-11a6.5 6.5 0 0 1 13 0c0 5.7-6.5 11-6.5 11z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'],
  award: ['M12 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z', 'M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5'],
  phone: ['M5 4h4l1.5 4.5-2.2 1.3a9 9 0 0 0 5.9 5.9l1.3-2.2L20 15v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z'],
  mail: ['M3 5h18v14H3z', 'M3 7l9 6 9-6'],
  building: ['M4 21V4.5A1.5 1.5 0 0 1 5.5 3h13A1.5 1.5 0 0 1 20 4.5V21', 'M2 21h20', 'M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2', 'M10 21v-3h4v3'],
  book: ['M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5V4.5z', 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20'],
  layers: ['M12 3l9 5-9 5-9-5 9-5z', 'M3 13l9 5 9-5'],
  user: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4.5 20.5a7.5 7.5 0 0 1 15 0'],
  info: ['M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z', 'M12 11v5', 'M12 8h.01'],
  flag: ['M5 21V4', 'M5 4h12l-2 4 2 4H5'],
  globe: ['M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z', 'M3.5 12h17', 'M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z'],
  play: ['M8 5.5v13l10-6.5-10-6.5z'],
  fax: ['M6 21V9h12v12', 'M9 5h9v4', 'M9 13h6M9 17h6', 'M3 12h3M3 16h3'],
};

export const ICON_NAMES = Object.keys(PATHS);

export default function Icon({ name, size = 24, strokeWidth = 1.75, className = '', title, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      className={`aa-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {d.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}
