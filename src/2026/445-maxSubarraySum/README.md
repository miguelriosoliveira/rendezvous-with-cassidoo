# maxSubarraySum

Interview question of the [issue #445 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/change-but-start-slowly-because-direction-is-more/).

## The Question

**Given an array of integers, find the contiguous subarray that has the largest sum and return that sum. A subarray must contain at least one element. If all elements are negative, return the largest (least negative) value.** If you need a hint, look up Kadane's Algorithm!

Examples:

```js
> maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
6
> maxSubarraySum([5])
5
> maxSubarraySum([-1, -2, -3, -4])
-1
> maxSubarraySum([5, 4, -1, 7, 8])
23
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
