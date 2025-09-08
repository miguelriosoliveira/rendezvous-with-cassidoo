# sumNeighbors

Interview question of the [issue #421 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/lifes-too-short-to-be-a-pushover-kelly-clarkson/).

## The Question

**For an array of numbers, generate an array where for every element, all neighboring elements are added to itself, and return the sum of that array.**

Example:

```
[]																			-> 0
[1]																			-> 1
[1, 4]																	-> 10 // (1+4 + 4+1)
[1, 4, 7]																-> 28
[1, 4, 7, 10]														-> 55
[-1, -2, -3]														-> -14
[0.1, 0.2, 0.3]													-> 1.4
[1,-20,300,-4000,50000,-600000,7000000]	-> 12338842
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
