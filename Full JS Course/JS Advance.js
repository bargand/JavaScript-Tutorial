//IIFE = immediately invoked function expression.

let sleep = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
};
//jodi ami sudhu let a abong let b likhe print korar chesta kortam tahole error asto, error jate na ase tr jonno amra iife er bebohar jate 1 ta function 2 to variable er moddhei chole.
(async function main() {
  let a = await sleep();
  let b = await sleep();
  console.log(a);
  console.log(a + b);
})();

//destructureing in array

//jodi sudhu eta kore rekhe ditam to bas x er y er man ta print hoto, kintu niche jeta korechi ota korle x ar y er man nie seta akta array er moddhe rekhe baki gulo alada variable er moddhe rekhe debe.
/*
let [x, y] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y)
*/

//jodi ...rest na likhe sudhu rest lekha hoto tahole 1, 2 ,3 print hoto baki gulo print hoto na.
(async function main2() {
  let [c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7];
  console.log(c, d, rest);
})();


//destructuring in object

(async function main3(){
    let obj = {
        a : 1, 
        b : 2, 
        c : 3, 
        d : 4
    }
    let {a, b, c} = obj
    console.log(a, b, c)
})()
