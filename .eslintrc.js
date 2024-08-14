module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended', // Используй Vue 3
    'eslint:recommended',
    '@vue/typescript/recommended', // Если используется TypeScript
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'vue/script-setup-uses-vars': 'error', // Чтобы ESLint корректно распознавал переменные в script setup
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
