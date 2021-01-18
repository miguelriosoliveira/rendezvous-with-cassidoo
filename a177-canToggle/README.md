# canToggle

Interview question of the [issue #177 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/you-may-encounter-many-defeats-but-you-must-not/).

# The Question

You’re trying to build an IoT mesh network. Signals can only travel the maximum of 5 units. You’re given coordinates for the switch, the light, and the mesh hubs (which capture and forward signals). Return true if the switch can successfully toggle the light.

Example:
```
let network = { switch: [0,1], hub: [[2,1], [2,5]], light: [1,6] }
$ canToggle(network)
$ true
```

# Installing & Running

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
