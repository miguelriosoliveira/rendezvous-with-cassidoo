/**
 * You’re trying to build an IoT mesh network.
 * Signals can only travel the maximum of 5 units.
 * You’re given coordinates for the switch, the light, and the mesh hubs (which capture and forward signals).
 * Return true if the switch can successfully toggle the light.
 *
 * Example:
 * let network = { switch: [0,1], hub: [[2,1], [2,5]], light: [1,6] }
 * $ canToggle(network)
 * $ true
 */

const MAX_DISTANCE = 5;

type Point = [number, number];

export interface Network {
	switch: Point;
	hub: Point[];
	light: Point;
}

function pointsDistance([x1, y1]: Point, [x2, y2]: Point) {
	return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function canSee(p1: Point, p2: Point) {
	return pointsDistance(p1, p2) <= MAX_DISTANCE;
}

export default function canToggle({ switch: switch_, hub, light }: Network): boolean {
	if (canSee(switch_, light)) {
		return true;
	}

	if (
		hub.length > 0 &&
		canSee(switch_, hub[0]) &&
		canToggle({ switch: hub[0], hub: hub.slice(1), light })
	) {
		return true;
	}

	return false;
}
