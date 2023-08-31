/*
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example:

> maxPointsOnLine([[1,1], [3,2], [5,3], [4,1], [2,3], [1,4]])
> 4
*/

type Point = [number, number];

type SlopeCountMap = Record<string, number>;

function getSlope([x1, y1]: Point, [x2, y2]: Point): number {
	return (y2 - y1) / (x2 - x1);
}

export function maxPointsOnLine(points: Point[]): number {
	const collinearCounts = points.map((p1, i) => {
		const slopeCountMap = points
			.map(p2 => getSlope(p1, p2))
			.reduce<SlopeCountMap>((countMap, slope) => {
				const slopeCount = countMap[slope] || 1;
				return { ...countMap, [slope]: slopeCount + 1 };
			}, {});
		return Math.max(...Object.values(slopeCountMap));
	});

	return Math.max(...collinearCounts);
}
