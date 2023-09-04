import { rotateArray } from './rotateArray'; // Import the rotateArray function

describe('#rotateArray', () => {
	it('should rotate the array to the right by 2 places', () => {
		const inputArray = [1, 2, 3, 4, 5];
		const n = 2;
		const result = rotateArray(inputArray, n);
		expect(result).toStrictEqual([4, 5, 1, 2, 3]);
	});

	it('should rotate the array to the left by 3 places', () => {
		const inputArray = [1, 2, 3, 4, 5, 6];
		const n = -3; // Negative value means rotate to the left
		const result = rotateArray(inputArray, n);
		expect(result).toStrictEqual([4, 5, 6, 1, 2, 3]);
	});

	it('should not rotate the array', () => {
		const inputArray = [1, 2, 3, 4, 5, 6];
		const n = 0;
		const result = rotateArray(inputArray, n);
		expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
	});

	it('should handle rotating an empty array', () => {
		const result = rotateArray([], 5);
		expect(result).toStrictEqual([]);
	});

	it('should handle rotating with n larger than array length', () => {
		const inputArray = [1, 2, 3, 4, 5];
		const n = 7; // Rotating by more than the array length should wrap around
		const result = rotateArray(inputArray, n);
		expect(result).toStrictEqual([4, 5, 1, 2, 3]);
	});

	it('should handle rotating with n as a negative value larger than array length', () => {
		const inputArray = [1, 2, 3, 4, 5];
		const n = -12; // Negative value larger than array length should wrap around
		const result = rotateArray(inputArray, n);
		expect(result).toStrictEqual([4, 5, 1, 2, 3]);
	});
});
