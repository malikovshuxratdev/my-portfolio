import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: { '@': path.resolve(import.meta.dirname, './src') },
    },
    build: {
        target: 'es2022',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes('node_modules')) return;
                    if (id.includes('motion')) return 'motion';
                    if (id.includes('i18next')) return 'i18n';
                    if (id.includes('react')) return 'vendor';
                },
            },
        },
    },
});
