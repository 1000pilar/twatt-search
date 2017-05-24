var express = require('express')
var app = express()
var api = require('./api')

app.get('/', (req, res)=>{
  res.send('First access to twitter')
})

app.use('/api', api)

app.listen(3000)
console.log(`You'r connected to port 3000`);
