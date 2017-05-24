var express = require('express')
var router = express.Router()
var controllerSearch = require('../controllers/controllerSearch')

router.get('/search/:search', controllerSearch.search)


module.exports = router
