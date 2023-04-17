const prettierConfig = require('@ntnyq/prettier-config')

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...prettierConfig,
  embeddedLanguageFormatting: 'auto',
}
