# toggleChar

Interview question of the [issue #457 of rendezvous with cassidoo](https://buttondown.com/cassidoo/archive/u1f49c-technology-is-cool-but-youve-got-to-use-it/).

## The Question

**Given a string `s` consisting of letters, convert each character to its opposite case that is, change every lowercase letter to uppercase, and every uppercase letter to lowercase.** Bonus: add an "alternate" parameter that converts the whole string to AlTeRnAtE cAsE!

Examples:

```js
let alternating = true

toggleChar("Hello, world!")
> "hELLO, WORLD!"

toggleChar("HeheHeheHEheheHeH")
> "hEHEhEHEheHEHEhEh"

toggleChar("This will be alternated", alternating)
> "ThIs WiLl Be AlTeRnAtEd"
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
