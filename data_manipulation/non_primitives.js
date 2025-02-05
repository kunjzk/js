//Objects

let username = {
    firstname:"hitesh",
    isLoggedIn: true,
}

console.log(username)
console.log(typeof username)

const user = {
    firstname:"hitesh",
    isLoggedIn: true,
}

console.log(user)
user.firstname = "hi" // Even through the variable is a const, its internal primitives can be changed. Const only ensures that the memory space occupied by the object is not reassigned to antyhing else.
console.log(user)
user.lastname = "foo"
console.log(user)

user_spaces = {
    "first name": "hitesh",
    isLoggedIn: true
}

console.log(user_spaces["first name"])

// Date type
let today = new Date()
console.log(today)
console.log(today.getDate())

// Array

let heros = ["superman", "spiderman", "cap am", true, 9] // can store any type
console.log(heros[0])

// Type conversion - JS is dynamically typed
// JS tries to convert types for you

let isValue = "2"
console.log(Number(isValue)) // 2

let isValueNew = "2abc"
console.log(Number(isValueNew)) // NaN