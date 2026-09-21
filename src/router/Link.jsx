import { forwardRef } from 'react';
import { navigate, isInternalHref } from './navigation.js';

// Anchor that uses the platform router for internal paths and behaves like a normal link otherwise.
const Link = forwardRef(function Link({ to, onClick, replace = false, children, target, ...rest }, ref) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (target && target !== '_self') return;
    if (!isInternalHref(to)) return;
    e.preventDefault();
    navigate(to, { replace });
  };
  return (
    <a ref={ref} href={to} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
});

export default Link;
