/*
Write a function that determines if an array of numbers is a bitonic sequence.
A bitonic sequence is a sequence of numbers in which the numbers are in increasing order,
and after a certain point, they start decreasing.
Extra credit: print the peak number in the sequence!

Example:

> isBitonic([1,2,3,2])
> true // extra credit: 3

> isBitonic([1,2,3])
> false

> isBitonic([3,4,5,5,5,2,1])
> true // extra credit: 5
*/

function checkPeak(number: number, i: number, array: number[]): boolean {
	return number >= array[i - 1] && number > array[i + 1];
}

export function isBitonic(arr: number[]): { isBitonic: boolean; peak: number | null } {
	const peakIndex = arr.findIndex(checkPeak);
	const nextPeak = arr.slice(peakIndex + 1).find(checkPeak);

	const hasSinglePeak = !nextPeak && peakIndex >= 1;
	const peak = hasSinglePeak ? arr[peakIndex] : null;
	return { isBitonic: !!peak, peak };
}
