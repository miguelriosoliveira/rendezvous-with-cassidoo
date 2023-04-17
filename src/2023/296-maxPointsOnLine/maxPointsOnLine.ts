/*
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example:

> maxPointsOnLine([[1,1], [3,2], [5,3], [4,1], [2,3], [1,4]])
> 4
*/

type Point = [number, number];

interface SlopeCountMap {
	[key: string]: number;
}

function getSlope([x1, y1]: Point, [x2, y2]: Point): number {
	if (x1 === x2) {
		return Number.POSITIVE_INFINITY;
	}
	return (y2 - y1) / (x2 - x1);
}

export function maxPointsOnLine(points: Point[]): number {
	const collinearCounts = points.map((p1, i) => {
		const slopeCountMap = points
			.filter((_, j) => j !== i)
			.map(p2 => getSlope(p1, p2))
			.reduce((countMap, slope) => {
				const slopeCount = countMap[slope] || 1;
				return { ...countMap, [slope]: slopeCount + 1 };
			}, {} as SlopeCountMap);
		return Math.max(...Object.values(slopeCountMap));
	});

	return Math.max(...collinearCounts);
}
