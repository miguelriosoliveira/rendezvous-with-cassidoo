
/*
Given an integer array and a number n,
move all of the ns to the end of the array while maintaining the relative order of the non-ns.
Bonus: do this without making a copy of the array!

Example:

$ moveNums([0,2,0,3,10], 0)
$ [2,3,10,0,0]

*/

export function moveNums(arr: number[], n: number): number[] {
	arr.forEach((num, i, array) => {
		if (num !== n) return;
		array.splice(i, 1);
		array.push(num);
	});
	return arr;
}

