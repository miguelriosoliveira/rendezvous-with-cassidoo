# formatTable

Interview question of the [issue #262 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/find-something-youre-passionate-about-and-keep/).

## The Question

**Given a string that represents a markdown table, return a formatted markdown table.**
A formatted markdown table means that the width of each column is the width of the longest cell in the column.

Example:
```
Input:
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

Output:
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
