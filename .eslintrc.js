module.exports = {
    env: {
        es6: true,
        amd: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            env: {
                browser: true,
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:react/recommended",
                "plugin:react-hooks/recommended",
                "prettier/@typescript-eslint",
                "prettier/react",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: "./tsconfig.eslint.json",
            },
            rules: {
                "react/no-unknown-property": ["error", { ignore: ["class"] }],
            },
            settings: {
                react: {
                    pragma: "h",
                },
            },
        },
    ],
};
