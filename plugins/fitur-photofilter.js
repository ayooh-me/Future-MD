
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} effect
*List effect:*
angie
aria
attic
black-and-white
chrome-1970
contrast-bandw
creamy
duotone
eva
golden-hour
hana
hdr
japanese
lana
lavender
lemonade
light-leak
lisa
lomo
milk
molly
monochrome
morning
movie
orton
paretro
perfect-bandw
plumy
retrolga
ruby
sand
sapphire
sepia
soft-sepia
solarize
sphinx
venus
viewfinder
warm-sunset`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let images = `https://violetics.pw/api/photofilter/${encodeURIComponent(text)}?apikey=beta&image=${encodeURIComponent(url)}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }
//lo mau apa??
handler.help = ['phfilter'].map(v => v + ' <caption|reply>')
handler.tags = ['maker']
handler.command = /^(phfilter)$/i

export default handler
