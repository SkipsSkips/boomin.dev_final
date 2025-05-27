// filepath: c:\Users\alexn\Desktop\work\business\portfolio_webiste\prokect\boomin.dev\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});