import stockQueue from './stockQueue';

describe('testing stockQueue', () => {
	it('should return stock queue updated', () => {
		const snapshot = [
			{ sym: 'GME', cost: 280 },
			{ sym: 'PYPL', cost: 234 },
			{ sym: 'AMZN', cost: 3206 },
			{ sym: 'AMZN', cost: 3213 },
			{ sym: 'GME', cost: 325 },
		];

		const stockQueueUpdated = stockQueue(snapshot);

		expect(stockQueueUpdated).toStrictEqual([
			{ sym: 'PYPL', cost: 234 },
			{ sym: 'AMZN', cost: 3213 },
			{ sym: 'GME', cost: 325 },
		]);
	});
});
