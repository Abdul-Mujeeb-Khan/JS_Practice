// this -> tells about current context

const user = {
    userName: "Mujeeb",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`); // referring to current context
     // this keyword creates current context -> to access variables in this scope we use this keyword
     console.log(this);
     
    }
}

// context ka matlab, kiske baare me baat ho rhi hai

user.welcomeMessage() // context with Mujeeb
user.userName = "Sam"
user.welcomeMessage() // context with Sam

console.log("************************");

console.log(this); // here current context is empty i.e. {} because in node environment
// and this keyword is referring to an empty object as there is no contxt in global.

// in browser console cosole.log(this) does not return empty , it returns 
// windows , as earlier js engine was only found in browser and in browser the 
// most global object is Window that is why we easily catch event of windows.

console.log("************************");
// Arrow Function

function chai(){
    let userName = "Mujeeb"
    console.log(this);
    console.log(this.userName);// undefined, this cannot be used in a function like in objects
}
chai() // when we print this in a function in node environment we get multiple values


console.log("************************");

const coffee = function () {
    let userName = "Mujeeb"
    console.log(this);
    console.log(this.userName);
}
coffee()
// same output like above 

console.log("************************");

const chaiX = () => { // replaced function keyword with => to make arrow function
    let userName = "Mujeeb"
    console.log(this); // empty parenthesis i.e. no current context ... different from normal finction as they reuturn multiple values.
    console.log(this.userName); // undefined here as well
}
chaiX()

console.log("************************");

// Basic Arrow Function ... Explicit Return Arrow Function (return keyword used)
const addTwoNum = (num1, num2) => {
    return num1+num2
}
console.log(addTwoNum(3, 4));

// Implicit Return Arrow Function (without using return keyword)
 const addTwoNumber = (num1, num2) =>  num1 + num2
 console.log(addTwoNumber(4, 5));
 
 // const addTwoNumber = (num1, num2) =>  (num1 + num2)
 // above we wrapped retun in parenthesis but if we used curly braces
 // we would have to write return keyword.... very useful in react

const addTwoNumberX = (num1, num2) =>  ({username : "Mujeeb"}) // here to return an object we used curly braces within parenthesis
console.log(addTwoNumberX()); // no problem with parameters num1 and num2

// Arrow function usefulin Arrays
const myArr = [11, 15, 48, 36]
// myArr.forEach() ..learn later
