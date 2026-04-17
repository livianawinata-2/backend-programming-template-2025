const mongoose = require('mongoose');

const Undian = mongoose.model('undian');
const Hadiah = mongoose.model('hadiah');

const DEFAULT_PRIZES = [
  { nama: 'Emas 10 gram', quota: 1, banyakPemenang: 0 },
  { nama: 'Smartphone X', quota: 5, banyakPemenang: 0 },
  { nama: 'Smartwatch Y', quota: 10, banyakPemenang: 0 },
  { nama: 'Voucher Rp100.000', quota: 100, banyakPemenang: 0 },
  { nama: 'Pulsa Rp50.000', quota: 500, banyakPemenang: 0 },
];

async function ensureDefaultPrizes() {
  const count = await Hadiah.countDocuments();

  if (count === 0) {
    await Hadiah.insertMany(DEFAULT_PRIZES);
  }
}

async function getPrizesList() {
  return Hadiah.find({});
}

async function getUserHistory(username) {
  return Undian.find({ username }, { _id: 0, __v: 0 });
}

async function getGenHistory() {
  return Undian.find({}, { _id: 0, __v: 0 });
}

async function hitungGachaToday(username, tanggal) {
  return Undian.countDocuments({
    username,
    created: { $gte: tanggal },
  });
}

async function createGachaLog(data) {
  return Undian.create(data);
}

async function updateQuota(prize) {
  return prize.save();
}

module.exports = {
  ensureDefaultPrizes,
  getPrizesList,
  getUserHistory,
  getGenHistory,
  hitungGachaToday,
  createGachaLog,
  updateQuota,
};
