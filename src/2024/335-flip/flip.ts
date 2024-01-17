/*
Given a 2D array, write a function that flips it vertically or horizontally.

Example:

let array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

> flip(array, 'horizontal')
> [
	[3, 2, 1],
	[6, 5, 4],
	[9, 8, 7]
]

> flip(array, 'vertical')
> [
	[7, 8, 9],
	[4, 5, 6],
	[1, 2, 3]
]
*/

type Matrix = number[][];

function flipHorizontally(matrix: Matrix): Matrix {
	return matrix.map(row => row.toReversed());
}

function transpose(matrix: Matrix) {
	const transposed: Matrix = [];
	for (let i = 0; i < matrix.length; i++) {
		const column: number[] = [];

		for (let j = 0; j < matrix[i].length; j++) {
			column.push(matrix[j][i]);
		}

		transposed.push(column);
	}
	return transposed;
}

export function flip(matrix: Matrix, direction: 'horizontal' | 'vertical'): Matrix {
	if (direction === 'horizontal') {
		return flipHorizontally(matrix);
	}
	return transpose(flipHorizontally(transpose(matrix)));
}
