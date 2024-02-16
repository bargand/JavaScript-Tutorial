//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1

let str = (e) => {
  if (e.length <= 1) {
    return e;
  }
  let midStr = e.slice(1, e.length - 1);
  return e.charAt(e.length - 1) + midStr + e.charAt(0);
};

console.log(str("i"));
console.log(str("hi"));
console.log(str("hlo"));
