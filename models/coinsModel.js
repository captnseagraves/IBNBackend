const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let krakenSchema = new Schema({
  pair_name: String,
  ask: {
    price: String,
    wholeLotVolume: String,
    lotVolume: String
  },
  bid: {
    price: String,
    wholeLotVolume: String,
    lotVolume: String
  },
  lastTradeClosed: {
    price: String,
    lotVolume: String
  },
  volume: {
    today: String,
    last24: String
  },
  numberOfTrades: {
    today: Number,
    last24: Number
  },
  lowPrice: {
    today: String,
    last24: String
  },
  highPrice: {
    today: String,
    last24: String
  },
  todayOpeningPrice: String,
  timestamps: Date
})

let poloniexSchema = new Schema({
  coin: String,
  pair_name: String,
  baseVolume: String,
  high24Hr: String,
  highestBid: String,
  lastTradePrice: String,
  low24Hr: String,
  lowestAsk: String,
  percentChange: String,
  quoteVolume: String,
  timestamps: Date
})

let CoinCapSchema = new Schema({
  coin: String,
  coin_id: String,
  market_cap: Number,
  price_usd: Number,
  price_btc: Number,
  supply: Number,
  total_cap: Number,
  volume: Number,
  timestamps: Date
})


module.exports = {
  Kraken: mongoose.model('Kraken', krakenSchema),
  Poloniex: mongoose.model('Poloniex', poloniexSchema),
  CoinCap: mongoose.model('CoinCap', CoinCapSchema)
}
