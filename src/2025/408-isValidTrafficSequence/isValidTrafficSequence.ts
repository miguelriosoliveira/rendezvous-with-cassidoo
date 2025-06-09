/*
Given an array of strings representing a sequence of traffic light states ("red" for stop, "green"
for go, "yellow" for slow), write a function that returns true if the sequence could represent a
valid state machine for a standard traffic light. The only valid transitions are: red to green,
green to yellow, and yellow to red.

Example:

> isValidTrafficSequence(["red", "green", "yellow", "red", "green"])
> true

> isValidTrafficSequence(["red", "yellow", "green"]);
> false

> isValidTrafficSequence([])
> true
*/

type TrafficLight = 'green' | 'yellow' | 'red';

const stateMachine1: Record<TrafficLight, TrafficLight> = {
	green: 'yellow',
	yellow: 'red',
	red: 'green',
};

export function isValidTrafficSequence(lights: TrafficLight[]): boolean {
	return lights.slice(0, -1).every((light, i) => lights[i + 1] === stateMachine1[light]);
}
