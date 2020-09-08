// https://jestjs.io/docs/en/configuration.html
module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.spec.(js|ts)'],
};
