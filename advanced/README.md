# More advanced topics

## Async JS

- Regular JS is sequentially executed, in order
- However in the real world we want our program to have "pauses", eg network calls, read/write from files (disk), time.sleep() functions, user input
- JS solves async work using the event loop
  - All functions go into the call stack
  - The "event loop" checks if there's anything to be done on the call stack. If there is, the event loop provides it with CPU and memory to do the work.
  - Sometimes the functions can't be executed by the event loop (because a pause is required). So the event gets passed to the execution engine (node/bun/deno/browser)
  - The engine/browser executes the code that javascript cannot (network call/sleep) and then puts the function into a queue (callback queue, or VIP queue)
  - The event loop picks up the function from the queue and continues executing it

Event loop visualized:
![event loop](../img/event_loop.png)
