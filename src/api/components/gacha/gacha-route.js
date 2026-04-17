const express = require('express');

const gachaController = require('./gacha-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/gacha', route);

  // post buat /gacha
  route.post('/', gachaController.gacha);

  // get history gacha
  route.get('/history', gachaController.getGenHistory);

  // get history gacha per-user
  route.get('/history/:username', gachaController.getUserHistory);

  // get daftar hadiah/prizes
  route.get('/prizes', gachaController.getPrizesList);

  // get pemenang gacha
  route.get('/winners', gachaController.getWinners);
};
