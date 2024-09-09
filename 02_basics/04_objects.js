// More About Objects in JS
// Singleton Objects with constructors 

// const tinderUser = new Object () -> Singleton Object
const tinderUser = {} //Non-Singleton Object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nesting object within an object -> as much you want
const regularUser = {
    email : "some@gmail.com" ,
    fullName : {
        userFullName : {
            firstName : "Mujeeb", 
            lastName : "Khan"
        }
    }
}

console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

// Merging two or more objects
const obj1 ={1:'a', 2: 'b'}
const obj2 ={3:'c', 4: 'd'}

const obj3 = {obj1 , obj2}
console.log(obj3); // unexpected result

// obj1 acts as target and obj2 as source, therefore obj1 changes 
const obj4 = Object.assign(obj1, obj2)
console.log(obj4); //Bettter Way and expected result
console.log(obj4 === obj1);

// using {} for merging makes sure no original object is manipulated 
const objx ={1:'a', 2: 'b'}
const objy ={3:'c', 4: 'd'}
const obj5 = Object.assign({} ,objx, objy)
console.log(obj5);
console.log(objx);
console.log(obj5 === objx);

// Note : Duplicate values are not merged in Objects
// Mostly (90% of the time) used method for merging objects -> Spreading
const obj6 = {...objx, ...objy}
console.log(obj6);


// When we recieve objects from backend or DB, we receive them as array of objects
const users = [
    {
        id : 1,
        email : "m@gamil.com"
    },
    {
        id : 1,
        email : "m@gamil.com"
    },
    {
        id : 1,
        email : "m@gamil.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

// Methods useful in DB comm
console.log(Object.keys(tinderUser)); // array of keys -> Very Important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// provides an array of array of key value pairs

// While looping in Objects and find a value and sometimes that value doesn't exist so do this
console.log(tinderUser.hasOwnProperty('isLogged'));
