module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'import/no-extraneous-dependencies': 0,
		'no-plusplus': 0,
		'no-param-reassign': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		'react/button-has-type': 0,
		'react/require-default-props': 0,
		'react-hooks/exhaustive-deps': 0,
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'': 'never',
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
