import { canToggle, Network } from './canToggle';

describe('#canToggle', () => {
	it('should return true (light is reachable)', () => {
		const network: Network = {
			switch: [0, 1],
			hub: [
				[2, 1],
				[2, 5],
			],
			light: [1, 6],
		};

		const isToggleable = canToggle(network);

		expect(isToggleable).toBe(true);
	});

	it('should return true (light is exactly 5 units away)', () => {
		const network: Network = {
			switch: [0, 1],
			hub: [],
			light: [0, 6],
		};

		const isToggleable = canToggle(network);

		expect(isToggleable).toBe(true);
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

		const isToggleable = canToggle(network);

		expect(isToggleable).toBe(false);
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

		const isToggleable = canToggle(network);

		expect(isToggleable).toBe(false);
	});
});
