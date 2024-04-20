const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})
// define the about route
router.get('/blog/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})


module.exports = router