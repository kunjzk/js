// Number
let balance = 120
console.log(typeof(balance))

let secondBalance = new Number(120)
console.log(typeof(secondBalance))
console.log(typeof(secondBalance.valueOf))

// Bool

let isActive = true
let isReallyActive = new Boolean(false)

// null, undefined
let firstName
console.log(firstName) // undefined, it doesnt have a value
let lastname = null
console.log(lastname)

// String

let myString = "hello"
let myStringOne = "hola"
let username = 'hitesh'

let oldGreet = myString + "hitesh" // string construction
console.log(oldGreet)

let greetMessage = `Hello ${username}` // string interpolation
let demoOne = `Value is ${2*2}` // expressions gets evaluated
console.log(greetMessage)
console.log(demoOne)

// Symbols gaurantee uniqueness

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 == sm2) // false
console.log(sm1)

let sm3 = Symbol("hi") // the symbol is named hi
let sm4 = Symbol("hi") // another symbol named hi. not the same as the one above.

console.log(sm3 == sm4)
console.log(sm3) // symbol name is printed