var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('here')
    // fetchUrl('https://www.coincap.io/page/BTC', function(error, meta, body){
    //   res.send(body.toString())
    //   console.log(body.toString())
    // })
});

router.get('/test', function(req, res, next) {
  var MongoClient = mongodb.MongoClient

  var url = 'mongodb://localhost:27017/IBNChallenge'

  MongoClient.connect(url, function(err, db){
    if (err){
      console.log('Unable to connect to the server', err);
    } else {
      console.log('Connection Established');

      var collection = db.collection('Kraken')

      collection.find().toArray(function(err, result){
        if (err) {
          res.send(err)
        } else if (result.length){
          res.send(result)
        } else {
          res.send('No documents found')
        }

        db.close()
      })

    }
  })

  // res.send('here')
    // fetchUrl('https://www.coincap.io/page/BTC', function(error, meta, body){
    //   res.send(body.toString())
    //   console.log(body.toString())
    // })
});

router.post('/addtest', function(req, res, next) {
  var MongoClient = mongodb.MongoClient

  var url = 'mongodb://localhost:27017/IBNChallenge'

  MongoClient.connect(url, function(err, db){
    if (err){
      console.log('Unable to connect to the server', err);
    } else {
      console.log('Connection Established');

      var collection = db.collection('Kraken')

    var newKrak = {sample: 2}

    collection.insert([newKrak], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/test')
      }
      db.close()
    })
    }
  })

  // res.send('here')
    // fetchUrl('https://www.coincap.io/page/BTC', function(error, meta, body){
    //   res.send(body.toString())
    //   console.log(body.toString())
    // })
});

// router.get('/kraken', function(req, res){
//   console.log('here');
//   mongoose.model('Kraken').find(function(err, coins){
//     console.log('also here');
//     res.send(coins)
//   })
// })



module.exports = router;
