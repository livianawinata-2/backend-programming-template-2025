const mongoose = require('mongoose');

const undian = mongoose.model('undian');
const hadiah = mongoose.model('hadiah');

async function getPrizesList() {
  return hadiah.find({});
}

async function getUserHistory(username) {
  return undian.find({ username }, { _id: 0, __v: 0 });
}

async function getGenHistory() {
  return undian.find({}, { _id: 0, __v: 0 });
}

async function hitungGachaToday(username, tanggal) {
  return undian.countLogs({
    username,
    created: { $gte: tanggal },
  });
  // gte = greater than or equal
}

async function createGachaLog(data) {
  return undian.create(data);
}

async function updateQuota(prize) {
  return prize.save();
}

module.exports = {
  getPrizesList,
  getUserHistory,
  getGenHistory,
  hitungGachaToday,
  createGachaLog,
  updateQuota,
};
