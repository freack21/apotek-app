let reportDB = require('../model/report');
const { report } = require('../routes/router');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({ message: "Konten tidak boleh kosong" });
    }

    let [tanggal, pengeluaran] = req.params.pengeluaran.split('_');
    pengeluaran = Number(pengeluaran);
    reportDB.find({ tanggal })
    .then(data => {
        if(data.length > 0) {
            const id = data[0]._id;
            pengeluaran += data[0].pengeluaran;
            reportDB.findByIdAndUpdate(id, { pengeluaran })
            .then(data => {
                if(!data) {
                    res.status(404).send({ message: 'Error not found' });
                } else {
                    console.log('updated report');
                    res.redirect('/');
                }
            })
            .catch(err => {
                res.status(500).send({ message: 'Error' });
            })
        } else {
            const report = new reportDB({
                tanggal, pengeluaran
            });

            report.save(report)
            .then(data => {
                res.redirect('/');
                console.log('created report');
            }).catch(err => res.status(500).send({ message: err.message }));
        }
    })
    .catch(err => {
        res.send({ message: err.message });
    });
}
exports.find = (req, res) => {
    reportDB.find().then(report => {
        res.send(report) }).catch(err => {
        res.status(500).send({ message: err.message})
    });
}

exports.update = (req, res) => {
}

exports.delete = (req, res) => {
}
