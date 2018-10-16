module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '((/__tests__/)?(.*\\.)?(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['<rootDir>/src/__tests__/setupTest.ts']
}
