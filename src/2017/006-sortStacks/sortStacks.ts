/*
Write 2 functions that sort a stack
(one function with the smallest items on top, the other with the largest items on top).

Try to do this one using only stacks, no other things like arrays, lists, or queues.
You have access to the functions pop, peek, push, and isEmpty.
*/

export class Stack<T> {
	private readonly stack: T[];

	constructor() {
		this.stack = [];
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack.at(-1);
	}

	push(item: T) {
		this.stack.push(item);
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}

type OrderBy = 'ASC' | 'DESC';

const ORDERBY_MAP = {
	ASC<T>(a: T, b: T) {
		return a < b;
	},
	DESC<T>(a: T, b: T) {
		return a > b;
	},
};

function sortStack<T>(stack: Stack<T>, orderBy: OrderBy): Stack<T> {
	const tempStack = new Stack<T>();
	const orderByFunc = ORDERBY_MAP[orderBy];

	while (!stack.isEmpty()) {
		const temp = stack.pop() as T;
		let top = tempStack.peek();
		while (top && orderByFunc(top, temp)) {
			stack.push(tempStack.pop() as T);
			top = tempStack.peek();
		}
		tempStack.push(temp);
	}

	while (!tempStack.isEmpty()) {
		stack.push(tempStack.pop() as T);
	}

	return stack;
}

export function sortStackSmallestOnTop<T>(stack: Stack<T>): Stack<T> {
	return sortStack(stack, 'DESC');
}

export function sortStackLargestOnTop<T>(stack: Stack<T>): Stack<T> {
	return sortStack(stack, 'ASC');
}
