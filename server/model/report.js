const mongoose = require('mongoose');
const model = require('./model');

const reportDB = mongoose.model('report', model.report);

module.exports = reportDB;