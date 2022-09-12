/*
Remember the bouncing DVD logo?
Given the dimensions of the logo, its initial coordinates, and the size of a screen,
write a function that will determine if its next collision will hit the corner of the screen.
Assume it is initially moving southeast with a slope of -1.
Extra credit, figure out how many bounces/collisions it will take to hit a corner!

Example:

let dimensions = [5,5]
let initialCoordinates = [0,0] // you decide which part of the logo the coords map to
let screenSize = [100,100]

> cornerHit(dimensions, initialCoordinates, screenSize)
> true // in one collision

> cornerHit(dimensions, [45,70], [400,200])
> false
*/

type Dimensions = [number, number];
type Point = [number, number];

interface CornerHitProps {
	dimensions: Dimensions;
	initialCoordinates: Point;
	screenSize: Dimensions;
}
export function cornerHit({
	dimensions: [width, height],
	initialCoordinates,
	screenSize: [screenCornerX, screenCornerY],
}: CornerHitProps): boolean {
	const [x, y] = initialCoordinates;
	const [logoCornerX, logoCornerY] = [x + width, y + height];
	return screenCornerX - logoCornerX === screenCornerY - logoCornerY;
}
