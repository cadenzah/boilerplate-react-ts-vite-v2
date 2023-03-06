import { loadEnv } from 'vite';

interface EnvOptions {
  mode: string;
  ssrBuild: boolean;
}
interface ViteEnv {
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;

  [key: string]: string | boolean | number;
}

export const configureEnv = (
  envPath: string,
  prefix = '',
  options: EnvOptions
): ViteEnv => {
  const { mode, ssrBuild } = options;
  const envFile = loadEnv(mode, envPath, prefix);
  const viteEnv: ViteEnv = {
    BASE_URL: `/${envFile.REPO_NAME ?? ""}`,
    MODE: mode,
    DEV: mode === 'development',
    PROD: mode === 'production',
    SSR: ssrBuild,
    ...envFile
  };
  delete viteEnv._; // 앱의 디렉토리 위치
  return viteEnv;
};
