
export async function all(m) {

    /* Waktu Sholat Auto 
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let todays = yyyy + '/' + mm + '/' + dd;
    let data = await(await fetch("https://api.myquran.com/v1/sholat/jadwal/2622/" + todays)).json();
    let waktuSholat = data.data.jadwal;
    */
    
    /* Waktu Sholat Manual */
     
    let waktuSholat = {
  imsak: '04:43',
  subuh: '04:53',
  terbit: '06:04',
  dhuha: '06:31',
  dzuhur: '12:15',
  ashar: '15:19',
  maghrib: '18:19',
  isya: '19:27'
  };
    
    /* Waktu Sekarang */
    let date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Makassar"
    }));
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formatHours = hours < 10 ? '0' + hours : hours;
    let formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    let waktuSekarang = formatHours + ':' + formatMinutes;
    
    /* Opsi */
    let logo_ = flaaa.getRandom();
    let tag = '@' + m.sender.replace(/@.+/, '');
    let caption = 'Hai kak ' + tag + ', ';
    let sudah;

    if (waktuSekarang == waktuSholat.imsak) {
        sudah = "Daerah *Makassar* sudah waktunya *Imsak!*";
    } else if (waktuSekarang == waktuSholat.subuh) {
        sudah = "Daerah *Makassar* sudah waktunya *sholat Subuh!*";
    } else if (waktuSekarang == waktuSholat.terbit) {
        sudah = "Daerah *Makassar* sudah waktunya *Terbit!*";
    } else if (waktuSekarang == waktuSholat.dhuha) {
        sudah = "Daerah *Makassar* sudah waktunya *sholat Dhuha!*";
    } else if (waktuSekarang == waktuSholat.dzuhur) {
        sudah = "Daerah *Makassar* sudah waktunya *sholat Dzuhur!*";
    } else if (waktuSekarang == waktuSholat.ashar) {
        sudah = "Daerah *Makassar* sudah waktunya *sholat Ashar!*";
    } else if (waktuSekarang == waktuSholat.maghrib) {
        sudah = "Daerah *Makassar* sudah waktunya *sholat Maghrib!*";
    } else if (waktuSekarang == waktuSholat.isya) {
        sudah = "Daerah *Makassar* sudah waktunya *sholat Isya!*";
    }
    
    if (sudah) {
        return this.sendFile(m.chat, logo_ + sudah.split(" ").pop().replace(/\*/g, ""), 'out.png', caption + sudah, m, null, {
            mentions: [m.sender]
        });
    }
    
}