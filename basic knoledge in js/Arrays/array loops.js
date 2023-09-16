/*
//basic for loop in the array
let num = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

//forEach loop in array
let num1 = [1, 2, 3, 4, 5, 6];
num1.forEach((element)=>{
    console.log(element*element)
})
*/

//array.from loop
//used to creat an array from any other object
let name = "DEBARGHA";
let arr = Array.from(name);
console.log(arr);
