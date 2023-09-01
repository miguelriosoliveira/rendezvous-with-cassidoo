# canToggle

Interview question of the [issue #177 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/you-may-encounter-many-defeats-but-you-must-not/).

# The Question

You’re trying to build an IoT mesh network. Signals can only travel the maximum of 5 units. You’re given coordinates for the switch, the light, and the mesh hubs (which capture and forward signals). Return true if the switch can successfully toggle the light.

Example:
```js
let network = { switch: [0,1], hub: [[2,1], [2,5]], light: [1,6] }
$ canToggle(network)
$ true
```

If you want a more visual example, [here’s a diagram](https://i.imgur.com/sdSkGeo.png). In this example, canToggle would return false because the red circles don’t connect in the middle, with the blue triangle being the switch, and the green being the light!

# Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
