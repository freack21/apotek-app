const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT||8080;

//log
app.use(morgan('tiny'));
//connectDB
connectDB();
//parse req
app.use(bodyparser.urlencoded({extended: true}));
//set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'views/ejs'));
//set layout
app.use(expressLayouts);
//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
//load router
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`);});