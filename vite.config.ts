import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       background: path.resolve(__dirname, 'src/background.js')
  //     },
  //     output: {
  //       format: 'module',
  //       dir: 'android/app/src/main/assets/public/b', // Specify the output directory
  //       entryFileNames: '[name].js' // Specify the entry file names
  //     }
  //   },
  //   modulePreload: false
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
