import { deepCopy, type Node } from './deepCopy';

function expectCopied(node: Node | null): Node {
	expect(node).not.toBeNull();
	if (node == null) {
		throw new Error('expected a copied node');
	}
	return node;
}

describe('#deepCopy', () => {
	it('should make a null copy from a null linked list', () => {
		expect(deepCopy(null)).toBeNull();
	});

	it('should copy a single node as a new object', () => {
		const node: Node = { val: 5, next: null, random: null };
		const copy = expectCopied(deepCopy(node));

		expect(copy).not.toBe(node);
		expect(copy.val).toBe(5);
		expect(copy.next).toBeNull();
		expect(copy.random).toBeNull();
	});

	it('should copy the full next chain as new nodes', () => {
		const node1: Node = { val: 1, next: null, random: null };
		const node2: Node = { val: 2, next: null, random: null };
		const node3: Node = { val: 3, next: null, random: null };
		node1.next = node2;
		node2.next = node3;
		node1.random = node3;
		node3.random = node2;

		const copy1 = expectCopied(deepCopy(node1));
		const copy2 = expectCopied(copy1.next);
		const copy3 = expectCopied(copy2.next);

		expect(copy1.val).toBe(1);
		expect(copy2.val).toBe(2);
		expect(copy3.val).toBe(3);
		expect(copy3.next).toBeNull();

		expect(copy1).not.toBe(node1);
		expect(copy2).not.toBe(node2);
		expect(copy3).not.toBe(node3);
	});

	it('should remap random pointers onto the copied nodes', () => {
		const node1: Node = { val: 1, next: null, random: null };
		const node2: Node = { val: 2, next: null, random: null };
		const node3: Node = { val: 3, next: null, random: null };
		node1.next = node2;
		node2.next = node3;
		node1.random = node3;
		node3.random = node2;

		const copy1 = expectCopied(deepCopy(node1));
		const copy2 = expectCopied(copy1.next);
		const copy3 = expectCopied(copy2.next);

		expect(copy1.random).toBe(copy3);
		expect(copy2.random).toBeNull();
		expect(copy3.random).toBe(copy2);
		expect(copy1.random).not.toBe(node3);
		expect(copy3.random).not.toBe(node2);
	});

	it('should keep the copy independent from later mutations', () => {
		const node1: Node = { val: 1, next: null, random: null };
		const node2: Node = { val: 2, next: null, random: null };
		node1.next = node2;

		const copy1 = expectCopied(deepCopy(node1));
		const copy2 = expectCopied(copy1.next);

		node2.val = 99;
		copy2.val = 7;

		expect(copy2.val).toBe(7);
		expect(node2.val).toBe(99);
		expect(copy1.next).toBe(copy2);
		expect(copy1.next).not.toBe(node2);
	});
});
