import { QueueWithStacks } from './queueWithStacks';

describe('#queueWithStacks', () => {
	it('should enqueue and dequeue elements correctly', () => {
		const queue = new QueueWithStacks();

		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.dequeue()).toBe(1);
		expect(queue.dequeue()).toBe(2);

		queue.enqueue(4);

		expect(queue.dequeue()).toBe(3);
		expect(queue.dequeue()).toBe(4);
		expect(queue.dequeue()).toBe(undefined);
	});

	it('should correctly return the size of the queue', () => {
		const queue = new QueueWithStacks();

		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.size()).toBe(3);

		queue.dequeue();

		expect(queue.size()).toBe(2);

		queue.enqueue(4);

		expect(queue.size()).toBe(3);

		queue.dequeue();
		queue.dequeue();
		queue.dequeue();

		expect(queue.size()).toBe(0);
	});

	it('should correctly return whether the queue is empty', () => {
		const queue = new QueueWithStacks();

		expect(queue.isEmpty()).toBe(true);

		queue.enqueue(1);

		expect(queue.isEmpty()).toBe(false);

		queue.dequeue();

		expect(queue.isEmpty()).toBe(true);
	});
});
