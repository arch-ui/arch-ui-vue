const prettierConfig = require('@arch-design/arch-ui-lint-config/prettier');
/**
 * @type {import("prettier").Config}
 */
module.exports = {
  ...prettierConfig,
  printWidth: 80,
};
