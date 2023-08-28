import { getRandomInt } from './getRandomInt';

describe('#getRandomInt', () => {
	const min = 1;
	const max = 10;

	it(
		'should return a number between min and max',
		() => {
			expect(getRandomInt(min, max)).greaterThanOrEqual(min).lessThanOrEqual(max);
		},
		{ repeats: 100 },
	);

	it(
		'should make sure to return the lower bound',
		() => {
			expect(getRandomInt(min, max)).toBe(min);
		},
		{ retry: 100 },
	);

	it(
		'should make sure to return the upper bound',
		() => {
			expect(getRandomInt(min, max)).toBe(max);
		},
		{ retry: 100 },
	);
});
