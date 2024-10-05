// Immediately Invoked Function Expressions (IIFE)
// jese hi function likha usko immediately execute karwana hai
// used in files where there is db connection and we want that whenever that file starts db connection establishes
// and also used to avoid global scope pollution in function scopes

(function one () {
    console.log("DB CONNECTED");
})(); // semicolon to end context
// IIFE -> here first () is function definition and the second () is execution


( function two () { /// named IIFE
    console.log(`DB CONNECTED TWO`);
})(); // error as IIFE does not know where to end context therefore we ned to put ; at end of previous IIFE


// IIFE arrow function without name
// here name is a parameter and we called it with "Mujeeb" as argument
( (name) => { // SImple IIFE / Unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
})("Mujeeb")