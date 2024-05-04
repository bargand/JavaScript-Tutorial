//write a JS programme to extract first half of a even string

let string = "javascrip";
let halfString = string.length / 2;
let newString = string.substring(0, halfString);

if (string.length % 2 == 0) {
  console.log(newString);
} else {
  console.log("this is odd string");
}
