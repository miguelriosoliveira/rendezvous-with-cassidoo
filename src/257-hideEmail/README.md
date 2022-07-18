# hideEmail

Interview question of the [issue #257 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/if-one-is-lucky-a-solitary-fantasy-can-totally/).

## The Question

Given a string that has a valid email address, write a function to hide the first part of the email (before the @ sign), minus the first and last character. For extra credit, add a flag to hide the second part after the @ sign to your function excluding the first character and the domain extension.

Examples:
```js
> hideEmail('example@example.com')
> 'e*****e@example.com'

> hideEmail('example+test@example.co.uk', hideFull)
> 'e**********t@e******.co.uk'
```

## Installing & Running

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
