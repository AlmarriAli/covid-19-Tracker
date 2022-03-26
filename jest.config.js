module.exports = {
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json'
        }

    },
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "babel-jest"
    },

    "transformIgnorePatterns": [
        // Change MODULE_NAME_HERE to your module that isn't being compiled
        "/node_modules/babel-jest.+\\.js$"
    ],
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: ['./jest.setup.ts'],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ['./node_modules', 'src'],
    moduleNameMapper: {
        '\\.css': 'identity-obj-proxy',
        '\\.svg': 'identity-obj-proxy',
        "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
        "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
        "App(.*)": 'identity-obj-proxy',
        "assets/(.*)": [
            "<rootDir>/images/$1",
            "<rootDir>/photos/$1",
            "<rootDir>/recipes/$1"
        ]
    }
}