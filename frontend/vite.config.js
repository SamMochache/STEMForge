import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],

  build: {
    // Split vendor bundles so browsers can cache them independently
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react')) return 'icons';
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router-dom')
          ) {
            return 'vendor';
          }
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 800,
    // Generate source maps for production error tracking
    sourcemap: false,
  },

  // Suppress noisy circular-dependency warnings from react-router v7
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
})
