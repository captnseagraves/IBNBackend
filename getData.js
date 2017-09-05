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

setInterval(() => {

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

fetchUrl('https://poloniex.com/public?command=returnTicker', function(error, meta, result){
  let json = JSON.parse(result)
  let LTC = json.BTC_LTC

  let newLTC = new Poloniex({
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

  newLTC.save().then(function(result){
    console.log('Successful New Poloniex.', result);
  }).catch(function(err){
    console.log('Error. Poloniex Not Created.', err);
  })


  let ETH = json.BTC_ETH

  let newETH = new Poloniex({
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

  newETH.save().then(function(result){
    console.log('Successful New Poloniex.', result);
  }).catch(function(err){
    console.log('Error. Poloniex Not Created.', err);
  })


  let DASH = json.BTC_DASH

  let newDASH = new Poloniex({
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


  newDASH.save().then(function(result){
    console.log('Successful New Poloniex.', result);
  }).catch(function(err){
    console.log('Error. Poloniex Not Created.', err);
  })
})

fetchUrl('https://api.kraken.com/0/public/Ticker?pair=ETHXBT', function(error, meta, result){
  let json = JSON.parse(result)

  let ETH = json.result.XETHXXBT

  let newKraken = new Kraken({
    pair_name: "BTC_ETH",
    ask: {
      price: ETH.a[0],
      wholeLotVolume: ETH.a[1],
      lotVolume: ETH.a[2]
    },
    bid: {
      price: ETH.b[0],
      wholeLotVolume: ETH.b[1],
      lotVolume: ETH.b[2]
    },
    lastTradeClosed: {
      price: ETH.c[0],
      lotVolume: ETH.c[1]
    },
    volume: {
      today: ETH.v[0],
      last24: ETH.v[1]
    },
    numberOfTrades: {
      today: ETH.t[0],
      last24: ETH.t[1]
    },
    lowPrice: {
      today: ETH.l[0],
      last24: ETH.l[1]
    },
    highPrice: {
      today: ETH.h[0],
      last24: ETH.h[1]
    },
    todayOpeningPrice: ETH.o,
    timestamps: Date.now()
  })

  newKraken.save().then(function(result){
    console.log('Successful New Kraken.', result);
  }).catch(function(err){
    console.log('Error. Kraken Not Created.', err);
  })
})

fetchUrl('https://api.kraken.com/0/public/Ticker?pair=LTCXBT', function(error, meta, result){
  let json = JSON.parse(result)

  let LTC = json.result.XLTCXXBT

  let newKraken = new Kraken({
    pair_name: "BTC_LTC",
    ask: {
      price: LTC.a[0],
      wholeLotVolume: LTC.a[1],
      lotVolume: LTC.a[2]
    },
    bid: {
      price: LTC.b[0],
      wholeLotVolume: LTC.b[1],
      lotVolume: LTC.b[2]
    },
    lastTradeClosed: {
      price: LTC.c[0],
      lotVolume: LTC.c[1]
    },
    volume: {
      today: LTC.v[0],
      last24: LTC.v[1]
    },
    numberOfTrades: {
      today: LTC.t[0],
      last24: LTC.t[1]
    },
    lowPrice: {
      today: LTC.l[0],
      last24: LTC.l[1]
    },
    highPrice: {
      today: LTC.h[0],
      last24: LTC.h[1]
    },
    todayOpeningPrice: LTC.o,
    timestamps: Date.now()
  })

  newKraken.save().then(function(result){
    console.log('Successful New Kraken.', result);
  }).catch(function(err){
    console.log('Error. Kraken Not Created.', err);
  })
})

fetchUrl('https://api.kraken.com/0/public/Ticker?pair=DASHXBT', function(error, meta, result){
  let json = JSON.parse(result)

  let DASH = json.result.DASHXBT

  let newKraken = new Kraken({
    pair_name: "BTC_DASH",
    ask: {
      price: DASH.a[0],
      wholeLotVolume: DASH.a[1],
      lotVolume: DASH.a[2]
    },
    bid: {
      price: DASH.b[0],
      wholeLotVolume: DASH.b[1],
      lotVolume: DASH.b[2]
    },
    lastTradeClosed: {
      price: DASH.c[0],
      lotVolume: DASH.c[1]
    },
    volume: {
      today: DASH.v[0],
      last24: DASH.v[1]
    },
    numberOfTrades: {
      today: DASH.t[0],
      last24: DASH.t[1]
    },
    lowPrice: {
      today: DASH.l[0],
      last24: DASH.l[1]
    },
    highPrice: {
      today: DASH.h[0],
      last24: DASH.h[1]
    },
    todayOpeningPrice: DASH.o,
    timestamps: Date.now()
  })

  newKraken.save().then(function(result){
    console.log('Successful New Kraken.', result);
  }).catch(function(err){
    console.log('Error. Kraken Not Created.', err);
  })
})

}, 3000)
