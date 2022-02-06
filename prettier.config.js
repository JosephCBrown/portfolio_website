const { setHttpAgentOptions } = require("next/dist/server/config")

const options = {
    ArrowParens: 'avoid',
    singleQuote: true,
    bracketSpacing: true,
    endOfLine: 'lf',
    semi: false,
    tabWidth: 2,
    trailingComma: 'none'
}

module.exports = options
