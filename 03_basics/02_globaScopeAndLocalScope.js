// Scopes in JS

// The problem with var keyword for defining variables was that,it does not
// work as block scope as it should have

// {} -> Block Scope
// outside of {} curly braces is all global scope

let a = 300

if (true) {
    let a =23
    var b = 123
    const c = "xyz"
    console.log(" INNER a : ", a);
    
}
// console.log(a); // error
console.log(b); // no error
// console.log(c); // error
// the variables declared using let and const keywords cannot be accessed outside of
// their scope, but var ones can be.
// This is a major problem with var keyword for declaring variables. 
// Also another problem with var is that variables declared using var can be redeclared.

console.log("OUTER a :" ,a); // outer a 

// therefore in forloops, use let to declare looping variables

//  Scope in node and windows is diffeent
// global variables scope is different in node and in console.
