import { doTasks } from './doTasks';

describe('#doTasks', () => {
	it('should return an empty array when no tasks are provided', () => {
		expect(doTasks([], 5)).toStrictEqual([]);
	});

	it('should return an empty array when timeToWork is 0', () => {
		const tasks = [
			{ name: 'Task 1', duration: 4 },
			{ name: 'Task 2', duration: 2 },
		];
		const timeToWork = 0;
		const result = doTasks(tasks, timeToWork);
		expect(result).toStrictEqual([]);
	});

	it('should return the task that exactly fits the available time', () => {
		const tasks = [
			{ name: 'Task 1', duration: 4 },
			{ name: 'Task 2', duration: 2 },
			{ name: 'Task 3', duration: 7 },
		];
		const timeToWork = 7;
		const result = doTasks(tasks, timeToWork);
		expect(result).toStrictEqual(['Task 1', 'Task 2']);
	});

	it('should return tasks that can be completed within the given time', () => {
		const tasks = [
			{ name: 'Task 1', duration: 4 },
			{ name: 'Task 2', duration: 2 },
			{ name: 'Task 3', duration: 7 },
			{ name: 'Task 4', duration: 5 },
			{ name: 'Task 5', duration: 1 },
			{ name: 'Task 6', duration: 3 },
		];
		const timeToWork = 6;
		const result = doTasks(tasks, timeToWork);
		expect(result).toStrictEqual(['Task 2', 'Task 5', 'Task 6']);
	});
});
