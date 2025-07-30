import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore - Tailwind CSS v4 Vite plugin may not have full TypeScript declarations
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
