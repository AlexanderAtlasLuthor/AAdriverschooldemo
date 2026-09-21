import { useMemo } from 'react';
import AppRouter from './router/AppRouter.jsx';
import { configureMemoryRouting } from './router/navigation.js';

// Platform entry. `memoryRouting` + `initialPath` let the app run without the browser URL
// (embedded previews and tests); production renders <App /> and uses the History API.
export default function App({ memoryRouting = false, initialPath = '/' }) {
  useMemo(() => { if (memoryRouting) configureMemoryRouting(initialPath); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <AppRouter />;
}
