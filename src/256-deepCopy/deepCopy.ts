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

export type Node = {
	val: number;
	next: Node | null;
	random: Node | null;
};

function copyNode(node: Node): Node {
	return {
		val: node.val,
		next: node.next ? { ...node.next } : null,
		random: node.random ? { ...node.random } : null,
	};
}

export function deepCopy(nodeList: Node | null): Node | null {
	if (!nodeList) {
		return null;
	}

	const nodesCopy = copyNode(nodeList);
	let currentNode: Node | null = nodeList;
	let currentNodeCopy: Node | null = nodesCopy;
	while (currentNode) {
		currentNodeCopy = copyNode(currentNode) as Node;
		currentNode = currentNode.next;
		currentNodeCopy = currentNodeCopy.next;
	}

	return nodesCopy;
}
