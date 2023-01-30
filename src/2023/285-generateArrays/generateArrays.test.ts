import { generateArrays } from './generateArrays';

describe('testing generateArrays', () => {
	it('should generate an array with 4 sub-arrays', () => {
		expect(generateArrays(4)).toStrictEqual([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]);
	});

	it('should generate an array with 1 sub-array', () => {
		expect(generateArrays(1)).toStrictEqual([[1]]);
	});

	it('should generate an array with 5 sub-arrays', () => {
		expect(generateArrays(5)).toStrictEqual([
			[1],
			[1, 2],
			[1, 2, 3],
			[1, 2, 3, 4],
			[1, 2, 3, 4, 5],
		]);
	});
});
