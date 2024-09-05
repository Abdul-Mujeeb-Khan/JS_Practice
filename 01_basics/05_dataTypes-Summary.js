// ****Primitive Data Types (call-by-value)****
// what this means is that whenever these are copied 
// , reference to actually data is not given rather
// a copy of it is given, so the changes are in copy
// not on the actual data
// 7 types : String, Number, Boolean, Null,
//           undefined, Symbol, BigInt.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

// ****Reference type(Non-Primitive)(Call-by-reference)****
// Arrays, Objects, Functions

// *** JavaScript is a dynamically typed language
// as we don't need to mention the data type while 
// declaring a variable.
const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Mujeeb",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros); //object 

console.log(typeof anotherId);


// ****************************************************

// Stack (Pimitive), Heap Memory (Non-Primitive)

let myName = "Mujeeb"
let anotherName = myName
anotherName = "Harsh"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "123@ybl"
}

let user2 = user1

user2.email = "mujeeb222@gmail.com"

console.log(user1.email);
console.log(user2.email);

