import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths'
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/WM-React-shop/",
  plugins: [react(), jsconfigPaths()],
});