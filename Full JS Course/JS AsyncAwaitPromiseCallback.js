//syncronus
//Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
/*
console.log("a");
console.log("b");
console.log("c");
*/

//asyncronus
//Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
/*
console.log("d");
console.log("e");
console.log("f");
setTimeout(() => {
  console.log("i");
}, 3000);
console.log("g");
console.log("h");
*/

//callback
//A callback is a function passed as an argument to another function.
/*
let sum = (a, b) => {
  console.log(a + b);
};

let calculator = (a, b, sumCallback) => {
  sumCallback(a, b);
};
calculator(1, 2, sum);

//example2

let debu = (a, b) => {
  console.log(a * b);
};
let calcu = (a, b, debu) => {
  debu(a, b);
};
calcu(3, 4, debu);

//example3

calculator(1, 2, (x, y) => {
  console.log(x + y);
});
*/

//callback hell

//Callback Hell : Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom) This style of programming becomes difficult to understand & manage.

// step1 (first call a basic function)
/*
let getData = (dataId)=>{
    console.log('data', dataId)
}
*/

//step2 (when i call the function the function is exicute after 2 sec)
/* 
let getData = (dataId)=>{
    setTimeout(() => {
        console.log('data', dataId)
    }, 2000);
}
*/

//step3 (we want some deta , when one exicute then two then 3 then 4)
/*
let getData = (dataId, getMoreData)=>{
    setTimeout(() => {
        console.log('data', dataId)
        if (getMoreData) {
            getMoreData()
        }
    }, 2000);
}
getData(1)
getData(2)
getData(3)
getData(4)
*/

//step4 (i want when data1 print after 2 sec then i print data2 afetr2 sec then data 3 after 2 sec thats all)
/*
let getData = (dataId, getMoreData) => {
  setTimeout(() => {
    console.log("data", dataId);
    if (getMoreData) {
      getMoreData();
    }
  }, 3000);
};
console.log("fatch data 1 ...");
getData(1, () => {
  console.log("fatch data 2 ...");
  getData(2, () => {
    console.log("fatch data 3 ...");
    getData(3, () => {
      console.log("fatch data 4 ...");
      getData(4, () => {
        console.log("fatch data 5 ...");
        getData(5);
      });
    });
  });
});
*/

//promise

//basic concept
/*
let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  resolve("seccess");
});
*/

//how to create
/*
let getData = (dataId, getMoreData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getMoreData) {
        getMoreData();
      }
    }, 3000);
  });
};
getData(1)
*/

//how to use promise

/*
const getPromise = ()=>{
  return new Promise((resolve, reject) => {
    console.log('i am a promise')
    reject("success")
  })
}
let promise = getPromise()
promise.then((resust)=>{
  console.log('promise fulfilled', resust)
}).catch((error)=>{
  console.error(TypeError("this is type error", error));
})
*/

//example2

const factData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      reject("success");
    }, 3000);
  });
};

console.log("facthing data1...");
let promise = factData();
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(TypeError("error occured"));
    console.log(err);
  });
