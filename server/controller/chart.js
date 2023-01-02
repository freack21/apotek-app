let chartDB = require('../model/chart');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({ message: "Konten tidak boleh kosong" });
    }

    const chart = new chartDB({
        kode: req.body.kode,
        nama: req.body.nama,
        gol: req.body.gol,
        jumlah: req.body.jumlah,
        satuan: req.body.satuan,
        exp: req.body.exp,
        pabrik: req.body.pabrik,
        harga: req.body.harga,
    });

    chart.save(chart).then(data => res.send(data)).catch(err => res.status(500).send({ message: err.message }));
}

exports.find = (req, res) => {
}

exports.update = (req, res) => {
}

exports.delete = (req, res) => {
}
