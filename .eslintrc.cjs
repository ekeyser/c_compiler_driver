module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        jest: true,
        node: true,
    },
    rules: {
        indent: ['warn', 4, {'SwitchCase': 1}],
        'keyword-spacing': ['warn'],
    },
}