const accountId = 144553
let accountEmail = "abdulmujeebkhan9871@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
var accountCity = "Delhi"
// accountId = 2 //not Allowed
let accountState;

accountEmail = "amk@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
beacause of issue in block scope 
and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
When you declare a variable in JavaScript without using var, let, or const, 
it is implicitly created as a global variable (if it’s not in strict mode). 
This means it becomes a property of the global object (like window in browsers).
*/

/*
In strict mode, attempting to use an undeclared variable will throw a ReferenceError,
 preventing accidental global variable creation. Always strive for explicit declarations to avoid issues!
 */