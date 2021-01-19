import canToggle, { Network } from './canToggle';

describe('testing canToggle', () => {
	it('should return true', () => {
		const network: Network = {
			switch: [0, 1],
			hub: [
				[2, 1],
				[2, 5],
			],
			light: [1, 6],
		};

		const isTogglable = canToggle(network);

		expect(isTogglable).toBe(true);
	});

	it('should return false (network disconnected at some point)', () => {
		const network: Network = {
			switch: [0, 1],
			hub: [
				[2, 1],
				[7, 5],
			],
			light: [1, 6],
		};

		const isTogglable = canToggle(network);

		expect(isTogglable).toBe(false);
	});

	it('should return false (light too far)', () => {
		const network: Network = {
			switch: [0, 1],
			hub: [
				[2, 1],
				[2, 5],
			],
			light: [7, 6],
		};

		const isTogglable = canToggle(network);

		expect(isTogglable).toBe(false);
	});
});
