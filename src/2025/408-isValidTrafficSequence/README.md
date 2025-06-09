# isValidTrafficSequence

Interview question of the [issue #408 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/our-feelings-are-our-most-genuine-paths-to/).

## The Question

**Given an array of strings representing a sequence of traffic light states ("red" for stop, "green" for go, "yellow" for slow), write a function that returns `true` if the sequence could represent a valid state machine for a standard traffic light.** The only valid transitions are: red to green, green to yellow, and yellow to red.

Example:

```js
> isValidTrafficSequence(["red", "green", "yellow", "red", "green"])
> true

> isValidTrafficSequence(["red", "yellow", "green"]);
> false

> isValidTrafficSequence([])
> true
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
