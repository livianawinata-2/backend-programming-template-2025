const mongoose = require('mongoose');

const skemaHadiah = new mongoose.Schema({
  nama: String,
  quota: Number,
  banyakPemenang: { type: Number, default: 0 },
});

module.exports = mongoose.model('hadiah', skemaHadiah);
