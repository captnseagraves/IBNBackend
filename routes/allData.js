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

  Promise.all([
    Kraken.find({}).then(function(results){
      console.log('kraken');
      return results
    }),
    Poloniex.find({}).then(function(results){
      console.log('poloniex');
      return results
    }),
    CoinCap.find({}).then(function(results){
      console.log('coincap');
      return results
    })
  ]).then(allResults => {
    console.log('allResults');
    res.send(allResults)
  })

})

router.get('/:exchange', function(req, res){

  let exchange = req.params.exchange

  if (exchange === 'kraken') {
    Kraken.find({}).then(function(results){
      res.send(results)
    })
  }

  if (exchange === 'poloniex') {
    Poloniex.find({}).then(function(results){
      res.send(results)
    })
  }

  if (exchange === 'coincap') {
    CoinCap.find({}).then(function(results){
      res.send(results)
    })
  }

})


module.exports = router;
