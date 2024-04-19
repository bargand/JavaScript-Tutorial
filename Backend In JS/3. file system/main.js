const { error } = require("console");
const fs = require("fs");
// console.log(fs)
console.log("file create is processed");
fs.writeFile("debu.txt", "debargha is a good boy", () => {
  console.log(fs);
  fs.readFile("debu.txt", (error, data) => {
    console.log(error, data.toString());
  });
  fs.copyFile("debu.txt");
});

console.log("file is created");
