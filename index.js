var express = require('express')
var OAuth = require('oauth');
require('dotenv').config()

module.exports = {
  search : (req, res)=>{
    var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_KEY,
    process.env.CONS_KEY,
    '1.0A',
    null,
    'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=%40${req.params.search}`,
      process.env.TOKE_KEY, //test user token
      process.env.SEC_KEY, //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(require('util').inspect(data));
        res.send(data)
      });
    }
}
