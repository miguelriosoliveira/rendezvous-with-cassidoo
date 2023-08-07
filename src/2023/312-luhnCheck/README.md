# luhnCheck

Interview question of the [issue #312 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/science-is-organized-knowledge-wisdom-is/).

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

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
