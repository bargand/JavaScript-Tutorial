/*

let arr = [1, 2, 3, 4];

//to detect the length of the array
console.log(arr.length);

//to change the value of the array
arr[1] = 10;
console.log(arr);

//to detect the type of the array
console.log(typeof(arr));

//to convert the array to string
console.log(arr.toString());

//push a number in a string
arr.push(5);
console.log(arr);

//pop a number from the string
arr.pop();
console.log(arr);

//shift a number from the string
arr.shift();
console.log(arr);

//unshift a number in the string
arr.unshift(1);
console.log(arr);


//push er ja kaj unshift er o aki kaj r pop er ja kaj shift er o aki kaj

//push a string in a array
arr.push('debargha')
console.log(arr)
//concatination 3 array in a single array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let MainArr = arr1.concat(arr2,arr3)
console.log(MainArr)

//short method

let arr4 = [1, 2, 3, 4,8,10,4,6,2,1,93];
let mod = arr4.sort();
console.log(mod);



// Loops in Array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//javascript map method

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/

// let NewArr = []

// for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     NewArr.push(element ** 2);
    // }
    
    //Map Method
    //Map can be used when you want to perform an action on each element in a collection, and gather the results into a new array.
    
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    let NewArr = arr.map((e) => {
        return e ** 2;
    });
    console.log(NewArr);
    
/*
//filter Method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greaterThanSeven = (e) => {
  return e > 7 ? true : false;
};
console.log(arr.filter(greaterThanSeven));
*/

/*
//reduce method
//The filter() method creates a new array filled with elements that pass a test provided by a function. 

let arr = [1, 2, 3, 4, 5, 6];

const red = (a , b)=>{
    return a + b;
}
console.log(arr.reduce(red));
*/

/*
//convert any form to an array

console.log(Array.from('debargha'));
*/