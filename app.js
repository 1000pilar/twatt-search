var express = require('express')
var app = express()
var api = require('./routes/api')
var bodyParser = require('body-parser')

app.get('/', (req, res)=>{
  res.send('First access to twitter')
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/api', api)

app.listen(3000)
console.log(`You'r connected to port 3000`);
