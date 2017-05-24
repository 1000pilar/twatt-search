var express = require('express')
var OAuth = require('oauth');


module.exports = {
  search : (req, res)=>{
    var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'KaA05UHIwKgNlxVvLAOf3vwfE',
    'Fbavai2xv2arnHsWk8CbXE4gGQXGQ7PtlNtMiNN4wp0GAiT113',
    '1.0A',
    null,
    'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '858113611-AdO1SGcpa78RC4m6wtrjOFdu2SDqFu1llLb3Ojji', //test user token
      'KSVonOBnG00QraKdcVLdNMiuJiqbBcvvbsKMTNB68BTaF', //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(require('util').inspect(data));
        res.send(data)
      });
    }
}
