const express = require('express')
const app = express()
const port = 3000
// this is serve public file in theserver
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('debargha!')
})
app.get('/about', (req, res) => {
  res.send('About Us!')
})
app.get('/blog', (req, res) => {
  res.send('Blog')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})


app.get('/contact', (req, res) => {
  res.send('Contact us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})