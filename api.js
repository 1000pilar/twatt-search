var express = require('express')
var router = express.Router()
var index = require('./index')

router.get('/search', index.search)


module.exports = router
