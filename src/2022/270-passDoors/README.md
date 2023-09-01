# passDoors

Interview question of the [issue #270 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/i-never-regretted-what-i-turned-down-angela/).

## The Question

**Let’s say you have n doors that start out as closed. With the first pass across the doors, you toggle every door open. With the second pass, you toggle every second door. With the third, every third door, and so on. Write a function that takes in an integer numberOfPasses, and returns how many doors are open after the number of passes.**

Example:

```js
let n = 7
let numberOfPasses = 3

> passDoors(n, numberOfPasses)
> 4

// Explanation:
// 0 means open, 1 means closed
// Initial: 1 1 1 1 1 1 1
// Pass 1:  0 0 0 0 0 0 0
// Pass 2:  0 1 0 1 0 1 0
// Pass 3:  0 1 1 1 0 0 0
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
