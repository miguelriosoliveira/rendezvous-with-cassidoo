# betweenNums

Interview question of the [issue #327 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/the-spirit-of-envy-can-destroy-it-can-never-build/).

## The Question

**Given a start number `a`, an ending number `b`, and a string `str` that can be "odd", "even", or "prime", return all of the numbers that are odd, even, or prime between `a` and `b`.** `a` will not always necessarily be less than `b`!

Example:

```js
> betweenNums(3, 11, 'even')
> [4,6,8,10]

> betweenNums(15, 1, 'prime')
> [2,3,5,7,11,13]
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
