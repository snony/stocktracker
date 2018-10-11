module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ["<rootDir>/src/__test__/setupTest.ts"],
  testRegex: '((/__tests__/)?(.*\\.)?(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src']
}
