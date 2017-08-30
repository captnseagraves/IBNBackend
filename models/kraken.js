const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let krakenSchema = new Schema({
  coin: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: true
  }
})

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
  todayOpeningPrice: String
})

let poloniexSchema = new Schema({
  coin: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: true
  }
})


module.exports = mongoose.model('Kraken', krakenSchema);
