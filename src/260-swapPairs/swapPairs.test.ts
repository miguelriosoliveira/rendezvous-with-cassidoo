import { Node, swapPairsArray, swapPairsLinkedList } from './swapPairs';

describe('testing swapPairs with arrays', () => {
	it('should swap pairs', () => {
		const swapped = swapPairsArray([1, 2, 3, 4]);
		expect(swapped).toStrictEqual([2, 1, 4, 3]);
	});

	it('should do nothing when the list is empty', () => {
		const swapped = swapPairsArray([]);
		expect(swapped).toStrictEqual([]);
	});

	it('should throw an error if the array is uneven', () => {
		expect(() => swapPairsArray([1, 2, 3, 4, 5])).toThrow('Uneven list');
	});

	it('should throw an error if the list has only one item', () => {
		expect(() => swapPairsArray([1])).toThrow('Uneven list');
	});
});

describe('testing swapPairs with linked lists', () => {
	it('should swap pairs', () => {
		// Arrange (1 -> 2 -> 3 -> 4 -> 5 -> 6)
		const node6: Node = { value: 6, next: null };
		const node5: Node = { value: 5, next: node6 };
		const node4: Node = { value: 4, next: node5 };
		const node3: Node = { value: 3, next: node4 };
		const node2: Node = { value: 2, next: node3 };
		const node1: Node = { value: 1, next: node2 };

		// Act
		const swapped = swapPairsLinkedList(node1);

		// Assert (2 -> 1 -> 4 -> 3)
		expect(swapped).not.toBeNull();
		expect(swapped?.value).toBe(2);
		expect(swapped?.next?.value).toBe(1);
		expect(swapped?.next?.next?.value).toBe(4);
		expect(swapped?.next?.next?.next?.value).toBe(3);
		expect(swapped?.next?.next?.next?.next?.value).toBe(6);
		expect(swapped?.next?.next?.next?.next?.next?.value).toBe(5);
		expect(swapped?.next?.next?.next?.next?.next?.next).toBeNull();
	});

	it('should do nothing when the list is empty', () => {
		const swapped = swapPairsLinkedList(null);
		expect(swapped).toBeNull();
	});

	it('should throw an error if the list is uneven', () => {
		// Arrange (1 -> 2 -> 3 -> 4 -> 5)
		const node5: Node = { value: 5, next: null };
		const node4: Node = { value: 4, next: node5 };
		const node3: Node = { value: 3, next: node4 };
		const node2: Node = { value: 2, next: node3 };
		const node1: Node = { value: 1, next: node2 };

		// Act + Assert
		expect(() => swapPairsLinkedList(node1)).toThrow('Uneven list');
	});

	it('should throw an error if the list has only one item', () => {
		const node1: Node = { value: 1, next: null };
		expect(() => swapPairsLinkedList(node1)).toThrow('Uneven list');
	});
});
