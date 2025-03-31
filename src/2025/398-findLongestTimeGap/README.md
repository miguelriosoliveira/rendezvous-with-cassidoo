# findLongestTimeGap

Interview question of the [issue #398 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/it-is-never-too-late-to-be-what-you-might-have/).

## The Question

**Write a function that takes an array of timestamps (`HH:MM`) from the same day and returns the longest gap in minutes between consecutive timestamps.**

Examples:

```js
findLongestTimeGap(['12:00'])
0

findLongestTimeGap(['09:00', '11:00'])
120

findLongestTimeGap(['14:00', '09:00', '15:00', '10:30'])
210

findLongestTimeGap(['08:00', '10:00', '10:00', '14:00'])
240
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
