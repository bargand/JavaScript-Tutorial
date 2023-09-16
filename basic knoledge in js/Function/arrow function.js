/*
console.log("arrow function")
//Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;
console.log(myFunction(4, 2));
*/

console.log("before arrow function");

//before arrow function
let boyName = "";
boyName = function () {
  return "debargha nandi";
};
console.log(boyName());

console.log("after arrow function");

//after arrow function
let boyName2 = "";
boyName2 = () => {
  return "debargha nandi";
};
console.log(boyName2());
//another way to call a arrow function
let boyName4 = "";
boyName4 = () => "debargha Nandi";
console.log(boyName4());

//arrow function with parameeter
let boyName3 = "";
boyName3 = (deb) => "Debargha" + deb;
console.log(boyName3(" Nandi"));
//try it out
let boyName5 = "";
boyName5 = (KichuKotha) => "debargha Nandi" + KichuKotha;
console.log(boyName5(" is a great person"));

//arrow function without parameters
let boyName6 = ""
boyName6 = deb => "DEBARGHA" + deb
console.log(boyName6(" NANDI"))