module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:cypress/recommended',
    // 'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint'
  ],
  plugins: ['cypress'],
  // add your custom rules here
  // rules: {},
  globals: {
    cy: true,
  },
  // parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreProperties: true,
        ignoreParameters: true,
      },
    ],
    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     "selector": "interface",
    //     "format": ["PascalCase"],
    //     "custom": {
    //       "regex": "^I[A-Z]",
    //       "match": true
    //     }
    //   }
    // ]
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
}
