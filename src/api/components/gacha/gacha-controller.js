// jangan lupa bikin fungsi yg namanya sama di service
const gachaService = require('./gacha-service');

async function gacha(req, res, next) {
  try {
    const { username } = req.body;
    // bikin fungsi lakukanGacha
    const result = await gachaService.lakukanGacha(username);

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function getUserHistory(req, res, next) {
  try {
    // bikin fungsi getUserHistory yg di gacha-service
    const data = await gachaService.getUserHistory(req.params.username);

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

// gen = general
async function getGenHistory(req, res, next) {
  try {
    const data = await gachaService.getGenHistory();

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

async function getPrizesList(req, res, next) {
  try {
    const data = await gachaService.getPrizesList();

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

async function getWinners(req, res, next) {
  try {
    const data = await gachaService.getWinners();

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  gacha,
  getUserHistory,
  getGenHistory,
  getPrizesList,
  getWinners,
};
