# doTasks

Interview question of the [issue #326 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/mellow-doesnt-always-make-for-a-good-story-but-it/).

## The Question

**Given a list of tasks, where each task has a duration, and a limited amount of available time to work, write a function to return the tasks that can be completed within the given time, without re-ordering the original list of tasks.** Try to maximize the number of tasks that can be completed!

Example:

```js
const tasks = [
  { name: 'Task 1', duration: 4 },
  { name: 'Task 2', duration: 2 },
  { name: 'Task 3', duration: 7 },
  { name: 'Task 4', duration: 5 },
  { name: 'Task 5', duration: 1 },
  { name: 'Task 6', duration: 3 }
];

const timeToWork = 6;

> doTasks(tasks, timeToWork)
> ['Task 2', 'Task 5', 'Task 6']
```

## Installing & Running

Just `pnpm i` to install all dependencies and then `pnpm t` to run the tests!
