/*
Given a list of tasks, where each task has a duration, and a limited amount of available time to work,
write a function to return the tasks that can be completed within the given time,
without re-ordering the original list of tasks.
Try to maximize the number of tasks that can be completed!

Example:

const tasks = [
  { name: 'Task 1', duration: 4 },
  { name: 'Task 2', duration: 2 },
  { name: 'Task 3', duration: 7 },
  { name: 'Task 4', duration: 5 },
  { name: 'Task 5', duration: 1 },
  { name: 'Task 6', duration: 3 }
];

const timeToWork = 6;

> doTasks(tasks, timeToWork)
> ['Task 2', 'Task 5', 'Task 6']
*/

interface Task {
	name: string;
	duration: number;
}

export function doTasks(tasks: Task[], timeToWork: number): string[] {
	const indexedTasks = tasks.map<[number, Task]>((task, i) => [i, task]);
	const sortedByDuration = indexedTasks.slice().sort(([, t1], [, t2]) => t1.duration - t2.duration);

	const selectedTasks: [number, Task][] = [];
	let totalDuration = 0;

	for (const indexedTask of sortedByDuration) {
		const [, task] = indexedTask;
		if (totalDuration + task.duration <= timeToWork) {
			selectedTasks.push(indexedTask);
			totalDuration += task.duration;
		}
	}

	return selectedTasks
		.sort(([originalIndex1], [originalIndex2]) => originalIndex1 - originalIndex2)
		.map(([, task]) => task.name);
}
