//fatch API (Application Programming Interface) = the fetch API provides an interface for fatching(sending/receiving) resources.

/*
const url = "https://cat-fact.herokuapp.com"

//we can fetch API with this 2 lines
let promise = fetch(url)
console.log(promise)
*/

const url = "https://cat-fact.herokuapp.com/facts";

let getFact = async () => {
    try {
        console.log("getting data...");
        let response = await fetch(url);
        console.log(response); //JSON Format
        let data = await response.json();
        console.log(data[4].text);
    } catch (error) {
        console.log(SyntaxError("this is an syntax error"))
    }
};
getFact();
