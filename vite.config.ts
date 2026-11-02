import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project sites live below /<repository>/ rather than /.
// Change VITE_BASE_PATH when using a different repo name or custom domain.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_PAGES === 'true' ? '/family-empathy-game/' : '/'),
});
