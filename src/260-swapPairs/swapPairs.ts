/*
Given a list, swap every two adjacent nodes.
Something to think about: How would your code change if this were a linked list, versus an array?

Example:
```js
> swapPairs([1,2,3,4])
> [2,1,4,3]

> swapPairs([])
> []
```
*/

export function swapPairsArray(pairs: number[]): number[] {
	if (pairs.length % 2 !== 0) {
		throw new Error('Uneven list');
	}

	const swapped: number[] = [];
	for (let index = 0; index < pairs.length; index += 2) {
		swapped.push(pairs[index + 1], pairs[index]);
	}

	return swapped;
}

export type Node = null | {
	value: number;
	next: Node;
};

export function swapPairsLinkedList(pairs: Node): Node {
	// while structuredClone is not supported in TypeScript...
	let currentNode: Node = JSON.parse(JSON.stringify(pairs));
	if (!currentNode) {
		return null;
	}
	if (!currentNode.next) {
		throw new Error('Uneven list');
	}

	// swap the first two nodes
	const secondNode = currentNode.next;
	currentNode.next = secondNode.next;
	secondNode.next = currentNode;

	const swapped = secondNode; // to keep track of the head of the list
	let previousNode = currentNode; // for the next swaps

	currentNode = currentNode.next; // will start at the third node
	while (currentNode) {
		const nextNode: Node = currentNode.next;
		if (!nextNode) {
			throw new Error('Uneven list');
		}

		// swap the current node with the next node
		currentNode.next = nextNode.next;
		nextNode.next = currentNode;
		// and adjust the previous node
		previousNode.next = nextNode;
		previousNode = currentNode;

		// move to the next node
		currentNode = currentNode.next;
	}

	return swapped;
}
