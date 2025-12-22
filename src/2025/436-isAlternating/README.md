# isAlternating

Interview question of the [issue #436 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/you-only-get-one-life-so-you-might-as-well-feel/).

## The Question

**An alternating array is a list of any length in which two (not necessarily different) values are alternating (all even-indexed items are equal, and all odd-indexed items are equal). Given an array, return true if it is alternating.**

Example usage:

```
[]             -> True
[1]            -> True
[1,1]          -> True
[1,2,1]        -> True
[10,5,10,5,10] -> True
[2,2,3,3]      -> False
[5,4,3,5,4,3]  -> False
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
