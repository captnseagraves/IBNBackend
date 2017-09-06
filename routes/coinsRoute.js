var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

let coins = require('../models/coinsModel')
let kraken = coins.Kraken
let coinCap = coins.CoinCap
let poloniex = coins.Poloniex

router.get('/', function(req, res){

//Will find all resources

  // Kraken.find().sort('createdAt').then(function(results){
  //   console.log(results);
  //   res.send(results)
  // })
})

router.get('/:coin', function(req, res){

let coin = req.params.coin

console.log(req.body);
console.log('coin', coin);

  // Kraken.find({}).then(function(results){
  //   console.log(results);
  //   res.send(results)
  // })
})

router.get('/poloniex', function(req, res){
  Poloniex.find({}).then(function(results){
    console.log(results);
    res.send(results)
  })
})

router.get('/coincap', function(req, res){
  CoinCap.find({}).then(function(results){
    console.log(results);
    res.send(results)
  })
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
