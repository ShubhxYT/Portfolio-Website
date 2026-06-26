import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion', 'motion', 'gsap'],
          'three-core': ['three'],
          'r3f-vendor': ['@react-three/fiber', '@react-three/drei', '@react-three/rapier'],
          'ui-vendor': ['react-icons', 'lucide-react', 'clsx', 'tailwind-merge'],
          'mesh-vendor': ['meshline'],
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
