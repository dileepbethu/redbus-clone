import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  base: ' https://dileepbethu.github.io/redbus-clone/', // For GitHub Pages
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('https://redbus-clone-3.onrender.com'),
  },
});
