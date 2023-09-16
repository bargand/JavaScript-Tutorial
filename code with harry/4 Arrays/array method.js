/*
//to string method
let a = [1, 2, 3, 4, 5];
let b = a.toString();
console.log(`the arrys are ${b} and the type of the arrys are ${typeof b}`);
*/

/*
//join method
let a = [1, 2, 3, 4, 5];
let c = a.join("@");
console.log(`the arrys are ${c} and the type of the arrys are ${typeof c}`);

//join method can join the elements
let arr1 = [1,2,3,4,5]
let arr2 = arr1.join(" and ")
console.log(arr2)
*/

/*
//pop method
//the pop element can remove the last element in the array
let a = [1, 2, 3, 4, 5];
let d = a.pop() //pop exhost the last element in array
console.log(`the ${d} is the popped element`)
*/

/*
//push method
//puthe push element can add a element in the array
let a = [1, 2, 3, 4, 5];
let e = a.push(6)
console.log(`the output is ${a} and the push element is ${e}`)
*/

/*
//shift method
//shift method can remove the first element in a array
let a = [1, 2, 3, 4, 5];
let f = a.shift();
console.log(a);
console.log(`the ${f} is shifted in the array`);
*/

/*
//unshift method
//unshift add an element in the array at the first
let a = [1, 2, 3, 4, 5];
let g = a.unshift(0);
console.log(a)
*/

/*
//changing an element
let a = [1, 2, 3, 4, 5];
a[2]=10;
console.log(a)
*/

/*
//delete element
let a = [1, 2, 3, 4, 5];
let j = a[3]
console.log(`here the ${j} is deleted`)
let i = delete a[3]
console.log(a)
*/

/*
//concat method
//it can dd the all existing arrays
let arr1 = [1,2,3,4,5]
let arr2 = ["debargha" , "Riya"]
let arr3 = [true, false]
console.log(arr1.concat(arr2,arr3))
console.log(arr2.concat(arr1,arr3))//another way
*/

/*
//other work of an concat method
let arr1 = [1,2,3,"debu","Riya"]
let arr2 = arr1.concat(true)
console.log(arr2)
*/

/*
//flat method
let arr1 = [[1,2],[3,4],[5,6]]
let arr2 = arr1.flat()
console.log(arr2)
*/

/*
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Prabir" , "Supriya") define the new elements to be added.
let arr1 = ["Debargha", "Riya"];
arr1.splice(2, 0, "Prabir", "Supriya");
console.log(arr1);

//another work of a splice ellement
arr1.splice(0,1)
console.log(arr1)
*/

/*
//slice method
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
let arr1 = [1,2,3,4]
let arr2 = arr1.slice(1)
console.log(arr2)

//another work of a slice() method
let arr1 = [1,2,3,4,5]
let arr2 = arr1.slice(3)
console.log(arr2)
*/

/*
//remove 3,4,5,6,7 with splice method
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1.splice(2, 5);
console.log(arr1);
console.log(`here we remove ${arr2} and then we get ${arr1} output.`)

//remove "orrange" & "apple" with splice method 
let arr3 = ["Banana", "Orange", "Apple", "Kiwi"];
let arr4 = arr3.splice(1, 2);
console.log(arr3);
console.log(`here we remove ${arr4} and then we get ${arr3} output.`)

//remove 3 and 4 with splice method
let arr5 = [1,2,3,4,5,6]
let arr6 = arr5.splice(2,2)
console.log(arr5)
console.log(`here we remove ${arr6} and then we get ${arr5} output.`)
*/

/*
//map method
//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.
let num1 = [4, 9, 16, 25, 36];
let num2 = num1.map(Math.sqrt);
console.log(num2);

//other work on a map method
let person = [
    { firstName: "debargha", lastName: " nandi" },
    { firstName: "Riya", lastName: " Pandit" },
];
let FullName = person.map(getFullName);
function getFullName(item) {
    return [item.firstName, item.lastName].join("");
}
console.log(FullName);

//other work
let num3 = [1, 2, 3, 4, 5];
let num4 = num3.map(MyFunction);
function MyFunction(multiply) {
    return multiply * 10;
}
console.log(num4);

//other work
let arr = [45,23,50]
let a = arr.map((value , index, array)=>{
    console.log(value, index, array)
    return value+index
})
console.log(a.length)
*/

/*
//filter method
let num1 = 10;
let ages = [21, 31, 40, 50, 72, 92, 10, 2, 29, 15, 9];
let num2 = ages.filter(myFunction);
function myFunction(age) {
    return age >= num1;
}
console.log(num2.sort());

//anothe way to filter a array
let arr1 = [6,9,85,21,20,41,75,42,10,3]
let arr2 = arr1.filter(myFunction)
function myFunction(fil){
    return fil > 18
}
console.log(`${arr2.sort()} age group can drive a car`)
console.log(arr2)
console.log(arr2.sort())

//other work
let arr3 = [1,2,3,4,5,6]
let arr4 = arr3.filter((a)=>{
    return a<3
})
console.log(arr4)
*/

/*
//reduce method in js
let arr1 = [100, 25, 25, 50];
let arr2 = arr1.reduce(myFunction);
function myFunction(total, num) {
    return total - num;
}
console.log(arr2);

//other work of reduce method(+)
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = arr3.reduce(myFunction);
function myFunction(total, num) {
    return total + Math.round(num);
}
console.log(arr4);

//other work(/)
let arr5 = [1, 2, 3, 4, 5, 6];
let arr6 = arr5.reduce(myFunction);
function myFunction(total, num) {
    return total / Math.round(num);
}
console.log(arr6);

//other work(*)
let arr7 = [1, 2, 3, 4, 5, 6];
let arr8 = arr7.reduce(myFunction);
function myFunction(total, num) {
    return total * Math.round(num);
}
console.log(arr8);

//reduce method other work with arrow function
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = arr3.reduce((h1, h2) => {
    return h1 + h2;
});
console.log(arr4);
*/



