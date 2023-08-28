/*
Write a function that takes in two strings and returns true if they are anagrams.
*/

class Stack<T> {
	stack: T[];

	constructor() {
		this.stack = [];
	}

	push(item: T) {
		this.stack.push(item);
	}

	pop() {
		return this.stack.pop();
	}

	size() {
		return this.stack.length;
	}

	isEmpty() {
		return this.size() === 0;
	}
}

export class QueueWithStacks<T> {
	stack1: Stack<T>;
	stack2: Stack<T>;

	constructor() {
		this.stack1 = new Stack<T>();
		this.stack2 = new Stack<T>();
	}

	enqueue(item: T) {
		this.stack1.push(item);
	}

	dequeue() {
		if (this.stack2.isEmpty()) {
			let item = this.stack1.pop();
			while (item) {
				this.stack2.push(item);
				item = this.stack1.pop();
			}
		}

		return this.stack2.pop();
	}

	size() {
		return this.stack1.size() + this.stack2.size();
	}

	isEmpty() {
		return this.stack1.isEmpty() && this.stack2.isEmpty();
	}
}
