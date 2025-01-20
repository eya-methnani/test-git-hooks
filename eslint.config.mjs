import eslintPluginJest from 'eslint-plugin-jest';

export default [
    {
        files: ['*.js'], // Apply to all .js files
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        rules: {
            // Add your general rules here
        },
    },
    {
        files: ['*.test.js'], // Apply specifically to test files
        plugins: {
            jest: eslintPluginJest,
        },
        rules: {
            // Enable Jest rules for test files
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/valid-expect': 'error',
        },
        languageOptions: {
            globals: {
                test: true,
                expect: true,
            },
        },
    },
];
