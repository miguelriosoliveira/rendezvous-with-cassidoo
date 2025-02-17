# findShieldBreak

Interview question of the [issue #392 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/the-truth-is-no-one-of-us-can-be-free-until/).

## The Question

**Given an array of attack damages and a shield capacity for a spaceship, return the index when cumulative damage exceeds the shield.** Return -1 if shield survives.

Example:

```js
> findShieldBreak([10, 20, 30, 40], 50)
> 2

> findShieldBreak([1, 2, 3, 4], 20)
> -1

> findShieldBreak([50], 30)
> 0
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
