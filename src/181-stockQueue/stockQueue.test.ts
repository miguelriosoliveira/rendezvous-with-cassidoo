import stockQueue, { Stock } from './stockQueue';

describe('testing stockQueue', () => {
	it('should return stock queue with 3 stocks', () => {
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

	it('should return stock queue with 3 stocks with GME in first place', () => {
		const snapshot = [
			{ sym: 'GME', cost: 280 },
			{ sym: 'PYPL', cost: 234 },
			{ sym: 'AMZN', cost: 3206 },
			{ sym: 'AMZN', cost: 300 },
		];

		const stockQueueUpdated = stockQueue(snapshot);

		expect(stockQueueUpdated).toStrictEqual([
			{ sym: 'GME', cost: 280 },
			{ sym: 'PYPL', cost: 234 },
			{ sym: 'AMZN', cost: 300 },
		]);
	});

	it('should return stock queue with 1 stock', () => {
		const snapshot = [
			{ sym: 'AMZN', cost: 280 },
			{ sym: 'AMZN', cost: 234 },
			{ sym: 'AMZN', cost: 3206 },
			{ sym: 'AMZN', cost: 3213 },
			{ sym: 'AMZN', cost: 3 },
		];

		const stockQueueUpdated = stockQueue(snapshot);

		expect(stockQueueUpdated).toStrictEqual([{ sym: 'AMZN', cost: 3 }]);
	});

	it('should return empty stock queue', () => {
		const snapshot = [] as Stock[];
		const stockQueueUpdated = stockQueue(snapshot);
		expect(stockQueueUpdated).toStrictEqual([]);
	});
});
