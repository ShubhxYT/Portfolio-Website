import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react-vendor';
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion/') || id.includes('node_modules/gsap')) return 'motion-vendor';
          if (id.includes('node_modules/three')) return 'three-core';
          if (id.includes('node_modules/@react-three')) return 'r3f-vendor';
          if (id.includes('node_modules/react-icons') || id.includes('node_modules/lucide-react') || id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) return 'ui-vendor';
          if (id.includes('node_modules/meshline')) return 'mesh-vendor';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'three'],
  },
})
