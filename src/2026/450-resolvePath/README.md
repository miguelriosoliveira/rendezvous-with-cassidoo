# resolvePath

Interview question of the [issue #450 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/u1f360-id-rather-regret-the-things-ive-done-than/).

## The Question

**You are given a file system represented as an object where keys are absolute paths and values are either `null` (real file/directory) or a string (a symlink pointing to another path). Write a function that resolves a given path to its real destination, following symlinks along the way.** If a symlink chain forms a cycle, return `null`.

Example:

```js
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
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
