const express = require("express");
const { type } = require("os");
const app = express();
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"))

//middleware 1
const d = new Date();
app.use((req, res, next) => {
  fs.writeFileSync(
    "public/NewMiddleware.txt",
    `${d.getDate()}/ ${
      d.getMonth() + 1
    }/ ${d.getFullYear()} and the time is ${d.getTime()} is a ${req.method}`
  );

  console.log(
    `${d.getDate()}/ ${
      d.getMonth() + 1
    }/ ${d.getFullYear()} and the time is ${d.getTime()} is a ${req.method}`
  );
  next();
});
//middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About!");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
