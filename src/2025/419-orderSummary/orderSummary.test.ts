import { orderSummary } from './orderSummary';

describe('#orderSummary', () => {
	it('returns empty object for no orders', () => {
		expect(orderSummary([])).toEqual({});
	});

	it('handles the provided example', () => {
		expect(
			orderSummary([
				{ table: 1, items: ['burger', 'fries'] },
				{ table: 2, items: ['burger', 'burger', 'fries'] },
				{ table: 1, items: ['salad'] },
				{ table: 2, items: ['fries'] },
			]),
		).toEqual({
			1: { burger: 1, fries: 1, salad: 1 },
			2: { burger: 2, fries: 2 },
		});
	});

	it('aggregates items across multiple entries per table', () => {
		expect(
			orderSummary([
				{ table: 3, items: ['burger', 'burger'] },
				{ table: 3, items: ['fries', 'salad', 'fries'] },
				{ table: 3, items: ['salad'] },
			]),
		).toEqual({
			3: { burger: 2, fries: 2, salad: 2 },
		});
	});

	it('supports multiple tables with disjoint items', () => {
		expect(
			orderSummary([
				{ table: 4, items: ['fries'] },
				{ table: 5, items: ['burger', 'burger', 'burger'] },
				{ table: 6, items: ['salad', 'salad'] },
				{ table: 4, items: ['fries', 'burger'] },
			]),
		).toEqual({
			4: { fries: 2, burger: 1 },
			5: { burger: 3 },
			6: { salad: 2 },
		});
	});

	it('handles a single order with repeated items in one entry', () => {
		expect(
			orderSummary([
				{ table: 8, items: ['burger', 'burger', 'burger', 'fries', 'fries', 'salad'] },
			]),
		).toEqual({
			8: { burger: 3, fries: 2, salad: 1 },
		});
	});
});
