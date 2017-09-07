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
  res.send('listening')

  // Kraken.find().sort('createdAt').then(function(results){
  //   console.log(results);
  //   res.send(results)
  // })

  // Promise.all([
  //   Kraken.find({}).then(function(results){
  //     console.log('kraken');
  //     return results
  //   }),
  //   Poloniex.find({}).then(function(results){
  //     console.log('poloniex');
  //     return results
  //   }),
  //   CoinCap.find({}).then(function(results){
  //     console.log('coincap');
  //     return results
  //   })
  // ]).then(allResults => {
  //   console.log('allResults');
  //   res.send(allResults)
  // })

})


module.exports = router;
