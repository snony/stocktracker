module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.(tsx|ts)?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)?$",
    "moduleNameMapper": {
        "\\.(css)$": "identity-obj-proxy"
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}