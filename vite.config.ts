import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import type { PreviewServer, ViteDevServer } from 'vite';
import weather from './netlify/functions/weather.mjs';

function serveWeather(server: ViteDevServer | PreviewServer) {
  server.middlewares.use('/api/weather', async (request, reply) => {
    const response = await weather(new Request('http://localhost/api/weather', { method: request.method }));
    reply.writeHead(response.status, Object.fromEntries(response.headers));
    reply.end(await response.text());
  });
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), {
      name: 'vila-zizel-weather',
      configureServer: serveWeather,
      configurePreviewServer: serveWeather,
    }],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: true,
    },
  };
});
