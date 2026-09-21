import Link from '../../router/Link.jsx';
import Icon from './Icon.jsx';

// Shared button / CTA treatment. Renders a router link (`to`), a plain anchor (`href`) or a <button>.
export default function Button({ to, href, variant = 'primary', size = 'md', icon, iconAfter, block = false, className = '', children, type = 'button', ...rest }) {
  const cls = ['aa-btn', `aa-btn--${variant}`, size === 'sm' ? 'aa-btn--sm' : '', block ? 'aa-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = (
    <>
      {icon ? <Icon name={icon} size={size === 'sm' ? 16 : 18} /> : null}
      <span>{children}</span>
      {iconAfter ? <Icon name={iconAfter} size={size === 'sm' ? 16 : 18} /> : null}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type={type} className={cls} {...rest}>{inner}</button>;
}
