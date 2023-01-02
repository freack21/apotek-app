let stockDB = require('../model/stock');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({ message: "Konten tidak boleh kosong" });
    }

    const kode = req.body.kode;
    const nama = req.body.nama;
    const gol = req.body.gol;
    let jumlah = Number(req.body.jumlah);
    const satuan = req.body.satuan;
    const exp = req.body.exp;
    const pabrik = req.body.pabrik;
    const harga = Number(req.body.harga);

    const date = new Date();
    const tanggal = (date.getFullYear()) + '-' + (date.getMonth() + 1);
    const pengeluaran = tanggal + '_' + harga;

    stockDB.find({ pabrik, gol, satuan, nama, kode, exp })
    .then((data) => {
        if(data.length > 0) {
            const id = data[0]._id;
            jumlah += data[0].jumlah;
            const newHarga = data[0].harga + harga;
            stockDB.findByIdAndUpdate(id, { jumlah, harga: newHarga })
            .then(data => {
                if(!data) {
                    res.status(404).send({ message: 'Error not found' });
                } else {
                    console.log('updated stock');
                    res.redirect('/report/' + pengeluaran);
                }
            })
            .catch(err => {
                res.status(500).send({ message: 'Error' });
            })
        } else {
            const stock = new stockDB({
                kode, nama, gol, jumlah, satuan, exp, pabrik, harga
            });

            stock.save(stock)
            .then(data => {
                console.log('created stock');
                res.redirect('/report/' + pengeluaran);
            }).catch(err => res.status(500).send({ message: err.message }));
        }
    })
    .catch(err => {
        res.send({ message: err.message });
    });
}

exports.find = (req, res) => {
    stockDB.find().then(stock => {
        res.send(stock) }).catch(err => {
        res.status(500).send({ message: err.message})
    });
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({ message : "Error"});
    }
}

exports.delete = (req, res) => {
}
