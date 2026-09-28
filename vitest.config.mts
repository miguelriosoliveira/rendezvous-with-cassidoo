import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		clearMocks: true,
		dir: 'src/',
		isolate: false,
		coverage: {
			reporter: ['text', 'json', 'html', 'lcov'],
			include: ['src/**/*.ts'],
			exclude: ['src/2023/314-guessingGame/game.ts'],
		},
	},
});
