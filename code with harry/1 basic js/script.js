//1. way to print in js
// console.log("Hello World");
// alert("js Tutorial start now");
// document.write("hello there this is debargha nandi");

//2. js console API
// console.log("JS code start now");
// console.error(" this IS An error");
// console.warn("This Is A warning");
// console.log("hello world", 56-385 ,"debargha nandi")

//3. JS Variables
//what are variables: container to store data values.
var number1 = 52346;
var number2 = 3875;
console.log(number1 + number2);

//4. deta type in JS
//string deta type
var str1 = "string 1";
var str2 = "string 2";
console.log(str1 + str2);
//number detatype
var num1 = 34;
var num2 = 674;
console.log(num1 - num2);
//objects deta type
var marks = {
  ravi: 8975,
  debu: 753,
  riya: 757,
};
console.log(marks);
//boolian detatype
var a = true;
var b = false;
console.log(a, b);
//another example of boolian detatype
var num1 = 65;
var num2 = 76;
console.log(num1 > num2);
//undefined detatype
var num1 = undefined;
console.log(num1);
//another example of undefined detatype
var num1;
console.log(num1);
//nul deta type
var num2 = null;
console.log(num2);

// at a very high level there are two types deta types in Js
// 1. Primitive deta type : undefined , null , number , boolean , string , Symbol
// 2. referance deta type: Arrays and objects
var arr = [1, 2, 3, 4, 5];
console.log(arr);

//operators in JS
//1. arithmetic operators
var a = 34;
var b = 65;
console.log("the value of a+b is", a + b);
console.log("the value of a-b is", a - b);
console.log("the value of a/b is", a / b);
console.log("the value of a*b is", a * b);
//2. assignment opprator(*can fuck me*)
var c = a;
console.log(c);
var b = a;
b += 2;
console.log(b);
//3. comperison operator
console.log(" this is comperison operator:");
var x = 3;
var y = 4;
console.log("x = 3 and y = 4 so, x >= y is-", x >= y);
console.log("x = 3 and y = 4 so, x <= y is-", x <= y);
console.log("x = 3 and y = 4 so, x == y is-", x == y);
console.log("x = 3 and y = 4 so, x != y is-", x != y);
console.log("x = 3 and y = 4 so, x > y is-", x > y);
console.log("x = 3 and y = 4 so, x < y is-", x < y);
//4. logical operators. (34+56 here + is an operator and 34 and 56 is an operend)
//logical and operator
console.log("this is logical operators:");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
//logical or operator
console.log("this is logical or operator");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//logical not operator
//jo sach ko jhuth or jhuth to sach mein badal de usko logical not operator bolte hai or har kar jine walo ko bazikar kahete hai.
console.log(!false);
console.log(!true);

//functions
//DRY = Do Not repeat Yourself
function avg(j, k) {
  c = (j + k) / 2;
  return c;
}
c1 = avg(2, 2);
c2 = avg(12, 13);
console.log(c1, "and", c2);

//conditionals in JS
var age = 34;
if (age > 7) {
  console.log("you are not a kid");
} else {
  console.log("you are a kid");
}

//other example
var age = 30;
if (age <= 18) {
  console.log("you are in matric student");
} else if (age <= 19) {
  console.log("you are in secondary student");
} else if (age <= 24) {
  console.log("you are in BA/BSc student");
} else if (age <= 26) {
  console.log("you are in MA/MSc student");
} else if (age <= 30) {
  console.log("you are in Phd student");
} else {
  console.log("you are post doctorate student");
}

//loops in js
//for loop
var arr = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//other way to display array in for loop
arr.forEach(function (element) {
  console.log(element);
});
//const an let variable
// let j=0;
// const ac = 0;
// ac = ac+1

//while loop in JS
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let j = 0;
while (j < array.length) {
  console.log(array[j]);
  j++;
}

var f = 1;
while (f <= 10) {
  console.log(f);
  f = f + 1;
}

//array methods
console.log("this is array methods ");
let myarr = ["debu", "tubai", null, 34, true];
console.log(myarr.length);
// myarr.pop();
// myarr.push("riya");
// myarr.shift();
myarr.unshift("riya");
console.log(myarr);

// strimg mrthod in JS
let mystr = "i am debargha nandi";
console.log(mystr.length);
console.log(mystr.indexOf("debargha"));
console.log(mystr.indexOf("nandi"));
console.log(mystr.slice("1 , 13"));
h = mystr.replace("debargha", "riya");
console.log(h);
console.log(h, mystr);

//date methods
let mydate = new Date();
console.log(mydate);
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMilliseconds());

//dom(document object module) manupulation
let click = document.getElementById("click");
console.log(click);

let container = document.getElementsByClassName("container");
console.log(container);

// container[0].style.background = "yellow";
container[0].style.margin = "9px";
container[0].style.border = "2px solid red";

container[0].classList.add("bg-primary");
//document find method
console.log(container[0].innerHTML);

bt = document.getElementsByTagName("button");
console.log(bt);

con = document.getElementsByClassName("BodyClass");
console.log(con);

co = document.getElementById("BodyP");
console.log(co);

div = document.getElementsByName("div");
console.log(div);

//query selector
sel = document.querySelector(".container");
console.log(sel);

//events in JS
function clicked() {
  console.log("the button was clicked");
}
//1. on load event
window.onload = function () {
  console.log("the document was loaded");
};

// container.addEventListener("click", function () {
//   console.log("clicked on container");
// });

function clicked() {
  document.getElementById("demo").innerHTML = "hello world";
}

function clicked() {
  document.getElementById("click").innerText = "hello world 2";
}

function clicked() {
  document.getElementById("click").style.color = "green";
}
//this 2 code is right code
function mouseDown() {
  document.getElementById("MouseElement").style.color = "purple";
  document.getElementById("MouseElement").innerHTML =
    "this is mouse down element"; //for document display
  console.log("this is mouse down element"); //for console display
}

function mouseUp() {
  document.getElementById("MouseElement").style.color = "green";
  document.getElementById("MouseElement").innerHTML =
    "this is mouse up element"; //for document display
  console.log("this is mouse up element"); //for console display
}

//arrow function

let summ = (a, b) => a * b;
console.log(summ(5, 6)); //to display in console

let debu = (a, b) => a - b;
document.getElementById("arrow").innerHTML = debu(9678, 782364); //to display in document

//set time function
login = () => {
  console.log(" hi, this is debargha nandi");
};
setTimeout(login, 5000);

//JS local storage
//localStorage
// localStorage.setItem("name", "debargha");
// localStorage.setItem("age", "21");
// localStorage.setItem("DOB", "19/01/2001");
//localStorage.removeItem('name')  //to remove the name of the local storage
//localStorage.clear()  //to clear the local storage

//json
obj = { name: "debargha", age: "21" };
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
// parsed = JSON.parse(`{ name: "debargha", age: "21" }`);
// console.log(parsed);
