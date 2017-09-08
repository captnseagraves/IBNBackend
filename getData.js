
var fetchUrl = require("fetch").fetchUrl;
var mongoose = require('mongoose')
var mongodb = require('mongodb')

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


const fetchCoinCap = (coincapSymbol) => {
  fetchUrl(`https://www.coincap.io/page/${coincapSymbol}`, function(error, meta, result){
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
}

const fetchPoloniex = (poloniexSymbol) => {
  fetchUrl('https://poloniex.com/public?command=returnTicker', function(error, meta, result){
  let json = JSON.parse(result)
  let coinJSON = json[`BTC_${poloniexSymbol}`]

    let newPoloniex = new Poloniex({
      coin: poloniexSymbol,
      pair_name: `BTC_${poloniexSymbol}`,
      baseVolume: coinJSON.baseVolume,
      high24Hr: coinJSON.high24Hr,
      highestBid: coinJSON.highestBid,
      lastTradePrice: coinJSON.last,
      low24Hr: coinJSON.low24Hr,
      lowestAsk: coinJSON.lowestAsk,
      percentChange: coinJSON.percentChange,
      quoteVolume: coinJSON.quoteVolume,
      timestamps: Date.now()
    })

    newPoloniex.save().then(function(result){
      console.log('Successful New Poloniex.', result);
    }).catch(function(err){
      console.log('Error. Poloniex Not Created.', err);
    })
  })
}

const fetchKraken = (krakenSymbol) => {
  fetchUrl(`https://api.kraken.com/0/public/Ticker?pair=${krakenSymbol}XBT`, function(error, meta, result){
    let json = JSON.parse(result)

    let coinJSON;

    krakenSymbol === 'DASH' ? coinJSON = json.result.DASHXBT : coinJSON = json.result[`X${krakenSymbol}XXBT`];

    let newKraken = new Kraken({
      pair_name: `BTC_${krakenSymbol}`,
      ask: {
        price: coinJSON.a[0],
        wholeLotVolume: coinJSON.a[1],
        lotVolume: coinJSON.a[2]
      },
      bid: {
        price: coinJSON.b[0],
        wholeLotVolume: coinJSON.b[1],
        lotVolume: coinJSON.b[2]
      },
      lastTradeClosed: {
        price: coinJSON.c[0],
        lotVolume: coinJSON.c[1]
      },
      volume: {
        today: coinJSON.v[0],
        last24: coinJSON.v[1]
      },
      numberOfTrades: {
        today: coinJSON.t[0],
        last24: coinJSON.t[1]
      },
      lowPrice: {
        today: coinJSON.l[0],
        last24: coinJSON.l[1]
      },
      highPrice: {
        today: coinJSON.h[0],
        last24: coinJSON.h[1]
      },
      todayOpeningPrice: coinJSON.o,
      timestamps: Date.now()
    })

    newKraken.save().then(function(result){
      console.log('Successful New Kraken.', result);
    }).catch(function(err){
      console.log('Error. Kraken Not Created.', err);
    })
  })
}




setInterval(() => {

  fetchCoinCap('LTC')
  fetchCoinCap('DASH')
  fetchCoinCap('ETH')

  fetchPoloniex('LTC')
  fetchPoloniex('DASH')
  fetchPoloniex('ETH')

  fetchKraken('LTC')
  fetchKraken('DASH')
  fetchKraken('ETH')

}, 3000)
