// Scopes in JS

// The problem with var keyword for defining variables was that,it does not
// work as block scope as it should have

// {} -> Block Scope

if (true) {
    let a =23
    const y = "xyz"
    var b = 123
}
console.log(a); // error
console.log(b); // no error
console.log(y); // error
// the variables declared using let and const keywords cannot be accessed outside of
// their scope, but var ones can be.
// This is a major problem with var keyword for declaring variables.
