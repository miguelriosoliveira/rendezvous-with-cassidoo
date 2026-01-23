# sortMonarchs

Interview question of the [issue #409 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/to-be-afraid-is-to-behave-as-if-the-truth-were/).

## The Question

**Given an array of strings representing the names of monarchs and their ordinal numbers, write a function that returns the list of names sorted first by name and then by their ordinal value (in Roman numerals), in ascending order.**

Example:

```js
> sortMonarchs(["Louis IX", "Louis VIII", "Philip II", "Philip I"])
> ["Louis VIII", "Louis IX", "Philip I", "Philip II"]

> sortMonarchs(["George VI", "George V", "Elizabeth II", "Edward VIII"])
> ["Edward VIII", "Elizabeth II", "George V", "George VI"]
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
