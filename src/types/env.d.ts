// https://gongzza.github.io/typescript/typescript-definition-for-process-env/
declare const APP_ENV: Environment.AppEnv;
declare namespace Environment {
  interface AppEnv {
    // .env
    readonly IS_GITHUB_PAGE_DEPLOY: boolean;
    
    // Site Metadata
    readonly TITLE: string;
    readonly PAGE_URL: string;
    readonly REPO_OWNER: string;
    readonly REPO_NAME: string;

    // API Keys
    readonly GA_TRACKING_ID: string;

    // Vite 환경 변수
    readonly BASE_URL: string;
    readonly MODE: string;
    DEV: boolean;
    PROD: boolean;
    SSR: boolean;
  }
}
