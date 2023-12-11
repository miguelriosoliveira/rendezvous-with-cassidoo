import { majority } from './majority';

describe('#majority', () => {
	it('should return the majority element', () => {
		expect(majority([3, 1, 4, 1])).toBe('1');
	});

	it('should return "Majority odds" if there is a majority of odd numbers', () => {
		expect(majority([33, 44, 55, 66, 77])).toBe('Majority odds');
	});

	it('should return "Majority evens" if there is a majority of even numbers', () => {
		expect(majority([2, 4, 6, 8, 10, 12])).toBe('Majority evens');
	});

	it('should return "No majority" if there is no majority element', () => {
		expect(majority([1, 2, 3, 4])).toBe('No majority');
	});
});
