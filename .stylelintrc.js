module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': '^([aA-zZ][aA-zZ0-9]*)(_|-[aA-zZ0-9]+)*$', // snake_case, kebab-case  https://stylelint.io/user-guide/regex/
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'scss/dollar-variable-pattern': [/^foo-/, {ignore: 'global'}],
  },
};