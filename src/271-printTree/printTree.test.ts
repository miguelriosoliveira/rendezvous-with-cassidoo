import fs from 'node:fs/promises';
import path from 'node:path';

import { printTree } from './printTree';

async function getTree(nodesCount: number) {
	const file = await fs.readFile(
		// eslint-disable-next-line unicorn/prefer-module
		path.resolve(__dirname, 'test-files', `${nodesCount}-node-tree.txt`),
	);
	return file.toString();
}

describe('testing printTree', () => {
	it('should print tree with 2 nodes', async () => {
		const nodesCount = 2;
		const expected = await getTree(nodesCount);
		expect(printTree(nodesCount)).toBe(expected);
	});

	it('should print tree with 3 nodes', async () => {
		const nodesCount = 3;
		const expected = await getTree(nodesCount);
		expect(printTree(nodesCount)).toBe(expected);
	});

	it.only('should print tree with 5 nodes', async () => {
		const nodesCount = 5;
		printTree(nodesCount);
		// console.log(printBinaryTree(nodesCount));
		// console.log(printBinaryTree(6));
		// console.log(printBinaryTree(7));
		// console.log(printBinaryTree(8));
		// console.log(printBinaryTree(19));
		// const expected = await getTree(nodesCount);
		// expect(printTree(nodesCount)).toBe(expected);
	});
});
