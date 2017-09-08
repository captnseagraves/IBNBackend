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
    Kraken.findOne({pair_name: "BTC_DASH"}).sort('-timestamps').then(function(results){
      return {
        kraken_DASH: results
      }
    }),
    Kraken.findOne({pair_name: "BTC_ETH"}).sort('-timestamps').then(function(results){
      return {
        kraken_ETH: results
      }
    }),
    Poloniex.findOne({pair_name: "BTC_LTC"}).sort('-timestamps').then(function(results){
      return {
        poloniex_LTC: results
      }
    }),
    Poloniex.findOne({pair_name: "BTC_DASH"}).sort('-timestamps').then(function(results){
      return {
        poloniex_DASH: results
      }
    }),
    Poloniex.findOne({pair_name: "BTC_ETH"}).sort('-timestamps').then(function(results){
      return {
        poloniex_ETH: results
      }
    }),
    CoinCap.findOne({coin_id: "LTC"}).sort('-timestamps').then(function(results){
      return {
        coincap_LTC: results
      }
    }),
    CoinCap.findOne({coin_id: "DASH"}).sort('-timestamps').then(function(results){
      return {
        coincap_DASH: results
      }
    }),
    CoinCap.findOne({coin_id: "ETH"}).sort('-timestamps').then(function(results){
      return {
        coincap_ETH: results
      }
    })
  ]).then(allResults => {
    console.log('allResults');
    res.send(allResults)
  })

})


module.exports = router;
