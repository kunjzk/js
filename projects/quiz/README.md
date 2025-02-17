# Quiz

## How to pass an argument to an event listener's handler function

If we just pass it the argument directly, ie

```
li.addEventListener('click', selectAnswer(city))
```

, then `selectAnswer` will run automatically without waiting for a click.

To make it only run when a click occurs, we need to write it as a callback function:

```
li.addEventListener("click", () => selectAnswer(choice))
```
