var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

let coins = require('../models/coinsModel')
let Kraken = coins.Kraken
let CoinCap = coins.CoinCap
let Poloniex = coins.Poloniex

router.get('/', function(req, res){
  console.log('listening');

  Promise.all([
    Kraken.findOne({pair_name: "BTC_LTC"}).sort('-timestamps').then(function(results){
      return {
        kraken_LTC: results
      }
    }),
    Poloniex.find().sort('-timestamps').limit(3).then(function(results){
      return {
        poloniex: results
      }
    }),
    CoinCap.find().sort('-timestamps').limit(3).then(function(results){
      return {
        coincap: results
      }
    })
  ]).then(allResults => {
    console.log('allResults');
    res.send(allResults)
  })

})


module.exports = router;
