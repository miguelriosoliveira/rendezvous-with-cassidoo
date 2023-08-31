import { sortStackSmallestOnTop, sortStackLargestOnTop, Stack } from './sortStacks';

describe('#sortStacks', () => {
	describe('#sortStackSmallestOnTop', () => {
		it('sorts a stack with largest items on top', () => {
			const stack = new Stack();
			stack.push(34);
			stack.push(3);
			stack.push(31);
			stack.push(98);
			stack.push(92);
			stack.push(23);

			const sortedStack = sortStackSmallestOnTop(stack);

			expect(sortedStack.pop()).toBe(3);
			expect(sortedStack.pop()).toBe(23);
			expect(sortedStack.pop()).toBe(31);
			expect(sortedStack.pop()).toBe(34);
			expect(sortedStack.pop()).toBe(92);
			expect(sortedStack.pop()).toBe(98);
			expect(sortedStack.pop()).toBeUndefined();
		});

		it('handles an empty stack', () => {
			const stack = new Stack();
			const sortedStack = sortStackSmallestOnTop(stack);
			expect(sortedStack.pop()).toBeUndefined();
		});

		it('handles a stack with a single element', () => {
			const stack = new Stack();
			stack.push(42);

			const sortedStack = sortStackSmallestOnTop(stack);

			expect(sortedStack.pop()).toBe(42);
			expect(sortedStack.pop()).toBeUndefined();
		});

		it('handles a stack with duplicate values', () => {
			const stack = new Stack();
			stack.push(5);
			stack.push(2);
			stack.push(8);
			stack.push(2);
			stack.push(5);
			stack.push(8);

			const sortedStack = sortStackSmallestOnTop(stack);

			expect(sortedStack.pop()).toBe(2);
			expect(sortedStack.pop()).toBe(2);
			expect(sortedStack.pop()).toBe(5);
			expect(sortedStack.pop()).toBe(5);
			expect(sortedStack.pop()).toBe(8);
			expect(sortedStack.pop()).toBe(8);
			expect(sortedStack.pop()).toBeUndefined();
		});
	});

	describe('#sortStackLargestOnTop', () => {
		it('sorts a stack with largest items on top', () => {
			const stack = new Stack();
			stack.push(34);
			stack.push(3);
			stack.push(31);
			stack.push(98);
			stack.push(92);
			stack.push(23);

			const sortedStack = sortStackLargestOnTop(stack);

			expect(sortedStack.pop()).toBe(98);
			expect(sortedStack.pop()).toBe(92);
			expect(sortedStack.pop()).toBe(34);
			expect(sortedStack.pop()).toBe(31);
			expect(sortedStack.pop()).toBe(23);
			expect(sortedStack.pop()).toBe(3);
			expect(sortedStack.pop()).toBeUndefined();
		});

		it('handles an empty stack', () => {
			const stack = new Stack();
			const sortedStack = sortStackLargestOnTop(stack);
			expect(sortedStack.pop()).toBeUndefined();
		});

		it('handles a stack with a single element', () => {
			const stack = new Stack();
			stack.push(42);

			const sortedStack = sortStackLargestOnTop(stack);

			expect(sortedStack.pop()).toBe(42);
			expect(sortedStack.pop()).toBeUndefined();
		});

		it('handles a stack with duplicate values', () => {
			const stack = new Stack();
			stack.push(5);
			stack.push(2);
			stack.push(8);
			stack.push(2);
			stack.push(5);
			stack.push(8);

			const sortedStack = sortStackLargestOnTop(stack);

			expect(sortedStack.pop()).toBe(8);
			expect(sortedStack.pop()).toBe(8);
			expect(sortedStack.pop()).toBe(5);
			expect(sortedStack.pop()).toBe(5);
			expect(sortedStack.pop()).toBe(2);
			expect(sortedStack.pop()).toBe(2);
			expect(sortedStack.pop()).toBeUndefined();
		});
	});
});
