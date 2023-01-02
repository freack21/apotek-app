const mongoose = require('mongoose');
const model = require('./model');

const stockDB = mongoose.model('stock', model.schema);

module.exports = stockDB;