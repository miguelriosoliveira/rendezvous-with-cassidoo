/*
Given a linked list, such that each node contains an additional random pointer which could point to
any node in the list, or null, make a deep copy of the list and return the head node of the new copy.

Node definition:
```java
class Node {
	int val;
	Node next;
	Node random;

	public Node(int val) {
		this.val = val;
		this.next = null;
		this.random = null;
	}
}
```
*/

export interface Node {
	val: number;
	next: Node | null;
	random: Node | null;
}

export function deepCopy(nodeList: Node | null): Node | null {
	const copies = new Map<Node, Node>();

	for (let current: Node | null = nodeList; current != null; current = current.next) {
		copies.set(current, {
			val: current.val,
			next: null,
			random: null,
		});
	}

	for (const [current, copy] of copies) {
		copy.next = copies.get(current.next as Node) || null;
		copy.random = copies.get(current.random as Node) || null;
	}

	return copies.get(nodeList as Node) || null;
}
