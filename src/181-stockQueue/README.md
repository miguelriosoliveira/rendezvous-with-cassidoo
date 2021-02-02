# stockQueue

Interview question of the [issue #181 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/the-most-certain-sign-of-wisdom-is-cheerfulness/).

# The Question

You are given a snapshot of a queue of stocks that have changing prices coming in from a stream. Remove the outdated stocks from the queue.

Example:
```
$ snapshot = [
  { sym: ‘GME’, cost: 280 },
  { sym: ‘PYPL’, cost: 234 },
  { sym: ‘AMZN’, cost: 3206 },
  { sym: ‘AMZN’, cost: 3213 },
  { sym: ‘GME’, cost: 325 }
]
$ stockQueue(snapshot)
$ [{ sym: ‘PYPL’, cost: 234 },
   { sym: ‘AMZN’, cost: 3213 },
   { sym: ‘GME’, cost: 325 }]
```

# Installing & Running

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
