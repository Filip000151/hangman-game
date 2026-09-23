import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
=======
  base: '/hangman-game/'
>>>>>>> 283a9d3bf9825c739ff8583f65665a3ac32c7986
})
