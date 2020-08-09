module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "standard",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint","jsx-a11y", "prettier",  "react-hooks"],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            },
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "react-hooks/rules-of-hooks": "error",
        'no-plusplus': 'off',
        'no-shadow':'off',
        "@typescript-eslint/interface-name-prefix": [
            "error",
            {
                prefixWithI: "always",
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
    },
};
