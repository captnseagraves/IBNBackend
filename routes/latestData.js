var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

let coins = require('../models/coinsModel')
let Kraken = coins.Kraken
let CoinCap = coins.CoinCap
let Poloniex = coins.Poloniex

const krakenFind = (krakenSymbol) => {
  return Kraken.findOne({pair_name: `BTC_${krakenSymbol}`}).sort('-timestamps').then(function(results) {
    let finalResult = {}
    finalResult[`kraken_${krakenSymbol}`] = results
    return finalResult
  })
}

const poloniexFind = (poloniexSymbol) => {
  return Poloniex.findOne({pair_name: `BTC_${poloniexSymbol}`}).sort('-timestamps').then(function(results) {
    let finalResult = {}
    finalResult[`poloniex_${poloniexSymbol}`] = results
    return finalResult
  })
}

const coincapFind = (coincapSymbol) => {
  return CoinCap.findOne({coin_id: `${coincapSymbol}`}).sort('-timestamps').then(function(results) {
    let finalResult = {}
    finalResult[`coincap_${coincapSymbol}`] = results
    return finalResult
  })
}

router.get('/', function(req, res){

  Promise.all([
    krakenFind('LTC'),
    krakenFind('DASH'),
    krakenFind('ETH'),
    poloniexFind('LTC'),
    poloniexFind('DASH'),
    poloniexFind('ETH'),
    coincapFind('LTC'),
    coincapFind('DASH'),
    coincapFind('ETH')
  ]).then(allResults => {
    res.send(allResults)
  })

})


module.exports = router;
