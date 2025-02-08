# Prototypes vs Classes

JS just supports clas, objects, constructors -- this is just syntactic sugar though. Under the hood JS works using prototypes.

Prototype means extra methods attached to an object (check chrome inspector tools), usually inherited.

More formally: every object in JS has a built in property called its prototype.
The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
Docs: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
