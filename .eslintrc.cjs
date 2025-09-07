module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    settings: {
        react: { version: 'detect' },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier', // must be last to disable ESLint rules that conflict with Prettier
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', '@typescript-eslint'],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
    },
};
