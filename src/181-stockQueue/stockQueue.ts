/*
You are given a snapshot of a queue of stocks that have changing prices coming in from a stream.
Remove the outdated stocks from the queue.

Example:
$ snapshot = [
  { sym: ‘GME’, cost: 280 },
  { sym: ‘PYPL’, cost: 234 },
  { sym: ‘AMZN’, cost: 3206 },
  { sym: ‘AMZN’, cost: 3213 },
  { sym: ‘GME’, cost: 325 }
]
$ stockQueue(snapshot)
$ [{ sym: ‘PYPL’, cost: 234 },
   { sym: ‘AMZN’, cost: 3213 },
   { sym: ‘GME’, cost: 325 }]
*/

export interface Stock {
	sym: string;
	cost: number;
}

interface StockDict {
	[index: string]: number;
}

export default function stockQueue(snapshot: Stock[]): Stock[] {
	const stockDict: StockDict = {};

	snapshot.forEach(stock => {
		if (stockDict[stock.sym]) {
			delete stockDict[stock.sym];
		}
		stockDict[stock.sym] = stock.cost;
	});

	return Object.entries(stockDict).map(([sym, cost]) => ({ sym, cost }));
}
