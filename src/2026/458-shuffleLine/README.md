# shuffleLine

Interview question of the [issue #458 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/u26d1-ufe0f-permit-yourself-to-change-your-mind/).

## The Question

**Given a queue of customer names and an integer `n`, move every `n`th customer to the end of the line while preserving relative order otherwise.**

Example:

```js
shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3);
> ['Ada', 'Ben', 'Diya', 'Eli', 'Cam', 'Fay']
// Every 3rd customer is moved to the end, so "Cam" and "Fay"
// are moved after the others, preserving their original order.

shuffleLine(["A", "B", "C", "D", "E"], 2);
> ['A', 'C', 'E', 'B', 'D']

shuffleLine(["Mo", "Noah", "Oli"], 1);
> ['Mo', 'Noah', 'Oli']
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
