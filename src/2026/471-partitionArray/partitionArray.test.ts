import { describe, expect, it } from 'vitest';
import { partitionArray } from './partitionArray';

describe('partitionArray', () => {
	it('should match the prompt example', () => {
		expect(partitionArray([0, 3, 2, 1, 4, 0, 7])).toEqual([3, 1, 7, 2, 4, 0, 0]);
	});

	it('should return an empty array when given an empty array', () => {
		expect(partitionArray([])).toEqual([]);
	});

	it('should return a single-element array unchanged', () => {
		expect(partitionArray([5])).toEqual([5]);
		expect(partitionArray([8])).toEqual([8]);
		expect(partitionArray([0])).toEqual([0]);
	});

	it('should keep odd numbers first, then non-zero evens, then zeros', () => {
		expect(partitionArray([4, 0, 9, 2, 1, 0, 6, 3])).toEqual([9, 1, 3, 4, 2, 6, 0, 0]);
	});

	it('should preserve relative order within each group', () => {
		expect(partitionArray([7, 5, 3, 9])).toEqual([7, 5, 3, 9]);
		expect(partitionArray([8, 4, 2, 6])).toEqual([8, 4, 2, 6]);
		expect(partitionArray([0, 0, 0])).toEqual([0, 0, 0]);
	});

	it('should treat zeros as their own group, not as even numbers', () => {
		expect(partitionArray([2, 0, 4])).toEqual([2, 4, 0]);
		expect(partitionArray([0, 1, 0])).toEqual([1, 0, 0]);
	});

	it('should handle negative odds and evens', () => {
		expect(partitionArray([-3, -2, 0, -1, 4])).toEqual([-3, -1, -2, 4, 0]);
	});

	it('should handle a mix of positive and negative numbers with zeros', () => {
		expect(partitionArray([-4, 3, 0, -5, 2, 0, 1])).toEqual([3, -5, 1, -4, 2, 0, 0]);
	});

	it('should return a new array without mutating the input', () => {
		const input = [0, 3, 2, 1, 4, 0, 7];
		const result = partitionArray(input);

		expect(result).toEqual([3, 1, 7, 2, 4, 0, 0]);
		expect(result).not.toBe(input);
		expect(input).toEqual([0, 3, 2, 1, 4, 0, 7]);
	});
});
