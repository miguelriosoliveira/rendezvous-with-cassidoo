
/*
Find the majority element in an array (one that appears more than n/2 times) in O(n) time and O(1)
space without hashmaps.
Hint: the Boyer-Moore Voting algorithm might help if you can't figure this one out!

Example:

> majorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2])
2

> majorityElement([3, 3, 4, 2, 3, 3, 1])
3
*/

export function majorityElement(arr: number[]): number | null {
	let candidate: number | null = null;
	let votes = 0;

	arr.forEach(num => {
		if (votes === 0) {
			candidate = num;
			votes = 1;
			return;
		}

		votes += (num === candidate) ? 1 : -1;
	});

	return candidate;
}

