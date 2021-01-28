module.exports = {
    root:true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project:'tsconfig.json',
        sourceType: 'module'
      },
    plugins: [
        '@typescript-eslint',
    ],
    env:{
        node:true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-types': 'off',
    }
};