# Event driven stuff

Sockets, logging, etc.

PM2: shows resource consumption stats about application and system: https://pm2.keymetrics.io

NodeJS built around events: https://nodejs.org/api/events.html#events. - Emitters emit named events that cause listeners to run a function in response.

3 Key concepts

1. An emitter is an object (instantiation of a custom class) that emits an event. Events have a name and data. For this we use the `emit` function.
2. A listener is a function that responds to an event. Listeners are attached to events. For this we use the `on` function.
3. Events need to be triggered - for this we simply call the relevant method in the emitter.

To build our own event emitter:

1. Define a custom class that extends the EventEmitter class
2. Add methods to it that will respond to events, taking in input parameters as required
3. Within those methods, call `this.emit(<event_name>, <data_to_emit>)`
   1. event_name will be the name of the event emitted. Listeners can listen for these evets.
