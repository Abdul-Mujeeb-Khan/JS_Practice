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
