/*
*/
let change = async () => {
    let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I Love You Bargand !!");
    }, 3000);
});
let a = await prom1
console.log(a)
};
change()

