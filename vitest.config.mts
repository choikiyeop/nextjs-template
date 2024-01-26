import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/test/setupTests.ts',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '') }],
  },
});
