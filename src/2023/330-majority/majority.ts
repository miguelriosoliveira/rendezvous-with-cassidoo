/*
Given an array of integers, return the majority element.
If there is no majority element, return if the array is majority even or odd numbers,
and if there is none, say so.

Example:

> majority([3,1,4,1])
> "1"

> majority([33,44,55,66,77])
> "Majority odds"

> majority([1,2,3,4])
> "No majority"
*/

type NumberStr = `${number}`;
type Parity = 'Majority odds' | 'Majority evens';

function getMajority<T extends string | number | symbol>(countMap: Record<T, number>) {
	const majorityCount = Object.values<number>(countMap).sort(
		(count1, count2) => count2 - count1,
	)[0];

	const majorityNumbers = (Object.entries(countMap) as Array<[T, number]>)
		.filter(([, count]) => count === majorityCount)
		.map(([number]) => number);

	return majorityNumbers;
}

export function majority(arr: number[]): NumberStr | Parity | 'No majority' {
	const { numberCountMap, parityMap } = arr.reduce<{
		numberCountMap: Record<NumberStr, number>;
		parityMap: Record<Parity, number>;
	}>(
		(acc, number) => {
			const numberKey: NumberStr = `${number}`;
			const parityKey: Parity = number % 2 === 0 ? 'Majority evens' : 'Majority odds';
			return {
				numberCountMap: {
					...acc.numberCountMap,
					[numberKey]: (acc.numberCountMap[numberKey] || 0) + 1,
				},
				parityMap: {
					...acc.parityMap,
					[parityKey]: acc.parityMap[parityKey] + 1,
				},
			};
		},
		{
			numberCountMap: {},
			parityMap: { 'Majority evens': 0, 'Majority odds': 0 },
		},
	);

	const majorityNumbers = getMajority<NumberStr>(numberCountMap);
	if (majorityNumbers.length === 1) {
		return majorityNumbers[0];
	}

	const majorityParities = getMajority(parityMap);
	if (majorityParities.length === 1) {
		return majorityParities[0];
	}

	return 'No majority';
}
