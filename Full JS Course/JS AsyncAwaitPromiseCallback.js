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
/*
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
*/

//example3
/*
const getData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      reject("error");
    }, 3000);
  });
};
let promise = getData2();
console.log('fatching your data......')
promise
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
});
*/

//promises chain

/*
const asyncFunc1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 3000);
  });
};
const asyncFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 3000);
  });
};
const asyncFunc3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 3");
      resolve("success");
    }, 3000);
  });
};

console.log("fatching data 1...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log("fatching data 2...");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
    console.log("fatching data 3...");
    let p3 = asyncFunc3();
    p3.then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});
*/
//this code is write in the another way
/*
console.log('fatching data 1...')
asyncFunc1().then((res)=>{
  console.log(res)
  console.log('fatching data 2...')
  asyncFunc2().then((res)=>{
    console.log(res)
    console.log('fatching data 3...')
    asyncFunc3().then((res)=>{
      console.log(res)

    })
  })
})
*/

//actual promise chain
//j kaj ta call back hell die korchilam sei kaj tai promise chain die korlam.
/*
const getData = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data ${dataId} is here`);
      resolve("success");
    }, 3000);
  });
};
console.log('fatching data 1...')
getData(1)
  .then(() => {
    console.log('fatching data 2...')
    return getData(2);
  })
  .then(() => {
    console.log('fatching data 3...')
    return getData(3);
  })
  .then(() => {
    console.log('fatching data 4...')
    return getData(4);
  })
  .then((res) => {
    console.log(res);
  });
*/

//async and await

/*
let hello = async()=>{
  setTimeout(() => {
    console.log('data1')
  }, 1000);
}

let getHello = async()=>{
  await hello()
}
getHello()
*/

//jeta amra callback hell die korchilam seta async await die korlam
let ApiPushData = async (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data ${dataId}`);
      resolve();
    }, 1000);
  });
};
/*
 */
let ApiGetData = async () => {
  console.log("fatch data 1...");
  await ApiPushData(1);
  console.log("fatch data 2...");
  await ApiPushData(2);
  console.log("fatch data 3...");
  await ApiPushData(3);
  console.log("fatch data 4...");
  await ApiPushData(4);
};
ApiGetData();

//await call korar jonno akta function likhte hoi, function na likhe await sochorachor bebohar kora jai na, kintu advanced JS er moddhe akta term ase IIFE jeta die functon call na kore await call kora jai.

setTimeout(() => {
  (async function () {
    console.log("fatch data 5...");
    await ApiPushData(5);
    console.log("fatch data 6...");
    await ApiPushData(6);
    console.log("fatch data 7...");
    await ApiPushData(7);
  })();
}, 5000);
