import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: 'e2e/**/*.cy.ts',
    supportFile: 'support/index.ts',
    fixturesFolder: 'fixtures',
    screenshotsFolder: 'screenshots',
    downloadsFolder: 'downloads',
    retries: {
      runMode: Number(process.env.RETRIES) || 0,
      openMode: 0,
    },
  },
});
