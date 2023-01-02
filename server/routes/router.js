const express = require('express');
const route = express.Router();
const expressLayouts = require('express-ejs-layouts');
const service = require('../services/render');
const chartController = require('../controller/chart');
const stockController = require('../controller/stock');
const produsenController = require('../controller/produsen');
const reportController = require('../controller/report');

route.get('/', service.home);

route.get('/add-drug', service.add_drug);

// route.post('/chart', chartController.create);
// route.get('/chart', chartController.find);
// route.put('/chart/:id', chartController.update);
// route.delete('/chart/:id', chartController.delete);

route.post('/stock', stockController.create);
route.get('/stock', stockController.find);
// route.put('/stock/:id', stockController.update);
// route.delete('/stock/:id', stockController.delete);

route.post('/produsen', produsenController.create);
route.get('/produsen', produsenController.find);
route.post('/produsen/:pabrik', produsenController.find);
route.post('/produsen/pabrik/:gol', produsenController.find);
route.post('/produsen/gol/:satuan', produsenController.find);
route.post('/produsen/satuan/:nama', produsenController.find);
// route.put('/produsen/:id', produsenController.update);
// route.delete('/produsen/:id', produsenController.delete);

route.post('/report', reportController.create);
route.get('/report/:pengeluaran', reportController.create);
route.get('/report', reportController.find);
// route.put('/report/:tanggal', reportController.update);
// route.delete('/report/:id', reportController.delete);

module.exports = route;