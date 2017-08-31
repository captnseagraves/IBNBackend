//when run I want to call each api and add results to mongo


var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')
 var cmd = require('node-cmd');

const coins = require('./models/coinsModel')
const CoinCap = coins.CoinCap
const Kraken = coins.Kraken
const Poloniex = coins.Poloniex

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/IBNChallenge', {
  useMongoClient : true
}).then(function(){
  console.log("Database Connected");
})

// fetchUrl('https://www.coincap.io/page/ETH', function(error, meta, result){
//   let json = JSON.parse(result)
//
//   let newCoinCap = new CoinCap({
//     coin: json.display_name,
//     coin_id: json.id,
//     market_cap: json.market_cap,
//     price_usd: json.price_usd,
//     price_btc: json.price_btc,
//     supply: json.supply,
//     total_cap: json.total_cap,
//     volume: json.volume,
//     timestamps: Date.now()
//   })
//
//   newCoinCap.save().then(function(result){
//     console.log('Successful New CoinCap.', result);
//   }).catch(function(err){
//     console.log('Error. CoinCap Not Created.', err);
//   })
// })
//
// fetchUrl('https://www.coincap.io/page/LTC', function(error, meta, result){
//   let json = JSON.parse(result)
//
//   let newCoinCap = new CoinCap({
//     coin: json.display_name,
//     coin_id: json.id,
//     market_cap: json.market_cap,
//     price_usd: json.price_usd,
//     price_btc: json.price_btc,
//     supply: json.supply,
//     total_cap: json.total_cap,
//     volume: json.volume,
//     timestamps: Date.now()
//   })
//
//   newCoinCap.save().then(function(result){
//     console.log('Successful New CoinCap.', result);
//   }).catch(function(err){
//     console.log('Error. CoinCap Not Created.', err);
//   })
// })
//
// fetchUrl('https://www.coincap.io/page/DASH', function(error, meta, result){
//   let json = JSON.parse(result)
//
//   let newCoinCap = new CoinCap({
//     coin: json.display_name,
//     coin_id: json.id,
//     market_cap: json.market_cap,
//     price_usd: json.price_usd,
//     price_btc: json.price_btc,
//     supply: json.supply,
//     total_cap: json.total_cap,
//     volume: json.volume,
//     timestamps: Date.now()
//   })
//
//   newCoinCap.save().then(function(result){
//     console.log('Successful New CoinCap.', result);
//   }).catch(function(err){
//     console.log('Error. CoinCap Not Created.', err);
//   })
// })

fetchUrl('https://poloniex.com/public?command=returnTicker', function(error, meta, result){
  let json = JSON.parse(result)
  let LTC = json.BTC_LTC

  let newPoloniex = new Poloniex({
    coin: "LTC",
    pair_name: "BTC_LTC",
    baseVolume: LTC.baseVolume,
    high24Hr: LTC.high24Hr,
    highestBid: LTC.highestBid,
    lastTradePrice: LTC.last,
    low24Hr: LTC.low24Hr,
    lowestAsk: LTC.lowestAsk,
    percentChange: LTC.percentChange,
    quoteVolume: LTC.quoteVolume,
    timestamps: Date.now()
  })


  newPoloniex.save().then(function(result){
    console.log('Successful New Poloniex.', result);
  }).catch(function(err){
    console.log('Error. Poloniex Not Created.', err);
  })
})

fetchUrl('https://poloniex.com/public?command=returnTicker', function(error, meta, result){
  let json = JSON.parse(result)
  let ETH = json.BTC_ETH

  let newPoloniex = new Poloniex({
    coin: "ETH",
    pair_name: "BTC_ETH",
    baseVolume: ETH.baseVolume,
    high24Hr: ETH.high24Hr,
    highestBid: ETH.highestBid,
    lastTradePrice: ETH.last,
    low24Hr: ETH.low24Hr,
    lowestAsk: ETH.lowestAsk,
    percentChange: ETH.percentChange,
    quoteVolume: ETH.quoteVolume,
    timestamps: Date.now()
  })


  newPoloniex.save().then(function(result){
    console.log('Successful New Poloniex.', result);
  }).catch(function(err){
    console.log('Error. Poloniex Not Created.', err);
  })
})

fetchUrl('https://poloniex.com/public?command=returnTicker', function(error, meta, result){
  let json = JSON.parse(result)
  let DASH = json.BTC_DASH

  let newPoloniex = new Poloniex({
    coin: "DASH",
    pair_name: "BTC_DASH",
    baseVolume: DASH.baseVolume,
    high24Hr: DASH.high24Hr,
    highestBid: DASH.highestBid,
    lastTradePrice: DASH.last,
    low24Hr: DASH.low24Hr,
    lowestAsk: DASH.lowestAsk,
    percentChange: DASH.percentChange,
    quoteVolume: DASH.quoteVolume,
    timestamps: Date.now()
  })


  newPoloniex.save().then(function(result){
    console.log('Successful New Poloniex.', result);
  }).catch(function(err){
    console.log('Error. Poloniex Not Created.', err);
  })
})
