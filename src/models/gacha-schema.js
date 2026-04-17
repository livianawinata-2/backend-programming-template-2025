const mongoose = require('mongoose');

const skemaUndian = new mongoose.Schema({
  username: { type: String, required: true },
  prize: String,
  menang: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('undian', skemaUndian);
