# calculateGPA

Interview question of the [issue #266 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/dont-you-ever-ever-give-up-on-you-sheryl-lee-ralph/).

## The Question

**Given a set of letter grades, output the GPA (grade point average) of those grades.**

Key and examples:

```
A = 4 grade points
A- = 3.7 grade points
B+ = 3.3 grade points
B = 3 grade points
B- = 2.7 grade points
C+ = 2.3 grade points
C = 2 grade points
C- = 1.7 grade points
D+ = 1.3 grade points
D = 1 grade point
D- = 0.7 grade points
F = 0 grade points
```

```js
$ calculateGPA(['A'])
$ 4

$ calculateGPA(['F', 'F', 'F'])
$ 0

$ calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])
$ 3.3

$ calculateGPA(['A', 'B+', 'C-', 'A'])
$ 3.3
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
