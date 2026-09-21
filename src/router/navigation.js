// Lightweight History API router for the platform. No dependencies.
// `memory` mode lets the app run without touching the browser URL (tests / embedded previews).
import { useEffect, useState } from 'react';

const listeners = new Set();
let memory = null;

export function normalizePath(input) {
  if (!input) return '/';
  let path = String(input).split('?')[0].split('#')[0];
  if (!path.startsWith('/')) path = '/' + path;
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path || '/';
}

export function configureMemoryRouting(initialPath = '/') {
  memory = { path: normalizePath(initialPath) };
}

export function currentPath() {
  if (memory) return memory.path;
  return normalizePath(window.location.pathname);
}

function emit() { listeners.forEach(fn => fn(currentPath())); }

function scrollToHash(hash) {
  const el = document.getElementById(hash.slice(1));
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

export function navigate(to, { replace = false, scroll = true } = {}) {
  const hashIndex = to.indexOf('#');
  const hash = hashIndex >= 0 ? to.slice(hashIndex) : '';
  const path = normalizePath(to);
  if (memory) {
    memory.path = path;
  } else {
    const url = path + hash;
    try {
      if (replace) window.history.replaceState({ aaPath: path }, '', url);
      else window.history.pushState({ aaPath: path }, '', url);
    } catch (e) { /* ignore — unsupported environments still re-render */ }
  }
  emit();
  if (hash) requestAnimationFrame(() => scrollToHash(hash));
  else if (scroll) window.scrollTo(0, 0);
}

export function usePath() {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    listeners.add(setPath);
    const onPop = () => { if (!memory) setPath(currentPath()); };
    window.addEventListener('popstate', onPop);
    return () => { listeners.delete(setPath); window.removeEventListener('popstate', onPop); };
  }, []);
  return path;
}

export function isInternalHref(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

export function isActivePath(current, target, { exact = false } = {}) {
  if (!current || !target) return false;
  if (exact || target === '/') return current === target;
  return current === target || current.startsWith(target + '/');
}
