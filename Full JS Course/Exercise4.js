//write a js  programme to find the area of a tringle where three side are 5,6,7

//prothome tringle re porisima ber kore, porisimar ordhoporisima ber korte hbe . tr por ordhoporisimar j man ta berolo seta die area ber korte hbe ((s*(s-a)*(s-b)*(s-c))^1/2)

let a = 5;
let b = 6;
let c = 7;
//calculate the ordhoporisima,here ordhoporisima = O
let O = (a + b + c) / 2;
//calculate the area
let area = Math.sqrt(O * (O - a) * (O - b) * (O - c));
console.log(`The Area Of Tringle is : ${area}`);
