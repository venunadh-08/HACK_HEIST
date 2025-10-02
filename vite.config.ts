import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl()
  ],
  base: '/<HACK_HEIST>/',
  server: {
    host: true, // Allows access from your mobile device
    https: {}  // Enables HTTPS
  }
});