# longestWord

Interview question of the [issue #254 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/fight-for-the-things-that-you-care-about-but-do/).

# The Question

Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.

Example:
```js
let str = "abppplee"
let dict = {"able", "ale", "apple", "bale", "kangaroo"}

$ longestWord(str, dict)
$ 'apple'
// "able" and "ale" also work, but are shorter than "apple"
// "bale" has all the right letters, but not in the right order
```

# Installing & Running

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
