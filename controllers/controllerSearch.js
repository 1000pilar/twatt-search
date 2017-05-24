var express = require('express')
var ou = require('../models/search');
// console.log(ou);
require('dotenv').config()

module.exports = {
  search : (req, res)=>{
    ou.data((oauth)=>{
      oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.user}`,
      process.env.TOKE_KEY, //test user token
      process.env.SEC_KEY, //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(require('util').inspect(data));
        res.send(data)
      });
    })
  }
}
