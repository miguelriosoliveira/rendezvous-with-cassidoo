import { passDoors } from './passDoors';

describe('#passDoors', () => {
	// Initial: 1 1 1 1 1 1 1
	// Pass 1:  0 0 0 0 0 0 0
	// Pass 2:  0 1 0 1 0 1 0
	// Pass 3:  0 1 1 1 0 0 0
	it('should have 4 doors open after 3 passes', () => {
		const n = 7;
		const numberOfPasses = 3;
		expect(passDoors(n, numberOfPasses)).toBe(4);
	});

	// Initial: 1 1 1 1 1 1 1
	// Pass 1:  0 0 0 0 0 0 0
	// Pass 2:  0 1 0 1 0 1 0
	// Pass 3:  0 1 1 1 0 0 0
	// Pass 4:  0 1 1 0 0 0 0
	// Pass 5:  0 1 1 0 1 0 0
	// Pass 6:  0 1 1 0 1 1 0
	// Pass 7:  0 1 1 0 1 1 1
	it('should have 2 doors open after 7 passes', () => {
		const n = 7;
		const numberOfPasses = 7;
		expect(passDoors(n, numberOfPasses)).toBe(2);
	});
});
