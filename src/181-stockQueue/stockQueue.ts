/**
 * You are given a snapshot of a queue of stocks that have changing prices coming in from a stream.
 * Remove the outdated stocks from the queue.
 *
 * Example:
 * $ snapshot = [
			{ sym: ‘GME’, cost: 280 },
			{ sym: ‘PYPL’, cost: 234 },
			{ sym: ‘AMZN’, cost: 3206 },
			{ sym: ‘AMZN’, cost: 3213 },
			{ sym: ‘GME’, cost: 325 }
		]
 * $ stockQueue(snapshot)
 * $ [{ sym: ‘PYPL’, cost: 234 },
			{ sym: ‘AMZN’, cost: 3213 },
			{ sym: ‘GME’, cost: 325 }]
 */

interface Stock {
	sym: string;
	cost: number;
}

export default function stockQueue(snapshot: Stock[]): Stock[] {
	const stockQueueUpdated: Stock[] = [];

	snapshot.forEach(stock => {
		const stockIndexFound = stockQueueUpdated.findIndex(
			stockInQueue => stockInQueue.sym === stock.sym && stockInQueue.cost < stock.cost,
		);
		if (stockIndexFound >= 0) {
			stockQueueUpdated.splice(stockIndexFound, 1);
		}
		stockQueueUpdated.push(stock);
	});

	return stockQueueUpdated;
}
