var express = require('express')
var OAuth = require('oauth');
require('dotenv').config()

module.exports = {
  data : (cb)=>{
    var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_KEY,
    process.env.CONS_KEY,
    '1.0A',
    null,
    'HMAC-SHA1'
    );
    cb(oauth)
  }
}
