let computer = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};

// One way to access prototype proerties
console.log(`computer`, lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };
// Second way to assign and access prototype properties
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));
