var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

let coins = require('../models/coinsModel')
let Kraken = coins.Kraken
let CoinCap = coins.CoinCap
let Poloniex = coins.Poloniex

router.get('/kraken', function(req, res){
  Kraken.find({}).then(function(results){
    console.log(results);
    res.send(results)
  })
  console.log('in kraken2 get');

})

router.get('/poloniex', function(req, res){
  Poloniex.find({}).then(function(results){
    console.log(results);
    res.send(results)
  })
  console.log('in kraken2 get');

})

router.get('/coincap', function(req, res){
  CoinCap.find({}).then(function(results){
    console.log(results);
    res.send(results)
  })
  console.log('in kraken2 get');

})


// router.post('/kraken', function(req, res){
//   console.log('here');
//   let newKraken = new Kraken({coin: "testtoken", done: true})
//
//   newKraken.save().then(function(result){
//     res.redirect('/kraken2')
//     console.log(result);
//   }).catch(function(err){
//     console.log(err);
//     res.redirect('/kraken2')
//   })
// })

module.exports = router;
