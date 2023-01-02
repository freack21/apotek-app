const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    gol: {
        type: String,
        required: true
    },
    jumlah: {
        type: Number,
        required: true
    },
    satuan: {
        type: String,
        required: true
    },
    exp: {
        type: String,
        required: true
    },
    pabrik: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    }
})

let report = new mongoose.Schema({
    tanggal: {
        type: String,
        required: true
    },
    pengeluaran: {
        type: Number,
        required: true
    }
})

module.exports = { schema, report };