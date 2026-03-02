import { describe, expect, it } from 'vitest'
import { majorityElement } from './majorityElement'

describe('majorityElement', () => {
	it('should return 2 for the first prompt example', () => {
		expect(majorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2])).toBe(2)
	})

	it('should return 3 for the second prompt example', () => {
		expect(majorityElement([3, 3, 4, 2, 3, 3, 1])).toBe(3)
	})

	it('should handle a single-element array', () => {
		expect(majorityElement([7])).toBe(7)
	})

	it('should handle majority element appearing in the first half', () => {
		expect(majorityElement([9, 9, 9, 2, 3])).toBe(9)
	})

	it('should handle majority element appearing in the second half', () => {
		expect(majorityElement([1, 2, 4, 4, 4, 4])).toBe(4)
	})

	it('should work with negative numbers', () => {
		expect(majorityElement([-1, -1, -1, 2, 3])).toBe(-1)
	})

	it('should work when majority is zero', () => {
		expect(majorityElement([0, 1, 0, 2, 0, 0, 3])).toBe(0)
	})

	it('should return the element when all entries are the same', () => {
		expect(majorityElement([5, 5, 5, 5, 5])).toBe(5)
	})

	it('should return null when input is empty', () => {
		expect(majorityElement([])).toBeNull()
	})
})
