module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true,
		tsconfigRootDir: __dirname,
	},
	extends: [
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
	},
};
