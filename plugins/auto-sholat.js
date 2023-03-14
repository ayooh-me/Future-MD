export async function all(m) {
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let todays = yyyy + '/' + mm + '/' + dd;
let data = await (await fetch("https://api.myquran.com/v1/sholat/jadwal/2622/" + todays)).json()
let waktuSholat = data.data.jadwal;

  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let waktuSekarang = hour + ":" + minute
  // Membandingkan waktu sekarang dengan waktu sholat
  if (waktuSekarang == waktuSholat.imsak) {
    m.reply("Sudah waktunya Imsak!");
  } else if (waktuSekarang == waktuSholat.subuh) {
    m.reply("Sudah waktunya sholat Subuh!");
  } else if (waktuSekarang == waktuSholat.terbit) {
    m.reply("Sudah waktunya Terbit!");
  } else if (waktuSekarang == waktuSholat.dhuha) {
    m.reply("Sudah waktunya sholat Dhuha!");
  } else if (waktuSekarang == waktuSholat.dzuhur) {
    m.reply("Sudah waktunya sholat Dzuhur!");
  } else if (waktuSekarang == waktuSholat.ashar) {
    m.reply("Sudah waktunya sholat Ashar!");
  } else if (waktuSekarang == waktuSholat.maghrib) {
    m.reply("Sudah waktunya sholat Maghrib!");
  } else if (waktuSekarang == waktuSholat.isya) {
    m.reply("Sudah waktunya sholat Isya!");
  }
 }