# luhnCheck

Interview question of the [issue #312 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/it-isnt-the-mountains-ahead-to-climb-that-wear/).

## The Question

**Implement the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) to validate a credit card number.** Bonus points if you can identify what brand of credit card the user inputted!

Example:

```js
> luhnCheck(123456789)
> false

> luhnCheck(5555555555554444)
> true // Mastercard
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
