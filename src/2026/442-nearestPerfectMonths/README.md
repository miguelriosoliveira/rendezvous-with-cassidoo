# nearestPerfectMonths

Interview question of the [issue #442 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/the-ability-to-observe-without-evaluating-is-the/).

## The Question

**February 2026 is a [perfect month](https://en.wikipedia.org/wiki/Perfect_month)! Write a function that returns the closest previous and next perfect month around the given Gregorian year.**

Examples:

```js
nearestPerfectMonths(2025)
> { prev: "2021-02", next: "2026-02" }

nearestPerfectMonths(2026)
> { prev: "2026-02", next: "2027-02" }
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
