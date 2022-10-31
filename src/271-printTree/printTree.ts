/*
Given an integer n, print a balanced binary tree with n leaf nodes using the characters /, <space> and \.

Examples:

> printTree(2)

/\

// or you could output something like:

 /\
/  \

> printTree(3)

 /\
/\ \

// or you could output something like:

  /\
 / /\
/ /  \
*/

type Node = null | {
	value: number;
	left: Node;
	right: Node;
};

function generateNode(value: number, left: Node = null, right: Node = null): Node {
	return { value, left, right };
}

function generateBalancedTree(sortedArray: number[], left: number, right: number): Node {
	if (left > right) {
		return null;
	}

	const mid = Math.floor((left + right) / 2);
	const leftNode = generateBalancedTree(sortedArray, left, mid - 1);
	const rightNode = generateBalancedTree(sortedArray, mid + 1, right);
	const root = generateNode(sortedArray[mid], leftNode, rightNode);

	return root;
}

function generateHeightTree(height: number): Node {
	for(let level = 0; level < height; level++) {

	}
}

function calculateHeight(root: Node): number {
	if (!root) {
		return 0;
	}

	const leftHeight = calculateHeight(root.left);
	const rightHeight = calculateHeight(root.right);
	if (leftHeight >= rightHeight) {
		return leftHeight + 1;
	}

	return rightHeight + 1;
}

function printLevel(root: Node, level: number) {
	if (!root) {
		process.stdout.write('∅ -> ');
		return;
	}

	if (level === 0) {
		process.stdout.write(`${root.value} -> `);
		// if (root.left) {
		// 	process.stdout.write('/');
		// }
		// if (root.right) {
		// 	process.stdout.write('\\ ');
		// }
	} else {
		printLevel(root.left, level - 1);
		printLevel(root.right, level - 1);
	}
}

function generateAsciiTree(root: Node) {
	if (!root) {
		return;
	}

	const height = calculateHeight(root);

	console.log({ height });

	process.stdout.write('');
	for (let level = 0; level < height; level++) {
		process.stdout.write(`Level ${level}: `);
		printLevel(root, level);
		process.stdout.write('\n');
	}

	process.stdout.write('\n\n-----Complete Level Order Traversal:-----\n');
	for (let level = 0; level < height; level++) {
		printLevel(root, level);
	}
	process.stdout.write('\n');
}

export function printTree(nodesCount: number): string {
	// N leaves refer to 2N-1 nodes in Full binary tree.
	// const fullTreeNodesCount = 2 * nodesCount - 1;
	// const sortedArray = Array.from({ length: fullTreeNodesCount }, (_, index) => index + 1);
	// console.log({ sortedArray });
	// const tree = generateBalancedTree(sortedArray, 0, fullTreeNodesCount - 1);
	// 2^4 = 16                     -> "the max number of leaves on height 4 is 16"
	// log2(16) = 4                 -> "the height level that can store 16 leaves is 4"
	// log2(15) = 3.9068905956 -> 4 -> "the height level that can store 15 leaves is 4"
	const height = Math.ceil(Math.log2(nodesCount));
	const tree = generateHeightTree(height);
	const asciiTree = generateAsciiTree(tree);

	// console.log(asciiTree);

	return '';
}
