# isIsomorphic

Interview question of the [issue #322 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/no-matter-what-people-tell-you-words-and-ideas/).

## The Question

**Given two strings `s` and `t`, determine if they are isomorphic.** Two strings are isomorphic if there is a one-to-one mapping possible for every character of the first string to every character of the second string.

Example:

```js
> isIsomorphic('abb', 'cdd')
> true // 'a' maps to 'c' and 'b' maps to 'd'

> isIsomorphic('cassidy', '1234567')
> false // 's' cannot have a mapping to both '3' and '4'

> isIsomorphic('cass', '1233')
> true
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
