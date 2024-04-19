import fs from "fs/promises";

let a = await fs.readFile("debu.txt")
console.log(a.toString())

let b = await fs.writeFile("tub.txt", "hi there this is debargha nandi")
console.log(b)

let c = await fs.writeFile("main3.js", "console.log(20)")
console.log(c)


let d = await fs.readFile("main3.js")
console.log(d)

let e = await fs.appendFile("main3.js", "\nconsole.log(21)")
console.log(e)