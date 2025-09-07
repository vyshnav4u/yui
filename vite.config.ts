import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), dts({ insertTypesEntry: true })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // ✅ this is required
        },
    },
    build: {
        lib: {
            // Entry point of your library (where you export all components)
            entry: path.resolve(__dirname, 'src/index.ts'),
            // Global name for UMD build (for script tags)
            name: 'yui',
            // Output file naming pattern
            fileName: (format) => `yui.${format}.js`,
        },
        rollupOptions: {
            // Don't bundle React into your library
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
