import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Carolina_Delgado_PFY2201_S7/' : '/',
  server: {
    port: 3000,
  },
}))