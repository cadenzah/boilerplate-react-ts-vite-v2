import path from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import eslintPlugin from "@nabla/vite-plugin-eslint";
import htmlPlugin from 'vite-plugin-html-config';
// import EnvironmentPlugin from 'vite-plugin-environment'

import { configureEnv } from './src/utils/server/configureEnv';

const ENV_DIR = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode, ssrBuild }) => {
  const env = configureEnv(ENV_DIR, '', { mode, ssrBuild });

  return {
    resolve: {
      alias: {
          '~': path.resolve(__dirname),
          '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      eslintPlugin(),
      reactPlugin(),
      // vite-plugin-html-config
      htmlPlugin({ title: env.TITLE })
    ],
    define: {
      'APP_ENV': env
    },
    base: env.BASE_URL,
    publicDir: 'src/public',
    envPrefix: '_'
  };
});
