console.log("hello world");
let name;
console.log(name);
let name1 = "debargha";
console.log(name1);

//cannot be a reserved keyword
// should be neaningful
// cannot start with a number(1name)
// cannot contain a space or hyphen(-)
// are case sensitive

let myName = "debargha nandi";
let middleName = undefined;
let age = 22;
let isDead = false;
let wife = null;

console.log(myName);
typeof myName;

let arr = ["red", "blue", "green", "yellow", "pink"];
arr[5] = "black";
console.log(arr);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr.length);



//functions
function funName(name){
    console.log("hello " + name)
}
funName("debargha");


//function with name
function funName1(firstname, lastname){
    console.log("hello " + firstname + " " +lastname)
}
funName1("debargha", "nandi");

//function with addition
function add(a,b){
    console.log(`the addition of a and b is ${a+b}`)
}
add(2,3);

//another way
function squ (number){
    return number*number;
}
console.log(`the squre of 5 is ${squ(5)}`);


