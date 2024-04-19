const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Hi I am Get Request");
  res.send("Hi I am Get Request");
});
app.post("/", (req, res) => {
  console.log("Hi I am Post Request");
  res.send("Hi I Am Post Request!");
});

app.get("/index2", (req, res) => {
  console.log("Hi I am html index2 Request");
  res.sendFile("templates/index2.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, name: ["debu", 21, "tub", 31] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
