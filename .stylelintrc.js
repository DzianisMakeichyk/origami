const properties = require('known-css-properties').all;

module.exports = {
  plugins: ['stylelint-order'],
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  rules: {
    'declaration-empty-line-before': null,
    'order/properties-order': [...properties, '-styled-mixin0'],
  }
}
