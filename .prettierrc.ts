module.exports = {
    tabWidth: 4,
    useTabs: false,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 100,
    singleQuote: false,
    semi: false,
    overrides: [
        {
            files: "*.json",
            options: {
                printWidth: 200,
            },
        },
    ],
    arrowParens: "always",
}