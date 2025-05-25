// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EcommerceAdmin/', // ✅ this is correct for your repo
  plugins: [react()]        // ✅ don't forget to include the React plugin
})