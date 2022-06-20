import { PlaywrightTestConfig } from '@playwright/test';
import EnvSetup from './env.setup';

EnvSetup();

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.BASE_URL,
  },
};
export default config;
