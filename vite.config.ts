import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      target: "https://api.clashofclans.com",
      secure: 'true',
      changeOrigin: 'true',
      "/v1": {
        "target": "https://api.clashofclans.com",
        "secure": true,
        "changeOrigin": true
      }
    }
  },
  plugins: [react()],
})
