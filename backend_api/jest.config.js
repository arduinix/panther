module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', "json"],
  collectCoverage: !process.env.SKIPCOVERAGE,
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  moduleNameMapper: {
    '^@snitch-rules/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['dist'],
}
