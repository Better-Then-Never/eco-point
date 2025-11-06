// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      '@typescript-eslint/no-implicit-any-catch': ['error', { allowExplicitAny: true }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }
)