import { combineStrings } from './combineStrings';

describe('#combineStrings', () => {
	it('should combine to a max of 5', async () => {
		const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		const n = 5;
		expect(combineStrings(arr, n)).toStrictEqual(['a b c', 'd e f', 'g']);
	});

	it('should combine to a max of 12', async () => {
		const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		const n = 12;
		expect(combineStrings(arr, n)).toStrictEqual(['a b c d e f', 'g']);
	});

	it('should combine to a max of 13', async () => {
		const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		const n = 13;
		expect(combineStrings(arr, n)).toStrictEqual(['a b c d e f g']);
	});

	it('should combine to a max of 20', async () => {
		const arr = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'];
		const n = 20;
		expect(combineStrings(arr, n)).toStrictEqual(['alpha beta gamma', 'delta epsilon']);
	});
});
