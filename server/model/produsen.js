const mongoose = require('mongoose');
const model = require('./model');

const produsenDB = mongoose.model('produsen', model.schema);

module.exports = produsenDB;