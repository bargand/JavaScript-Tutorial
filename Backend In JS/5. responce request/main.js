const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("this is get requist");
  res.send("H! man");
});
app.post("/", (req, res) => {
  console.log("this is post request");
  res.send("H! it is post");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
