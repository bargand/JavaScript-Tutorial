//this is a basic promises
/*
console.log("this is promises");

let prom1 = new Promise((resolve, reject) => {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    reject(alert('hi')
    );
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("Done and your problem is resolve");
    }, 3000);
  }
});

prom1.then((a) => {
  console.log(a);
});
*/

//promise API

let promA = new Promise((resolve, reject) => {
  let rand = Math.random();
  console.log(rand);

  if (rand < 0.5) {
    reject("promise rejected A");
  } else {
    setTimeout(() => {
      console.log("promise A DONE");

      resolve("promise resolve A");
    }, 2000);
  }
});
let promB = new Promise((resolve, reject) => {
  let rand = Math.random();

  if (rand < 0.1) {
    reject("promise rejected B");
  } else {
    setTimeout(() => {
      console.log("Promise B DONE");

      resolve("promise resolve B");
    }, 3000);
  }
});

let a = Promise.any([promA, promB]);
a.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
});


//jokhon amra promise all call korbo tokhon array er moddhe joto gulo promise ache sob resolve hole print hbe
//jokhon amra all setteled call korbo tokhon array er moddhe promise resolve hok ba reject status dekhie print korbe
//jokhon amra race call korbo tokhon array er moddhe j promise ta age exicute hbe seta are setteled hbe