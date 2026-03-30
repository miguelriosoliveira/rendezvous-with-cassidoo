
/*
You are given a file system represented as an object where keys are absolute paths and values are
either null (real file/directory) or a string (a symlink pointing to another path).
Write a function that resolves a given path to its real destination, following symlinks along the way.
If a symlink chain forms a cycle, return null.

Example:

const fs = {
	"/a": "/b",
	"/b": "/c",
	"/c": null,
	"/loop1": "/loop2",
	"/loop2": "/loop1",
	"/real": null,
	"/alias": "/real",
};

resolvePath(fs, "/a");      // "/c"
resolvePath(fs, "/alias");  // "/real"
resolvePath(fs, "/loop1");  // null
resolvePath(fs, "/real");   // "/real"
*/

type FsObject = {
	[key: string]: string | null;
}

export function resolvePath(fs: FsObject, symlink: string): string | null {
	let current: string | null = symlink;
	let resolved = fs[current];
	const steps = new Set();

	while (resolved !== null) {
		if (!resolved || steps.has(resolved)) {
			current = null;
			break;
		}
		steps.add(current);
		current = resolved;
		resolved = fs[current];
	}

	return current;
}

