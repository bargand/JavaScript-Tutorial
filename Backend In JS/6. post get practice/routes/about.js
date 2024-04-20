const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('about home page')
})

router.get('/about/:slug', (req, res) => {
  res.send(`fetch the about for ${req.params.slug}`)
})

module.exports = router