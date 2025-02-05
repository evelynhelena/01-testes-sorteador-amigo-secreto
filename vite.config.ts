/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react(),tailwindcss(),],
  test: {
    environment: 'jsdom', // Define o ambiente como JS DOM para testes de frontend
    globals: true,        // Ativa os métodos globais como `test`, `describe`
    setupFiles: './src/setupTests.ts', // Arquivo para configurações adicionais
  },
});