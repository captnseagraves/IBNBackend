//when run I want to call each api and add results to mongo


var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')
 var cmd = require('node-cmd');

const coins = require('./models/coinsModel')
const CoinCap = coins.CoinCap

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/IBNChallenge', {
  useMongoClient : true
}).then(function(){
  console.log("Database Connected");
})

fetchUrl('https://www.coincap.io/page/ETH', function(error, meta, result){
  let json = JSON.parse(result)

  let newCoinCap = new CoinCap({
    coin: json.display_name,
    coin_id: json.id,
    market_cap: json.market_cap,
    price_usd: json.price_usd,
    price_btc: json.price_btc,
    supply: json.supply,
    total_cap: json.total_cap,
    volume: json.volume,
    timestamps: Date.now()
  })

  newCoinCap.save().then(function(result){
    console.log('Successful New CoinCap.', result);
  }).catch(function(err){
    console.log('Error. CoinCap Not Created.', err);
  })
})

fetchUrl('https://www.coincap.io/page/LTC', function(error, meta, result){
  let json = JSON.parse(result)

  let newCoinCap = new CoinCap({
    coin: json.display_name,
    coin_id: json.id,
    market_cap: json.market_cap,
    price_usd: json.price_usd,
    price_btc: json.price_btc,
    supply: json.supply,
    total_cap: json.total_cap,
    volume: json.volume,
    timestamps: Date.now()
  })

  newCoinCap.save().then(function(result){
    console.log('Successful New CoinCap.', result);
  }).catch(function(err){
    console.log('Error. CoinCap Not Created.', err);
  })
})

fetchUrl('https://www.coincap.io/page/DASH', function(error, meta, result){
  let json = JSON.parse(result)

  let newCoinCap = new CoinCap({
    coin: json.display_name,
    coin_id: json.id,
    market_cap: json.market_cap,
    price_usd: json.price_usd,
    price_btc: json.price_btc,
    supply: json.supply,
    total_cap: json.total_cap,
    volume: json.volume,
    timestamps: Date.now()
  })

  newCoinCap.save().then(function(result){
    console.log('Successful New CoinCap.', result);
  }).catch(function(err){
    console.log('Error. CoinCap Not Created.', err);
  })
})
