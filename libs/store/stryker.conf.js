/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  $schema:
    '../../node_modules/@stryker-mutator/core/schema/stryker-schema.json',
  mutate: [
    'src/**/*.ts',
    '!src/**/*.test.tsx',
    '!src/test-setup.ts',
    '!../utils/**/*.ts',
    '!../utils/**/*.test.tsx',
  ],
  mutator: 'typescript',
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  htmlReporter: {
    baseDir: '../../coverage/mutation/html',
  },
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    configFile: 'jest.stryker.config.js',
    enableFindRelatedTests: true,
  },
  transpilers: [],
  coverageAnalysis: 'off',
  maxConcurrentTestRunners: 15,
  logLevel: 'debug',
};
