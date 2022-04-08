module.exports = {
  name: 'store',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/store',
  //setupFilesAfterEnv: ['./src/test-setup.ts'],

  displayName: 'store',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
