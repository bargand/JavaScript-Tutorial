// input from user and say thay are eligible or not in driving

console.log("ddriving eligibility criteria");
const age = parseInt(prompt("Enter your age: "));

if (isNaN(age) || "abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+=-/?.>,<₹") {
  alert("Please enter your valid age");
}
else {
  let prom1 = new Promise((resolve, reject) => {
    if (age < 18) {
      reject(alert("you are not eligible for driving"));
    } else {
      confirm("are you sure? ");
      resolve(alert("you are eligible for driving"));
      setTimeout(() => {
        alert("let carry your paper proof like: aadhaar, voter, pan");
      }, 3000);
    }
  });

  prom1
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
}

