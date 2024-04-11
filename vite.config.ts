import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
 plugins: [react()],
 base: process.env.NODE_ENV === 'production'
    ? '/project-name/' // Adjust this to match your GitHub Pages subdirectory
    : '/',
 build: {
    assetsDir: 'assets',
 },
});