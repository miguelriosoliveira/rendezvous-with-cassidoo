/*
Given an array where each element is the price of a given stock on that index's day,
choose a single day to buy a stock and a different day (in the future/later in the array)
to sell the stock to maximize your profit.
Return the maximum profit that you can get from a given input.
If you can't profit, return 0.

Example:

> maximumProfit([7,1,5,3,6,4])
> 5 // Buy on day 2, and sell on day 5, your profit = 6-1 = 5.
*/

export function maximumProfit(prices: number[]): number {
	let minPrice = Infinity;
	let maxProfit = 0;

	for (const price of prices) {
		minPrice = Math.min(minPrice, price);
		maxProfit = Math.max(maxProfit, price - minPrice);
	}

	return maxProfit;
}
