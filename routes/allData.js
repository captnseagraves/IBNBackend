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
  console.log("allData");

//Will find all resources

  // Kraken.find().sort('createdAt').then(function(results){
  //   console.log(results);
  //   res.send(results)
  // })

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
