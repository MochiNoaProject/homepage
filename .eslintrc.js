/** @type {import('eslint').CLIEngine.Options} */
module.exports = {
    reportUnusedDisableDirectives: true,
    parserOptions: {
        ecmaVersion: 9,
        sourceType: "module",
    },
    env: {
        es6: true,
        browser: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint", "react-hooks", "sort-imports-es6-autofix"],
    rules: {
        "sort-imports-es6-autofix/sort-imports-es6": [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            },
        ],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    FC: {
                        message: "Use React.FC instead",
                        fixWith: "React.FC",
                    },
                    "React.FunctionComponent": {
                        message: "Use React.FC instead",
                        fixWith: "React.FC",
                    },
                    Array: null,
                    Object: "Use {} instead",
                    String: {
                        message: "Use string instead",
                        fixWith: "string",
                    },
                },
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
        node: {
            tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
        },
    },

    overrides: [
        {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json",
                createDefaultProgram: true,
            },
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "react/self-closing-comp": 2,

                "no-case-declarations": 2,
                "react/no-unescaped-entities": 2,
                "no-undef": "off",
                // typescript
                "node/no-unsupported-features/es-syntax": 0,

                "no-dupe-class-members": 0,
                "no-unused-vars": 0,
                "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

                "no-array-constructor": 0,
                "@typescript-eslint/no-array-constructor": 2,

                "@typescript-eslint/adjacent-overload-signatures": 2,
                "@typescript-eslint/no-namespace": [
                    2,
                    { allowDeclarations: true },
                ],
                "@typescript-eslint/prefer-namespace-keyword": 2,

                "@typescript-eslint/no-require-imports": 2,
                "@typescript-eslint/no-var-requires": 2,
                "@typescript-eslint/consistent-type-assertions": 2,
                "@typescript-eslint/no-unnecessary-type-assertion": 2,
                "@typescript-eslint/restrict-plus-operands": 2,
                "@typescript-eslint/unbound-method": [
                    "error",
                    {
                        ignoreStatic: true,
                    },
                ],
                "@typescript-eslint/no-extra-non-null-assertion": ["error"],
                "@typescript-eslint/no-floating-promises": ["error"],

                // react-hooks
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "warn",
                "react/jsx-key": 2,

                // react typescript
                "@typescript-eslint/explicit-function-return-type": "off",

                // es2018
                "prefer-object-spread": "error",

                "no-console": ["error", { allow: ["error", "warn", "info"] }],

                // for React.forwardRef
                "react/display-name": "off",
            },
        },
        {
            files: ["**/*.test.tsx", "**/*.test.ts", "**/__tests__/*.js"],
            env: {
                jest: true,
            },
            rules: {
                "no-invalid-this": 0,
            },
        },
        {
            files: ["*.js", "*.config.js", "config.js", "./scripts/*.js"],
            env: {
                node: true,
            },
        },
    ],
};
