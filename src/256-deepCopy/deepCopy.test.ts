import { deepCopy, Node } from './deepCopy';

describe('testing deepCopy', () => {
	it('should make a copy with the same values but different reference', () => {
		// Target structure:
		// [
		//   { val: 1, next: node2, random: node3 },
		//   { val: 2, next: node3, random: null },
		//   { val: 3, next: null,  random: node2 }
		// ]
		const node1: Node = { val: 1, next: null, random: null };
		const node2: Node = { val: 2, next: null, random: null };
		const node3: Node = { val: 3, next: null, random: null };
		node1.next = node2;
		node2.next = node3;
		node1.random = node3;
		node3.random = node2;

		const copy = deepCopy(node1) as Node;

		expect(copy).toStrictEqual(node1);
		expect(copy.next).toStrictEqual(node2);
		expect(copy.next?.next).toStrictEqual(node3);
		expect(copy.next?.next?.next).toBeNull();
	});

	it('should make a null copy from a null linked list', () => {
		const copy = deepCopy(null);
		expect(copy).toBeNull();
	});
});
