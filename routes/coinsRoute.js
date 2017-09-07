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

//Will find all resources

  // Kraken.find().sort('createdAt').then(function(results){
  //   console.log(results);
  //   res.send(results)
  // })
})

router.get('/:id', function(req, res){

  let id = req.params.id

  if (id === '1') {
    Kraken.find({}).then(function(results){
      res.send(results)
    })
  }

  if (id === '2') {
    Poloniex.find({}).then(function(results){
      res.send(results)
    })
  }

  if (id === '3') {
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
