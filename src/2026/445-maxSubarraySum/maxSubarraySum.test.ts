import { describe, expect, it } from 'vitest'
import { maxSubarraySum } from './maxSubarraySum'

describe('maxSubarraySum', () => {
	it('should return 6 for the classic mixed example', () => {
		expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
	})

	it('should handle a single-element array', () => {
		expect(maxSubarraySum([5])).toBe(5)
	})

	it('should return the largest value when all elements are negative', () => {
		expect(maxSubarraySum([-1, -2, -3, -4])).toBe(-1)
	})

	it('should return full-array sum when it is optimal', () => {
		expect(maxSubarraySum([5, 4, -1, 7, 8])).toBe(23)
	})

	it('should handle all zeros', () => {
		expect(maxSubarraySum([0, 0, 0])).toBe(0)
	})

	it('should handle empty array', () => {
		expect(maxSubarraySum([])).toBe(0)
	})

	it('should find best subarray in the middle', () => {
		expect(maxSubarraySum([-10, 3, 4, -2, 5, -20])).toBe(10)
	})

	it('should reset after large negative dips', () => {
		expect(maxSubarraySum([8, -19, 5, -4, 20])).toBe(21)
	})

	it('should choose a single positive value over surrounding negatives', () => {
		expect(maxSubarraySum([-5, -1, 7, -10, -2])).toBe(7)
	})
})
