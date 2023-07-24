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

// export function maximumProfit(prices: number[]): number {
// 	let minPrice = Number.MAX_SAFE_INTEGER;
// 	let minPriceIndex = -1;
// 	prices.forEach((price, i) => {
// 		if (price < minPrice) {
// 			minPrice = price;
// 			minPriceIndex = i;
// 		}
// 	});
// 	let maxPriceFromMin = Number.MIN_SAFE_INTEGER;
// 	prices.slice(minPriceIndex).forEach((price, i) => {
// 		if (price > maxPriceFromMin) {
// 			maxPriceFromMin = price;
// 		}
// 	});
// 	return maxPriceFromMin - minPrice;
// }

export function maximumProfit(prices: number[]): number {
	return prices
		.map((price, i) => prices.slice(i).sort((a, b) => b - a)[0] - price)
		.sort((a, b) => b - a)[0];
}
