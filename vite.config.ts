import path from 'path';
import fs from 'node:fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vite's SPA fallback otherwise serves the homepage for /apps/memora,
// even though prerendering generated /apps/memora/index.html.
const prerenderedPreview = (): Plugin => ({
  name: 'prerendered-preview-routes',
  configurePreviewServer(server) {
    const output = path.resolve(server.config.root, server.config.build.outDir);
    server.middlewares.use((request, _response, next) => {
      if (!request.url || !['GET', 'HEAD'].includes(request.method || '')) return next();
      try {
        const url = new URL(request.url, 'http://localhost');
        const pathname = decodeURIComponent(url.pathname);
        if (path.extname(pathname)) return next();
        const candidate = path.resolve(output, `.${pathname}`, 'index.html');
        if (candidate.startsWith(`${output}${path.sep}`) && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          request.url = `${url.pathname.replace(/\/+$/, '')}/index.html${url.search}`;
        }
      } catch {
        // Let Vite handle malformed URLs with its normal request checks.
      }
      next();
    });
  },
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss(), prerenderedPreview()],
      build: { manifest: true },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
