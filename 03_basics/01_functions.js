// Functions in JS

function sayMyName() { //Function Definition
    console.log("M");
    console.log("U");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("B");
}

// sayMyName -> Function Reference
sayMyName() //Function Execution

function addTwoNumbers (number1 , number2) {
    console.log(number1+number2);
}

addTwoNumbers() // Without argument so result will be NaN
addTwoNumbers(3 , null)

const result = addTwoNumbers(3 ,5)
console.log("Result : ", result); // here result is undefined


function addTwoNumbers1 (number1 , number2) {
    // let result = number1 + number2
    // return result //or directly return
    return number1 + number2
    console.log("Mujeeb"); // will not be printed as we already wrote return
    
}
const result1 = addTwoNumbers1(3 ,5)
console.log("Result : ", result1);


// function loginUserMessage(userName = "Sam") { // now username will never be undefined -> default parameter
function loginUserMessage(userName) { // now username will never be undefined
    // if(userName === undefined){ // undefined is considered as false asnd the username is undefined then only we go into this block 
    if(!userName){ // same as above 
        console.log("Please Enter a Username");
        return
    }
    return `${userName} just logged in.`
}
console.log(loginUserMessage("Mujeeb"))
console.log(loginUserMessage()); // undefined , if 'if' statement is not used

