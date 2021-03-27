module.exports = {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: "src",
    testRegex: ".spec.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "../coverage",
    testEnvironment: "node",
    testTimeout: 30000,
    moduleNameMapper: {
        "@environments": "<rootDir>/environments",
        "@config":"<rootDir>/config",
        "@common":"<rootDir>/common"
    },
};
