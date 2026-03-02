# majorityElement

Interview question of the [issue #446 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/u1f6f5-the-way-to-right-wrongs-is-to-turn-the/).

## The Question

**Find the majority element in an array (one that appears more than n/2 times) in `O(n)` time and `O(1)` space without hashmaps.** Hint: the [Boyer-Moore Voting algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) might help if you can't figure this one out!

Examples:

```js
> majorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2])
2

> majorityElement([3, 3, 4, 2, 3, 3, 1])
3
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
