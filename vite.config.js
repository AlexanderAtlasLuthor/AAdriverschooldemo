import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Absolute base so deep links (/training/driver, /course/bdi …) resolve assets on Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist', chunkSizeWarningLimit: 1200 },
});
