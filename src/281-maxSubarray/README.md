# maxSubarray

Interview question of the [issue #281 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/from-a-small-seed-a-mighty-trunk-may-grow/).

## The Question

**Given a string of any length which contains only digits from 0 to 9, replace each consecutive run of the digit 0 with its length.**

Example:

```js
> maxSubarray('1234500362000440')
> 1234523623441

> maxSubarray('123450036200044')
> 123452362344

> maxSubarray('000000000000')
> 12

> maxSubarray('123456789')
> 123456789
```

## Installing & Running

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
