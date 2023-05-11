import fetch from "node-fetch"
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {
    let spas = "                "
    let lister = [
        "search",
"chapterlist",
"chapterinfo",
"verses",
"file"
    ]
    let [feature, querys] = text.split(/[^\w\s]/g)
    if (!lister.includes(feature)) return m.reply("*Example:*\n.quransearch api\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))
    if (lister.includes(feature)) {
            if (!querys) return m.reply("Input Query!")
            await m.reply(wait)
            
            if (feature == "search") {
            let data = await searchQuran(querys)
            let capt = await formatData(data)
            await conn.reply(m.chat, `*${htki} 📺 quransearch Search 🔎 ${htka}*\n${capt}`, m)
            }
            if (feature == "chapterlist") {
            let data = await chapterList()
            let capt = await formatData([data])
            await conn.reply(m.chat, `*${htki} 📺 quransearch Search 🔎 ${htka}*\n${capt}`, m)
            }
            if (feature == "chapterinfo") {
            let data = await chapterInfo()
            let capt = await formatData([data])
            await conn.reply(m.chat, `*${htki} 📺 quransearch Search 🔎 ${htka}*\n${capt}`, m)
            }
            if (feature == "verses") {
            let data = await getVerses(querys)
            let capt = await formatData(data)
            await conn.reply(m.chat, `*${htki} 📺 quransearch Search 🔎 ${htka}*\n${capt}`, m)
            }
            if (feature == "file") {
            await conn.sendFile(m.chat, querys, 'Boom nya kak!', '', m, false, { asDocument: true })
            }
    }
}
handler.help = ["quransearch"]
handler.tags = ["search"]
handler.command = /^(quransearch)$/i
export default handler

function formatData(data) {
  let output = ''
  data.forEach((item, index) => {
    output += `*[ Result ${index + 1} ]*\n`
    Object.keys(item).forEach(key => {
      output += ` *${key}:* `
      if (typeof item[key] === 'object') {
        Object.keys(item[key]).forEach(subKey => {
          output += `\n *${subKey}:* ${item[key][subKey]}`
        })
      } else {
        output += ` ${item[key]}\n`
      }
    })
  })
  return output
}



async function aQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/chapters?language=id`);
  const data = await response.json();
  return  data;
}


async function bQuran(id) {
  const response = await fetch(`https://api.quran.com/api/v4/chapters/${id}?language=id`);
  const data = await response.json();
  return  data;
}


async function cQuran(chapter_id) {
  const response = await fetch(`https://api.quran.com/api/v4/chapters/${chapter_id}/info?language=id`);
  const data = await response.json();
  return  data;
}


async function dQuran(chapter_number) {
  const response = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${chapter_number}?language=id`);
  const data = await response.json();
  return  data;
}


async function eQuran(page_number) {
  const response = await fetch(`https://api.quran.com/api/v4/verses/by_page/${page_number}?language=id`);
  const data = await response.json();
  return  data;
}


async function fQuran(juz_number) {
  const response = await fetch(`https://api.quran.com/api/v4/verses/by_juz/${juz_number}?language=id`);
  const data = await response.json();
  return  data;
}


async function gQuran(hizb_number) {
  const response = await fetch(`https://api.quran.com/api/v4/verses/by_hizb/${hizb_number}?language=id`);
  const data = await response.json();
  return  data;
}


async function hQuran(rub_number) {
  const response = await fetch(`https://api.quran.com/api/v4/verses/by_rub/${rub_number}?language=id`);
  const data = await response.json();
  return  data;
}


async function iQuran(verse_key) {
  const response = await fetch(`https://api.quran.com/api/v4/verses/by_key/${verse_key}?language=id`);
  const data = await response.json();
  return  data;
}


async function jQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/verses/random?language=id`);
  const data = await response.json();
  return  data;
}


async function kQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/juzs`);
  const data = await response.json();
  return  data;
}


async function lQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/indopak`);
  const data = await response.json();
  return  data;
}


async function mQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani`);
  const data = await response.json();
  return  data;
}


async function nQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani_simple`);
  const data = await response.json();
  return  data;
}


async function oQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani_tajweed`);
  const data = await response.json();
  return  data;
}


async function pQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/imlaei`);
  const data = await response.json();
  return  data;
}


async function qQuran(recitation_id) {
  const response = await fetch(`https://api.quran.com/api/v4/quran/recitations/${recitation_id}`);
  const data = await response.json();
  return  data;
}


async function rQuran(translation_id) {
  const response = await fetch(`https://api.quran.com/api/v4/quran/translations/${translation_id}`);
  const data = await response.json();
  return  data;
}


async function sQuran(tafsir_id) {
  const response = await fetch(`https://api.quran.com/api/v4/quran/tafsirs/${tafsir_id}`);
  const data = await response.json();
  return  data;
}


async function tQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/code_v1`);
  const data = await response.json();
  return  data;
}


async function uQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/quran/verses/code_v2`);
  const data = await response.json();
  return  data;
}


async function vQuran(id) {
  const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${id}?language=id`);
  const data = await response.json();
  return  data;
}


async function wQuran(id, chapter_number) {
  const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${id}/${chapter_number}`);
  const data = await response.json();
  return  data;
}


async function xQuran(recitation_id, chapter_number) {
  const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_chapter/${chapter_number}`);
  const data = await response.json();
  return  data;
}


async function yQuran(recitation_id, juz_number) {
  const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_juz/${juz_number}`);
  const data = await response.json();
  return  data;
}


async function zQuran(recitation_id, page_number) {
  const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_page/${page_number}`);
  const data = await response.json();
  return  data;
}


async function aaQuran(recitation_id, rub_number) {
  const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_rub/${rub_number}`);
  const data = await response.json();
  return  data;
}


async function bbQuran(recitation_id, hizb_number) {
  const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_hizb/${hizb_number}`);
  const data = await response.json();
  return  data;
}


async function ccQuran(recitation_id, ayah_key) {
  const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_ayah/${ayah_key}`);
  const data = await response.json();
  return  data;
}


async function ddQuran(recitation_id) {
  const response = await fetch(`https://api.quran.com/api/v4/resources/recitations/${recitation_id}/info`);
  const data = await response.json();
  return  data;
}


async function eeQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/translations`);
  const data = await response.json();
  return  data;
}


async function ffQuran(translation_id) {
  const response = await fetch(`https://api.quran.com/api/v4/resources/translations/${translation_id}/info`);
  const data = await response.json();
  return  data;
}


async function ggQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/tafsirs?language=id`);
  const data = await response.json();
  return  data;
}


async function hhQuran(tafsir_id) {
  const response = await fetch(`https://api.quran.com/api/v4/resources/tafsirs/${tafsir_id}/info`);
  const data = await response.json();
  return  data;
}


async function iiQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/recitation_styles`);
  const data = await response.json();
  return  data;
}


async function jjQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/languages`);
  const data = await response.json();
  return  data;
}


async function kkQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/chapter_infos`);
  const data = await response.json();
  return  data;
}


async function llQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/verse_media`);
  const data = await response.json();
  return  data;
}


async function mmQuran() {
  const response = await fetch(`https://api.quran.com/api/v4/resources/chapter_reciters?language=id`);
  const data = await response.json();
  return  data;
}


async function nnQuran(q) {
  const response = await fetch(`https://api.quran.com/api/v4/search?q=${q}&language=id`);
  const data = await response.json();
  return data;
}
