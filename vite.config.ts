import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    host: true,
  },
});

/*
RESULT: CHANGE_REQUIRED
REASON: Explizite Konfigurationsdatei wurde erstellt, um die Build-Parameter für Vercel zu fixieren und potenzielle Abweichungen in der Standard-Pipeline zu vermeiden.
NOTES:
- Base-Path ist fest auf "/" gesetzt.
- outDir ist explizit als "dist" definiert.
*/
