// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		clearMocks: true,
		dir: 'src/',
		coverage: {
			reporter: ['text', 'json', 'html', 'lcov'],
			include: ['src/'],
			exclude: ['src/2023/314-guessingGame/game.ts'],
		},
	},
});
