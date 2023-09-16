/*
let a = ["d","e","b","a","r","g","h","a",2,0,0,1];
for (let i = 0; i < a.length; i++) {
  console.log(`the ${[i+1]} value is ${a[i]}`);
}
*/
/*
//creat a array of numbers and take input from the user to add numbers to this array
let a = parseInt(prompt("enter a number which you add an array>"));
let b = [1, 2, 3, 4, 5, 6];
let c = b.push(a);
console.log(b);
//his code is do not run in VS Code this is run in raplit and web brouser
*/
/*
//keep adding numners to the array in 1 until 0 is added to the array
let b = [1, 2, 3, 4, 5, 6];
let a;
while (a!=0){
  a = parseInt(prompt("enter a number which you add an array>"));  
  b.push(a);
}
console.log(b);

//solve this question with do while loop
let b = [1, 2, 3, 4, 5, 6];
let a;
do {
  a = parseInt(prompt("enter a number which you add an array>"));  
  b.push(a);
} while (a!=0)
console.log(b);
*/

/*
//filter for numbers divisible by 10 from a given array
let a = [10, 2, 4, 50, 55, 680, 30, 465, 45, 40];
let b = a.filter(myFunction);
function myFunction(x) {
  return (x  % 10 == 0);
}
console.log(b);
*/ 

/*
//creat an array of square of given number
let a = [1,2,3,4,5,6]
let b = a.map(myFunction)
function myFunction(element){
  return element*element
}
console.log(b);
*/

/*
*/
//use reduce to calculate factorial of given numbers from an array of first n natural numbers
let a = [1,2,3,4,5,6]
let b = a.reduce(myFunction)
function myFunction(element1 , element2){
  return element1*element2
}
console.log(b);
