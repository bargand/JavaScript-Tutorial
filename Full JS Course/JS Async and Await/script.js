/*
//set time out 
setTimeout(() => {
    console.log('debargha nandi')
    document.querySelector("h1").innerHTML = "De-barg-ha N-and-i"
}, 2000);
*/

/*
//when we want just the function with handler
*/

const name = () => {
  console.log("debargha nandi");
  document.querySelector("#change").addEventListener("click", () => {
    setTimeout(() => {
      console.log("debu");

      document.querySelector("h1").innerHTML = "Debargha Nandi";
    }, 3000);
  });
};
setTimeout(name, 0);
// name()
