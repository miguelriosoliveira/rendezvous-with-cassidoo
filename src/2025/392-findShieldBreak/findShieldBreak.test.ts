import { findShieldBreak } from './findShieldBreak';

describe('#findShieldBreak', () => {
	it('returns the correct index when shield breaks', () => {
		expect(findShieldBreak([10, 20, 30, 40], 50)).toBe(2);
		expect(findShieldBreak([50], 30)).toBe(0);
		expect(findShieldBreak([25, 25, 10], 40)).toBe(1);
	});

	it('returns -1 when the shield survives all attacks', () => {
		expect(findShieldBreak([1, 2, 3, 4], 20)).toBe(-1);
		expect(findShieldBreak([], 100)).toBe(-1);
		expect(findShieldBreak([10, 5, 3], 20)).toBe(-1);
	});

	it('handles edge cases', () => {
		expect(findShieldBreak([100], 100)).toBe(-1); // Exact shield match
		expect(findShieldBreak([0, 0, 100], 99)).toBe(2); // Damage after initial 0s
		expect(findShieldBreak([30, 20, 10], 30)).toBe(1); // Breaks at the second attack
		expect(findShieldBreak([5, 10, 5, 10, 1], 30)).toBe(4); // Breaks at last attack
	});
});
