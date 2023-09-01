# addg

Interview question of the [issue #263 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/the-greatest-education-in-the-world-is-watching/).

## The Question

**Write a set of tests for a function that adds numbers from many invocations, until it sees an empty invocation.**
Consider edge cases, side effects, incorrect usage of the function, and expected values!

Function to test:
```js
function addg(a) {
    if (a === undefined) return a;
    return function g(b) {
        if (b !== undefined) {
            return addg(a+b);
        }
        return a;
    };
}

// Example usage:
/*
  addg()           // undefined
  addg(2)()        // 2
  addg(2)(7)()     // 9
  addg(3)(4)(0)()  // 7
*/
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
