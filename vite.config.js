import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    modulePreload: {
      resolveDependencies(filename, deps) {
        return deps.filter((d) => !/three-core|r3f-vendor|mesh-vendor|Lanyard/.test(d));
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react-vendor';
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion/') || id.includes('node_modules/gsap')) return 'motion-vendor';
          // Do not manualChunk three/@react-three/meshline: that pulled r3f+three
          // into the main graph via Vite's preload helper and loaded them on mobile.
          if (id.includes('node_modules/react-icons') || id.includes('node_modules/lucide-react') || id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) return 'ui-vendor';
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
