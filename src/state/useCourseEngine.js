import { useEffect, useReducer, useRef } from 'react';
import { createEngine } from './engine.js';

/**
 * Drives the course engine from React.
 *
 * The engine keeps its own mutable state object and calls `_rerender` whenever
 * it changes, which is the same contract the original prototype had with its
 * component base class. The one-second interval that advances module and break
 * timers is owned here so it is torn down with the component.
 */
export function useCourseEngine() {
  const [, forceRender] = useReducer((n) => n + 1, 0);
  const engineRef = useRef(null);
  if (!engineRef.current) engineRef.current = createEngine();

  const engine = engineRef.current;
  engine._rerender = forceRender;

  useEffect(() => {
    engine.mount();
    const handle = setInterval(() => engine.tick(), 1000);
    return () => {
      clearInterval(handle);
      engine.unmount();
    };
  }, [engine]);

  return engine.renderVals();
}
