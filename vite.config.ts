import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@': path.resolve(__dirname,'./src'),
      '@routes': path.resolve(__dirname,'./src/routes'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@pages': path.resolve(__dirname,'./src/pages'),
      '@assets': path.resolve(__dirname,'./src/assets'),
      '@types': path.resolve(__dirname,'./src/@types'),
      '@locales': path.resolve(__dirname,'./src/locales'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lottie: ['lottie-web'],
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouter: ['react-router-dom'],
        }
      }
    }
  }
})