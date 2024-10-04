// Nested Scope
// like ice cream, chhote bado se ice cream maang sakte hai but
// bade chhoto se ice cream maangte achhe nahi lagte, similarly
// inner scope outer scope ke vaibales access kar sakta hai but
// outer scope inner ke variables ko access nahi kar sakta -> known as closure (there is more to closure)
one = function() {
    const userName = "Mujeeb"

    two = function(){
        const website = "YouTube"
        console.log(userName);
    }
    // console.log(website); // error

    two() // if this is commented out then it will not be executed as it was never called

}

one()

// whenever functions are called a call-stack is formed.

console.log("**************************");


if (true) {
    const userName = "Mujeeb"
    if (userName === "Mujeeb"){
        const website = " YouTube"
        console.log(userName + website);
    }
    // console.log(website); // error as out of scope
}

// console.log(userName); // error
console.log("**************************");

// ++++++++++++ interesting ++++++++++++

console.log(addOne(5)); // This would not throw error
function addOne(num) { // This is a basic function
    return num+1
}

// Error in line 46 due to execution context
addTwo(5) // This would throw error as here we have defined a 
//function and also hold it into a variable addTwo
// This is a concept called Hoisting i.e. how functions are declared, where to keep them, their execution context.
const addTwo = function(num){ // This is also a function but it is also called as Expresion sometimes.
    return num+2
}