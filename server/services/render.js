const axios = require('axios');

exports.home = (req, res) => {
    axios.get('http://localhost:3000/stock')
    .then(function(response) {
        let stocks = response.data;
        axios.get('http://localhost:3000/produsen')
        .then(function(response) {
            let produsens = response.data;
            axios.get('http://localhost:3000/report')
            .then(function(response) {
                res.render('index', {
                    layout: 'main',
                    reports: response.data,
                    produsens,
                    stocks
                });
            })
        })
    });
};

exports.add_drug = (req, res) => {
    res.render('add-drug', {
        layout: 'main'
    });
};
