import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default [
	pluginJs.configs.recommended,
	...tsEslint.configs.recommended,
	{
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
