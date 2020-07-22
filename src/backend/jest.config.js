module.exports = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: './',
  testRegex: '.spec.js$',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
};
