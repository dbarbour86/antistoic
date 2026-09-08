import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          confirmed: path.resolve(__dirname, 'confirmed/index.html'),
          whatsEatingYou: path.resolve(__dirname, 'whats-eating-you/index.html'),
          whatIsAntistoic: path.resolve(__dirname, 'what-is-antistoic/index.html'),
          feelLostInLife: path.resolve(__dirname, 'feel-lost-in-life/index.html'),
          feelBehindInLife: path.resolve(__dirname, 'feel-behind-in-life/index.html'),
          afraidToStartOver: path.resolve(__dirname, 'afraid-to-start-over/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
