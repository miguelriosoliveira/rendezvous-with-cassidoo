import { getRandomInt } from './getRandomInt';

describe('#getRandomInt', () => {
	const min = 1;
	const max = 10;

	it('should return a number between min and max', { repeats: 100 }, () => {
		expect(getRandomInt(min, max)).greaterThanOrEqual(min).lessThanOrEqual(max);
	});

	it('should make sure to return the lower bound', { retry: 100 }, () => {
		expect(getRandomInt(min, max)).toBe(min);
	});

	it('should make sure to return the upper bound', { retry: 100 }, () => {
		expect(getRandomInt(min, max)).toBe(max);
	});
});
