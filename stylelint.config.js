module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.bootcss.com/user-guide/rules/list/
  rules: {
    'color-function-notation': 'legacy',
  },
}
