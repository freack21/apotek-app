const mongoose = require('mongoose');
const model = require('./model');

const chartDB = mongoose.model('chart', model.schema);

module.exports = chartDB;