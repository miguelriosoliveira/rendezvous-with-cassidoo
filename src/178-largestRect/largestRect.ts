/**
 * Given a n x m binary matrix filled with 0s and 1s,
 * find the largest rectangle containing only 1s and return its area.
 *
 * Example:
 * $ matrix =
      [
        [“1”,”0”,”1”,”0”,”0”],
        [“1”,”0”,”1”,”1”,”1”],
        [“1”,”1”,”0”,”1”,”1”],
        [“1”,”0”,”0”,”1”,”0”]
      ]
 * $ largestRect(matrix)
 * $ 4
 */

import maxHistogramArea from './maxHistogramArea';

export default function largestRect(matrix: string[][]): number {
	let maxArea = 0;
	const nCols = matrix[0].length;
	const auxArray = [...Array(nCols)].map(() => 0);

	matrix.forEach(row => {
		row.forEach((item, index) => {
			if (item === '1') {
				auxArray[index] += 1;
			} else {
				auxArray[index] = 0;
			}
		});

		// console.log({ auxArray });

		const histogramArea = maxHistogramArea(auxArray);

		// console.log({ histogramArea });

		if (histogramArea > maxArea) {
			maxArea = histogramArea;
		}
	});

	return maxArea;
}
