import { findIntersectionInArrays, findIntersectionInLinkedLists, Node } from './findIntersection';

describe('testing arrays version', () => {
	it('should find intersection [1, 2]', () => {
		const listA = [1, 4, 5, 6];
		const listB = [2, 3, 4, 5, 6];
		const intersection = findIntersectionInArrays(listA, listB);
		expect(intersection).toStrictEqual([1, 2]);
	});

	it('should not find any intersection', () => {
		const listA = [1, 4, 5, 6];
		const listB = [9, 10, 11, 12];
		const intersection = findIntersectionInArrays(listA, listB);
		expect(intersection).toBeNull();
	});
});

describe('testing linked lists version', () => {
	it('should find intersection node 4', () => {
		// listA: 1 -> 4 -> 5 -> 6
		const node6: Node = { value: 6, next: null };
		const node5: Node = { value: 5, next: node6 };
		const node4: Node = { value: 4, next: node5 };
		const node1: Node = { value: 1, next: node4 };

		// listB: 2 -> 3 -> 4 -> 5 -> 6
		const node3: Node = { value: 3, next: node4 };
		const node2: Node = { value: 2, next: node3 };

		const intersection = findIntersectionInLinkedLists(node1, node2);
		expect(intersection).toBe(node4);
	});

	it('should not find any intersection for non-intersecting lists', () => {
		// listA: 1 -> 4 -> 5 -> 6
		const node6: Node = { value: 6, next: null };
		const node5: Node = { value: 5, next: node6 };
		const node4: Node = { value: 4, next: node5 };
		const node1: Node = { value: 1, next: node4 };

		// listB: 9 -> 10 -> 11 -> 12
		const node12: Node = { value: 12, next: null };
		const node11: Node = { value: 11, next: node12 };
		const node10: Node = { value: 10, next: node11 };
		const node9: Node = { value: 9, next: node10 };

		const intersection = findIntersectionInLinkedLists(node1, node9);
		expect(intersection).toBeNull();
	});

	it('should not find any intersection for null lists', () => {
		// listA: 1 -> 4 -> 5 -> 6
		const node6: Node = { value: 6, next: null };
		const node5: Node = { value: 5, next: node6 };
		const node4: Node = { value: 4, next: node5 };
		const node1: Node = { value: 1, next: node4 };

		const intersection = findIntersectionInLinkedLists(node1, null);
		expect(intersection).toBeNull();
	});
});
