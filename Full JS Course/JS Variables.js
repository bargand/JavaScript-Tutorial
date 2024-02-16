// there are 3 types of variables var,let and const

// var is function scoped

// let is block scoped
// When i use Const then the variable is global exicuted.

var x = 10;
let y = 20;
const a = 40

console.log(x);
console.log(y);
console.log(a);


if (y == 20) {
    let y = 30;
    console.log(y);
    console.log(x);
}

if (x == a){
    console.log("x is equal to a");
}
else if (y == a){
    console.log("y is equal to a");
}
else{
    console.log("you are wrong dude")
}

/*
//when i change the const value of the a the it through me an error
const a = 46 //this is not exceptable.
*/