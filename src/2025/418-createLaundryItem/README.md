# createLaundryItem

Interview question of the [issue #418 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/its-important-to-have-something-to-walk-towards/).

## The Question

**Write a generator function `createLaundryItem()` that returns an object representing a laundry item. This object should have a method `nextCycle()` which, when called, advances the item through a series of laundry cycles in order: "soak", "wash", "rinse", "spin", and "dry". After the final cycle, subsequent calls to `nextCycle()` should return "done".**

Example:

```js
let towel = createLaundryItem();

console.log(towel.nextCycle()); // "soak"
console.log(towel.nextCycle()); // "wash"
console.log(towel.nextCycle()); // "rinse"
console.log(towel.nextCycle()); // "spin"
console.log(towel.nextCycle()); // "dry"
console.log(towel.nextCycle()); // "done"
console.log(towel.nextCycle()); // "done"
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
