# maxScoreWithOneReset

Interview question of the [issue #438 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/hope-smiles-from-the-threshold-of-the-year-to/).

## The Question

**Given an integer array nums, sum each element in the array in order. You are allowed to use at most one reset during the run: when you reset, your current score becomes 0 and you continue with the next elements. Return the maximum score you can end with.**

Example usage:

```
> maxScoreWithOneReset([2, -1, 2, -5, 2, 2])
4 // reset after -5

> maxScoreWithOneReset([4, -10, 3, 2, -1, 6])
10 // reset after -10

> maxScoreWithOneReset([-50, -2, -3])
0 // reset after -3
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
