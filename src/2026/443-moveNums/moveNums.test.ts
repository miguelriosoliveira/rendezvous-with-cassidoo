import { moveNums } from './moveNums'

describe('moveNums', () => {
	it('should move all target numbers to the end - basic example', () => {
		const arr = [0, 2, 0, 3, 10]
		const result = moveNums(arr, 0)
		expect(result).toEqual([2, 3, 10, 0, 0])
	})

	it('should handle empty array', () => {
		const result = moveNums([], 5)
		expect(result).toEqual([])
	})

	it('should return same array when no target number exists', () => {
		const arr = [1, 2, 3, 4, 5]
		const result = moveNums(arr, 0)
		expect(result).toEqual([1, 2, 3, 4, 5])
	})

	it('should handle array with all target numbers', () => {
		const arr = [5, 5, 5, 5]
		const result = moveNums(arr, 5)
		expect(result).toEqual([5, 5, 5, 5])
	})

	it('should handle single element that matches', () => {
		const arr = [7]
		const result = moveNums(arr, 7)
		expect(result).toEqual([7])
	})

	it('should handle single element that does not match', () => {
		const arr = [7]
		const result = moveNums(arr, 3)
		expect(result).toEqual([7])
	})

	it('should maintain relative order of non-target elements', () => {
		const arr = [1, 0, 2, 0, 3, 0, 4]
		const result = moveNums(arr, 0)
		expect(result).toEqual([1, 2, 3, 4, 0, 0, 0])
	})

	it('should work with negative numbers', () => {
		const arr = [-1, 2, -1, 3, -1]
		const result = moveNums(arr, -1)
		expect(result).toEqual([2, 3, -1, -1, -1])
	})

	it('should move target at the beginning', () => {
		const arr = [0, 1, 2, 3]
		const result = moveNums(arr, 0)
		expect(result).toEqual([1, 2, 3, 0])
	})

	it('should move target at the end', () => {
		const arr = [1, 2, 3, 0]
		const result = moveNums(arr, 0)
		expect(result).toEqual([1, 2, 3, 0])
	})

	it('should handle target scattered throughout array', () => {
		const arr = [3, 0, 1, 0, 2, 0]
		const result = moveNums(arr, 0)
		expect(result).toEqual([3, 1, 2, 0, 0, 0])
	})

	it('should modify array in-place (same reference)', () => {
		const arr = [0, 2, 0, 3, 10]
		const result = moveNums(arr, 0)
		expect(result).toBe(arr) // Ensures it's the same object in memory
		expect(result).toEqual([2, 3, 10, 0, 0])
	})
})
