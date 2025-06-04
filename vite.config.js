import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        dashboard: 'dashboard.html',
        inventory: 'inventory.html',
        products: 'products.html',
        settings: 'settings.html',
        audit: 'audit.html',
        login: 'login.html'
        // Add more if needed
      }
    }
  }
});