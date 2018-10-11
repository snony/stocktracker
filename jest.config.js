module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '((/__tests__/)?(.*\\.)?(test|spec))\\.tsx?$',
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy'
    },
    setupFiles: ["<rootDir>/src/__test__/setupTest.ts"],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src']
}