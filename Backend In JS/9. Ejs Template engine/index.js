const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let sitename = "Debargha"
  let content = "Get Started"
  let arr = [1,2,3,4,5]
  res.render("tubai", {sitename: sitename, content: content, arr})
})
// app.get('/blogpost', (req, res) => {
//   res.render("templates/blogpost", {sitename: sitename, content: content})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})