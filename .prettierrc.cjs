module.exports = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
    importOrder: [
        '^react$', // React always first
        '<THIRD_PARTY_MODULES>', // then npm packages
        '^@/components/(.*)$', // your aliases
        '^@/(.*)$', // other aliases
        '^[./]', // relative imports last
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
};
