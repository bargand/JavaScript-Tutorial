//create a rout where one file is render with css

const express = require('express')
const app = express()
const port = 3000
// setup ejs engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index")
})
app.get('/about', (req, res) => {
  res.render("about")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})