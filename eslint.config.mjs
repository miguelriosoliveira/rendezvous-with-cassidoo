import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default [
	includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
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
