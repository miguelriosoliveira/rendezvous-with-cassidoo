# sumNeighbors

Interview question of the [issue #430 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/if-youre-not-failing-youre-not-trying-reshma/).

## The Question

**You are given two sorted arrays, `a` and `b`, where `a` has a large enough size buffer at the end to hold `b` (which can be spaces, zeroes, or nulls). Write a function to merge `b` into `a` in sorted order.**

Example:

```
let a = [1, 3, 5, 0, 0, 0];
let b = [2, 4, 6];

> merge(a, b)
> [1, 2, 3, 4, 5, 6]
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
