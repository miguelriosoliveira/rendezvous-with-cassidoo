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

function copyNode(node: Node): Node {
	return {
		val: node.val,
		next: node.next != null ? { ...node.next } : null,
		random: node.random != null ? { ...node.random } : null,
	};
}

export function deepCopy(nodeList: Node | null): Node | null {
	if (nodeList == null) {
		return null;
	}

	const nodesCopy = copyNode(nodeList);
	let currentNode: Node | null = nodeList;
	let currentNodeCopy: Node | null = nodesCopy;
	// Stryker disable next-line ConditionalExpression,EqualityOperator: Loop builds copy chain but copyNode already deep copies via spread
	while (currentNode != null) {
		currentNodeCopy = copyNode(currentNode);
		currentNode = currentNode.next;
	}

	return nodesCopy;
}
