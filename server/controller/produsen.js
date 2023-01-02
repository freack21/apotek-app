let produsenDB = require('../model/produsen');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({ message: "Konten tidak boleh kosong" });
    }

    const produsen = new produsenDB({
        kode: req.body.kode,
        nama: req.body.nama,
        gol: req.body.gol,
        jumlah: req.body.jumlah,
        satuan: req.body.satuan,
        exp: req.body.exp,
        pabrik: req.body.pabrik,
        harga: req.body.harga,
    });

    produsen.save(produsen).then(data => res.send(data)).catch(err => res.status(500).send({ message: err.message }));
}

exports.find = (req, res) => {
    let pabrik = req.params.pabrik;
    let gol = req.params.gol;
    let satuan = req.params.satuan;
    let nama = req.params.nama;
    if(nama) {
        [pabrik, gol, satuan, nama] = nama.split('_');
        produsenDB.find({ pabrik, gol, satuan, nama }).then(produsen => {
            let data = {};
            const obat = produsen[0];
            data.harga = obat.harga;
            data.kode = obat.kode;
            data.exp = obat.exp;
            res.send(data);
        }).catch(err => {
            res.status(500).send({ message: err.message})
        });
    } else if(satuan) {
            [pabrik, gol, satuan] = satuan.split('_');
            produsenDB.find({ pabrik, gol, satuan }).then(produsen => {
                let nama = '<option value="" disabled selected>Pilih Obat</option>';
                for(let i = 0; i < produsen.length; i++) {
                    nama += `<option value="${produsen[i].nama}">${produsen[i].nama}</option>`;
                }
                res.send(nama);
            }).catch(err => {
                res.status(500).send({ message: err.message})
            });
    } else if(gol) {
        [pabrik, gol] = gol.split('_');
        produsenDB.find({ pabrik, gol }).then(produsen => {
            let satuan = '<option value="" disabled selected>Pilih Satuan Obat</option>';
            for(let i = 0; i < produsen.length; i++) {
                satuan += `<option value="${produsen[i].satuan}">${produsen[i].satuan}</option>`;
            }
            res.send(satuan);
        }).catch(err => {
            res.status(500).send({ message: err.message})
        });
    } else if(pabrik) {
        produsenDB.find({ pabrik }).then(produsen => {
            let gol = '<option value="" disabled selected>Pilih Golongan Obat</option>';
            for(let i = 0; i < produsen.length; i++) {
                gol += `<option value="${produsen[i].gol}">${produsen[i].gol}</option>`;
            }
            res.send(gol);
        }).catch(err => {
            res.status(500).send({ message: err.message})
        });
    } else {
        produsenDB.find().then(produsen => {
            res.send(produsen) }).catch(err => {
            res.status(500).send({ message: err.message})
        });
    }
}

exports.update = (req, res) => {
}

exports.delete = (req, res) => {
}
