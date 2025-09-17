module.exports = require('@hugsmidjan/hxmstyle')({
  extends: ['plugin:@next/next/recommended'],
  env: {
    node: true,
    es2022: true,
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [{ name: 'next/link', message: 'Please use `@/comps/NextLink` instead.' }],
      },
    ],
    '@typescript-eslint/no-restricted-types': 'off',
  },
})
