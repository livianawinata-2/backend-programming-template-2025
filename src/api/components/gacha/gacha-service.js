const gachaRepository = require('./gacha-repository');

const getPrize = (prizes) => {
  const avail = prizes.filter((p) => p.banyakPemenang < p.quota);

  if (avail.length === 0) return null;

  const random = Math.floor(Math.random() * avail.length);
  return avail[random];
};

async function lakukanGacha(username) {
  const tanggal = new Date();
  tanggal.setHours(0, 0, 0, 0);

  const count = await gachaRepository.hitungGachaToday(username, tanggal);

  if (count >= 5) {
    throw new Error('Batas gacha user untuk hari ini sudah habis');
  }

  const prizes = await gachaRepository.getPrizesList();

  const winChance = Math.random() < 0.2;

  let result;

  if (winChance) {
    const prize = getPrize(prizes);

    if (prize) {
      prize.banyakPemenang += 1;
      await gachaRepository.updateQuota(prize);

      result = {
        menang: true,
        prize: prize.name,
      };
    } else {
      result = {
        menang: false,
        prize: null,
      };
    }
  } else {
    result = {
      menang: false,
      prize: null,
    };
  }

  await gachaRepository.createGachaLog({
    username,
    prize: result.prize,
    menang: result.menang,
  });

  return result;
}

async function getUserHistory(username) {
  return gachaRepository.getUserHistory(username);
}

async function getGenHistory() {
  return gachaRepository.getGenHistory();
}

async function getPrizesList() {
  const data = await gachaRepository.getPrizesList();

  return data.map((p) => ({
    nama: p.name,
    quota: p.quota,
    banyakPemenang: p.banyakPemenang,
    sisaQuota: p.quota - p.banyakPemenang,
  }));
}

async function getWinners() {
  const data = await gachaRepository.getGenHistory();

  // isi fungsi maskingnya
  return data
    .filter((dt) => dt.menang)
    .map((dt) => {
      const namaMasked = dt.username
        .split('')
        .map((karakter) => {
          if (karakter === ' ') return ' ';

          return Math.random() > 0.77 ? karakter : '*';
        })
        .join('');

      return {
        username: namaMasked,
        prize: dt.prize,
      };
    });
}

module.exports = {
  lakukanGacha,
  getUserHistory,
  getGenHistory,
  getPrizesList,
  getWinners,
};
