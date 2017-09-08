var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

let coins = require('../models/coinsModel')
let Kraken = coins.Kraken
let CoinCap = coins.CoinCap
let Poloniex = coins.Poloniex

const krakenFind = () => {
  return Kraken.find({}).then(function(results){
    return results
  })
}

const poloniexFind = () => {
  return Poloniex.find({}).then(function(results){
    return results
  })
}

const coincapFind = () => {
  return CoinCap.find({}).then(function(results){
    return results
  })
}

router.get('/', function(req, res){

  Promise.all([
    krakenFind(),
    poloniexFind(),
    coincapFind()
  ]).then(allResults => {
    res.send(allResults)
  })

})

router.get('/:exchange', function(req, res){

  let exchange = req.params.exchange

  if (exchange === 'kraken') {
    krakenFind().then(function(results){
      res.send(results)
    })
  }

  if (exchange === 'poloniex') {
    poloniexFind().then(function(results){
      res.send(results)
    })
  }

  if (exchange === 'coincap') {
    coincapFind().then(function(results){
      res.send(results)
    })
  }

})


module.exports = router;
