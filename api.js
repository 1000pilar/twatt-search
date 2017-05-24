var express = require('express')
var router = express.Router()
var index = require('./index')

router.get('/search/:search', index.search)


module.exports = router
