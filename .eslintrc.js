const SPELLCHECK_RULES = require('@alexlit/config-eslint/plugins/spellcheck')
  .rules['spellcheck/spell-checker'][1];

module.exports = {
  extends: ['./node_modules/@alexlit/lint-kit/.eslintrc.js'],

  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        ...SPELLCHECK_RULES,

        skipWords: [...SPELLCHECK_RULES.skipWords, 'maxerr'],
      },
    ],
  },
};
