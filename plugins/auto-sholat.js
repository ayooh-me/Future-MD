import fetch from 'node-fetch'
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

export async function all(m) {
    if (!m.message)
        return
    /* Waktu Sholat Auto 
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    let todays = yyyy + '/' + mm + '/' + dd
    let data = await(await fetch("https://api.myquran.com/v1/sholat/jadwal/2622/" + todays)).json()
    let waktuSholat = data.data.jadwal
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
    }

    /* Waktu Sekarang */
    let _ = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Makassar"
    }))
    let jam = _.getHours()
    let menit = _.getMinutes()
    let formatJam = jam < 10 ? '0' + jam : jam
    let formatMenit = menit < 10 ? '0' + menit : menit
    let waktuSekarang = formatJam + ':' + formatMenit

    /* Opsi */
    let logo_ = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
    let teks_

    if (waktuSekarang == waktuSholat.imsak) {
        teks_ = "Daerah *Makassar* sudah waktunya *Imsak!*"
    } else if (waktuSekarang == waktuSholat.subuh) {
        teks_ = "Daerah *Makassar* sudah waktunya *sholat Subuh!*"
    } else if (waktuSekarang == waktuSholat.terbit) {
        teks_ = "Daerah *Makassar* sudah waktunya *Terbit!*"
    } else if (waktuSekarang == waktuSholat.dhuha) {
        teks_ = "Daerah *Makassar* sudah waktunya *sholat Dhuha!*"
    } else if (waktuSekarang == waktuSholat.dzuhur) {
        teks_ = "Daerah *Makassar* sudah waktunya *sholat Dzuhur!*"
    } else if (waktuSekarang == waktuSholat.ashar) {
        teks_ = "Daerah *Makassar* sudah waktunya *sholat Ashar!*"
    } else if (waktuSekarang == waktuSholat.maghrib) {
        teks_ = "Daerah *Makassar* sudah waktunya *sholat Maghrib!*"
    } else if (waktuSekarang == waktuSholat.isya) {
        teks_ = "Daerah *Makassar* sudah waktunya *sholat Isya!*"
    }

    if (teks_) {
    let icon = await(await fetch(logo_ + teks_.split(" ").pop().replace(/\*/g, ""))).buffer()
        let msg = await generateWAMessageFromContent(m.chat, {
        extendedTextMessage: {
        text: teks_,
        jpegThumbnail: icon,
        contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
        title: 'A Y O !',
        body: 'S H O L A T',
        thumbnail: icon,
        mediaType: 1,
        sourceUrl: null
        }
      }
    }
  }, { quoted: m })
    await this.relayMessage(m.chat, msg.message, {})
    }
}