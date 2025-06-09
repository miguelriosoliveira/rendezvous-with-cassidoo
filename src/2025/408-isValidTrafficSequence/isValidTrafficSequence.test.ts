import { isValidTrafficSequence } from './isValidTrafficSequence';

describe('#isValidTrafficSequence', () => {
	it('returns true for a valid full cycle', () => {
		expect(isValidTrafficSequence(['red', 'green', 'yellow', 'red'])).toBe(true);
	});

	it('returns true for multiple valid cycles', () => {
		expect(isValidTrafficSequence(['red', 'green', 'yellow', 'red', 'green', 'yellow'])).toBe(true);
	});

	it('returns true for empty input', () => {
		expect(isValidTrafficSequence([])).toBe(true);
	});

	it('returns true for a single color', () => {
		expect(isValidTrafficSequence(['green'])).toBe(true);
	});

	it('returns false for invalid transition red -> yellow', () => {
		expect(isValidTrafficSequence(['red', 'yellow'])).toBe(false);
	});

	it('returns false for invalid transition green -> red', () => {
		expect(isValidTrafficSequence(['green', 'red'])).toBe(false);
	});

	it('returns false for invalid transition yellow -> green', () => {
		expect(isValidTrafficSequence(['yellow', 'green'])).toBe(false);
	});

	it('returns false for non-consecutive valid states', () => {
		expect(isValidTrafficSequence(['red', 'green', 'red'])).toBe(false);
	});

	it('returns false for repeated states', () => {
		expect(isValidTrafficSequence(['red', 'red', 'green'])).toBe(false);
	});
});
