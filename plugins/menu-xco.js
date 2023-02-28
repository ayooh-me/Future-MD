import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let imgr = flaaa.getRandom()

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0] || !one) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• ${usedPrefix + command} affect
• ${usedPrefix + command} american
• ${usedPrefix + command} amongus
• ${usedPrefix + command} anaglyph
• ${usedPrefix + command} ancient
• ${usedPrefix + command} anonymous
• ${usedPrefix + command} aov
• ${usedPrefix + command} approved
• ${usedPrefix + command} arcane
• ${usedPrefix + command} arrow
• ${usedPrefix + command} arrow2
• ${usedPrefix + command} badut
• ${usedPrefix + command} badut2
• ${usedPrefix + command} badut3
• ${usedPrefix + command} balloon
• ${usedPrefix + command} bannerplane
• ${usedPrefix + command} batman
• ${usedPrefix + command} beachsign
• ${usedPrefix + command} bear
• ${usedPrefix + command} beautiful
• ${usedPrefix + command} berry
• ${usedPrefix + command} blackpink
• ${usedPrefix + command} blackpink
• ${usedPrefix + command} blood
• ${usedPrefix + command} blur
• ${usedPrefix + command} bracelet
• ${usedPrefix + command} brazzers
• ${usedPrefix + command} brick
• ${usedPrefix + command} broken
• ${usedPrefix + command} burn
• ${usedPrefix + command} burning
• ${usedPrefix + command} burningfire
• ${usedPrefix + command} burningphoto
• ${usedPrefix + command} burnpaper
• ${usedPrefix + command} business
• ${usedPrefix + command} butterfly
• ${usedPrefix + command} cake
• ${usedPrefix + command} caper
• ${usedPrefix + command} carbon
• ${usedPrefix + command} challenger
• ${usedPrefix + command} christmas
• ${usedPrefix + command} christmaswriting
• ${usedPrefix + command} circle
• ${usedPrefix + command} circuit
• ${usedPrefix + command} citybillboard
• ${usedPrefix + command} cloth
• ${usedPrefix + command} cloud
• ${usedPrefix + command} codenhentai
• ${usedPrefix + command} coffecup
• ${usedPrefix + command} coffee
• ${usedPrefix + command} communism
• ${usedPrefix + command} coverpubg
• ${usedPrefix + command} crank
• ${usedPrefix + command} crush
• ${usedPrefix + command} delete
• ${usedPrefix + command} devil
• ${usedPrefix + command} dictator
• ${usedPrefix + command} discordhouse
• ${usedPrefix + command} discovery
• ${usedPrefix + command} distort
• ${usedPrefix + command} doubleheart
• ${usedPrefix + command} dragonfire
• ${usedPrefix + command} dropwater
• ${usedPrefix + command} einstein
• ${usedPrefix + command} emboss
• ${usedPrefix + command} embossed
• ${usedPrefix + command} eraser
• ${usedPrefix + command} exposure
• ${usedPrefix + command} facepalm
• ${usedPrefix + command} fiction
• ${usedPrefix + command} firework
• ${usedPrefix + command} flame
• ${usedPrefix + command} flaming
• ${usedPrefix + command} foggy
• ${usedPrefix + command} frame
• ${usedPrefix + command} frame
• ${usedPrefix + command} gay
• ${usedPrefix + command} giantartwork
• ${usedPrefix + command} giraffe
• ${usedPrefix + command} glasses
• ${usedPrefix + command} glitch
• ${usedPrefix + command} glossy
• ${usedPrefix + command} glowing
• ${usedPrefix + command} glue
• ${usedPrefix + command} gradient
• ${usedPrefix + command} graffiti
• ${usedPrefix + command} grass
• ${usedPrefix + command} gravity
• ${usedPrefix + command} greenbrush
• ${usedPrefix + command} greenhorror
• ${usedPrefix + command} greyscale
• ${usedPrefix + command} hallowen
• ${usedPrefix + command} harrypotter
• ${usedPrefix + command} hauntedhotel
• ${usedPrefix + command} hearttattoo
• ${usedPrefix + command} horror
• ${usedPrefix + command} husbu
• ${usedPrefix + command} imglitch
• ${usedPrefix + command} incandescent
• ${usedPrefix + command} instagram
• ${usedPrefix + command} inthewoods
• ${usedPrefix + command} invert
• ${usedPrefix + command} iphone
• ${usedPrefix + command} jail
• ${usedPrefix + command} joke
• ${usedPrefix + command} karenhave
• ${usedPrefix + command} leafgraphy
• ${usedPrefix + command} letters
• ${usedPrefix + command} light
• ${usedPrefix + command} lightgraffiti
• ${usedPrefix + command} lightning
• ${usedPrefix + command} loli
• ${usedPrefix + command} lovelock
• ${usedPrefix + command} lovemessage
• ${usedPrefix + command} lovetext
• ${usedPrefix + command} magma
• ${usedPrefix + command} memory
• ${usedPrefix + command} metallic
• ${usedPrefix + command} metals
• ${usedPrefix + command} mirrors
• ${usedPrefix + command} missionpassed
• ${usedPrefix + command} ml
• ${usedPrefix + command} moustache
• ${usedPrefix + command} naruto
• ${usedPrefix + command} nature
• ${usedPrefix + command} neko
• ${usedPrefix + command} neon
• ${usedPrefix + command} neonblue
• ${usedPrefix + command} neonbp
• ${usedPrefix + command} neonsign
• ${usedPrefix + command} neonwriting
• ${usedPrefix + command} nightmarewriting
• ${usedPrefix + command} nightstars
• ${usedPrefix + command} oceansea
• ${usedPrefix + command} paper
• ${usedPrefix + command} pendant
• ${usedPrefix + command} pig
• ${usedPrefix + command} ps4
• ${usedPrefix + command} pubgavatar
• ${usedPrefix + command} puppy
• ${usedPrefix + command} quotewood
• ${usedPrefix + command} rainbow
• ${usedPrefix + command} rejected
• ${usedPrefix + command} reversevideo
• ${usedPrefix + command} rip
• ${usedPrefix + command} ripped
• ${usedPrefix + command} rmbg
• ${usedPrefix + command} romantic
• ${usedPrefix + command} scary
• ${usedPrefix + command} sepia
• ${usedPrefix + command} shadow
• ${usedPrefix + command} shattered
• ${usedPrefix + command} skeleton
• ${usedPrefix + command} sketch
• ${usedPrefix + command} sketchpracticing
• ${usedPrefix + command} sliced
• ${usedPrefix + command} smoke
• ${usedPrefix + command} snow
• ${usedPrefix + command} spongebob
• ${usedPrefix + command} ssweb
• ${usedPrefix + command} sticker
• ${usedPrefix + command} stone
• ${usedPrefix + command} streetsign
• ${usedPrefix + command} summer
• ${usedPrefix + command} sunlight
• ${usedPrefix + command} tearing
• ${usedPrefix + command} television
• ${usedPrefix + command} thanos
• ${usedPrefix + command} tiger
• ${usedPrefix + command} tobecontinue
• ${usedPrefix + command} toilet
• ${usedPrefix + command} towebp
• ${usedPrefix + command} transformer
• ${usedPrefix + command} trash
• ${usedPrefix + command} travellerssketch
• ${usedPrefix + command} triggered
• ${usedPrefix + command} typography
• ${usedPrefix + command} typography2
• ${usedPrefix + command} videogame
• ${usedPrefix + command} waifu
• ${usedPrefix + command} wanted
• ${usedPrefix + command} warface
• ${usedPrefix + command} wasted
• ${usedPrefix + command} water
• ${usedPrefix + command} waterwriting
• ${usedPrefix + command} webp2mp4
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
            }
            
try {
if (command) {
switch (template) {
case 'codenhentai':
            let json = await fetch(global.API('xcdr', '/api/anime/codenhentai', { code: one }, 'apikey'))
            let aa = await json.json()
            let axa = aa.result.pages
        let aa_ = Object.keys(axa).map((v, index) => ({
		title: 'Result: ' + index,
		description: '\nLink: ' + aa.result.link + '\nThumbnail: ' + Object.values(aa.result.thumbnails).join('\n'),
		rowId: usedPrefix + 'get ' + axa[v]
	}))
	let aan_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}
		title: ${aa.result.title}
		title_JP: ${aa.result.title_JP}
		parodies: ${aa.result.details.parodies}
		characters: ${aa.result.details.characters}
		tags: ${aa.result.details.tags}
		artists: ${aa.result.details.artists}
		groups: ${aa.result.details.groups}
		languages: ${aa.result.details.languages}
		categories: ${aa.result.details.categories}
		pages: ${aa.result.details.pages}
		upload_date: ${aa.result.details.upload_date}
		`,
		footerText: wm
	}
	return conn.sendListM(m.chat, aan_, aa_, m)
            break
            
            case 'husbu':
            case 'loli':
            case 'neko':
            case 'waifu':
        let bb = global.API('xcdr', '/api/anime', { args[0] }, 'apikey')
        let bbi = `*title:* ${args[0]}`
conn.sendButton(m.chat, bbi, author, bb, [['Menu', '/menu']], m, adReply)
            break
            
            case 'reversevideo':
            case 'sticker':
            case 'towebp':
            case 'webp2mp4':
            let a__d = m.quoted ? m.quoted : m
  let b__d = (a__d.msg || a__d).mimetype || ''
  if (!b__d) throw 'No media found'
  let c__d = await a__d.download()
  let e__d = new Sticker(c__d, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__d
  try {
  if (/webp/g.test(b__d)) d__d = await webp2png(c__d)
        else if (/image/g.test(b__d)) d__d = await uploadImage(c__d)
        else if (/video/g.test(b__d)) d__d = await uploadFile(c__d)
        else if (/viewOnce/g.test(b__d)) d__d = await uploadFile(c__d)
        if (typeof d__d !== 'string') d__d = await uploadImage(c__d)
        else if (/gif/g.test(b__d)) d__d = e__d
        } catch (e) {
        throw eror
        }
        let cc = global.API('xcdr', '/api/convert/' + args[0], { url: d__d }, 'apikey')
        conn.sendButtonImg(m.chat, cc, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'american':
case 'amongus':
case 'anonymous':
case 'aov':
case 'arrow':
case 'arrow2':
case 'blackpink':
case 'cake':
case 'caper':
case 'cloth':
case 'cloud':
case 'coverpubg':
case 'crank':
case 'dragonfire':
case 'eraser':
case 'foggy':
case 'glasses':
case 'graffiti':
case 'greenbrush':
case 'hallowen':
case 'horror':
case 'incandescent':
case 'leafgraphy':
case 'letters':
case 'metals':
case 'ml':
case 'neonblue':
case 'neonbp':
case 'nightstars':
case 'pig':
case 'pubgavatar':
case 'puppy':
case 'sunlight':
case 'television':
case 'tiger':
case 'typography':
case 'typography2':
case 'warface':
case 'water':
        let dd = global.API('xcdr', '/api/ephoto/' + args[0], { text: one }, 'apikey')
        conn.sendButtonImg(m.chat, dd, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'affect':
case 'approved':
case 'badut2':
case 'badut3':
case 'badut':
case 'beautiful':
case 'blur':
case 'brazzers':
case 'burn':
case 'challenger':
case 'circle':
case 'communism':
case 'crush':
case 'delete':
case 'dictator':
case 'discordhouse':
case 'distort':
case 'emboss':
case 'facepalm':
case 'frame':
case 'gay':
case 'glitch':
case 'greyscale':
case 'instagram':
case 'invert':
case 'jail':
case 'joke':
case 'karenhave':
case 'missionpassed':
case 'moustache':
case 'ps4':
case 'rejected':
case 'rip':
case 'rmbg':
case 'scary':
case 'sepia':
case 'spongebob':
case 'ssweb':
case 'thanos':
case 'tobecontinue':
case 'trash':
case 'triggered':
case 'wanted':
case 'wasted':
let a__c = m.quoted ? m.quoted : m
  let b__c = (a__c.msg || a__c).mimetype || ''
  if (!b__c) throw 'No media found'
  let c__c = await a__c.download()
  let e__c = new Sticker(c__c, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__c
  try {
  if (/webp/g.test(b__c)) d__c = await webp2png(c__c)
        else if (/image/g.test(b__c)) d__c = await uploadImage(c__c)
        else if (/video/g.test(b__c)) d__c = await uploadFile(c__c)
        else if (/viewOnce/g.test(b__c)) d__c = await uploadFile(c__c)
        if (typeof d__c !== 'string') d__c = await uploadImage(c__c)
        else if (/gif/g.test(b__c)) d__c = e__c
        } catch (e) {
        throw eror
        }
        let ee = global.API('xcdr', '/api/maker/' + args[0], { url: d__c }, 'apikey')
        conn.sendButtonImg(m.chat, ee, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'balloon':
case 'bannerplane':
case 'beachsign':
case 'bracelet':
case 'christmaswriting':
case 'einstein':
case 'hauntedhotel':
case 'hearttattoo':
case 'lightgraffiti':
case 'lovelock':
case 'neonsign':
case 'neonwriting':
case 'nightmarewriting':
case 'pendant':
case 'snow':
case 'streetsign':
case 'waterwriting':
        let ff = global.API('xcdr', '/api/photofunia/' + args[0], { text: one }, 'apikey')
        conn.sendButtonImg(m.chat, ff, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'burningfire':
case 'burningphoto':
case 'citybillboard':
case 'giantartwork':
case 'inthewoods':
case 'lightning':
case 'sketchpracticing':
case 'travellerssketch':
let a__b = m.quoted ? m.quoted : m
  let b__b = (a__b.msg || a__b).mimetype || ''
  if (!b__b) throw 'No media found'
  let c__b = await a__b.download()
  let e__b = new Sticker(c__b, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__b
  try {
  if (/webp/g.test(b__b)) d__b = await webp2png(c__b)
        else if (/image/g.test(b__b)) d__b = await uploadImage(c__b)
        else if (/video/g.test(b__b)) d__b = await uploadFile(c__b)
        else if (/viewOnce/g.test(b__b)) d__b = await uploadFile(c__b)
        if (typeof d__b !== 'string') d__b = await uploadImage(c__b)
        else if (/gif/g.test(b__b)) d__b = e__b
        } catch (e) {
        throw eror
        }
        let gg = global.API('xcdr', '/api/photofunia/' + args[0], { url: d__b }, 'apikey')
        conn.sendButtonImg(m.chat, gg, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'anaglyph':
case 'burning':
case 'exposure':
case 'flame':
case 'frame':
case 'iphone':
case 'memory':
case 'mirrors':
case 'nature':
case 'ripped':
case 'shattered':
case 'tearing':
case 'toilet':
let a__a = m.quoted ? m.quoted : m
  let b__a = (a__a.msg || a__a).mimetype || ''
  if (!b__a) throw 'No media found'
  let c__a = await a__a.download()
  let e__a = new Sticker(c__a, { pack: packname, author: author, type: StickerTypes.FULL })
  let d__a
  try {
  if (/webp/g.test(b__a)) d__a = await webp2png(c__a)
        else if (/image/g.test(b__a)) d__a = await uploadImage(c__a)
        else if (/video/g.test(b__a)) d__a = await uploadFile(c__a)
        else if (/viewOnce/g.test(b__a)) d__a = await uploadFile(c__a)
        if (typeof d__a !== 'string') d__a = await uploadImage(c__a)
        else if (/gif/g.test(b__a)) d__a = e__a
        } catch (e) {
        throw eror
        }
        let hh = global.API('xcdr', '/api/photooxy/' + args[0], { url: d__a }, 'apikey')
        conn.sendButtonImg(m.chat, hh, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'burnpaper':
case 'butterfly':
case 'coffecup':
case 'coffee':
case 'doubleheart':
case 'flaming':
case 'lovemessage':
case 'lovetext':
case 'grass':
case 'gravity':
case 'quotewood':
case 'rainbow':
case 'naruto':
case 'oceansea':
case 'romantic':
case 'shadow':
case 'smoke':
        let ii = global.API('xcdr', '/api/photooxy/' + args[0], { text: one }, 'apikey')
        conn.sendButtonImg(m.chat, ii, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'ancient':
case 'arcane':
case 'batman':
case 'bear':
case 'berry':
case 'blackpink':
case 'blood':
case 'brick':
case 'broken':
case 'business':
case 'carbon':
case 'christmas':
case 'circuit':
case 'devil':
case 'discovery':
case 'dropwater':
case 'embossed':
case 'fiction':
case 'firework':
case 'giraffe':
case 'glossy':
case 'glowing':
case 'glue':
case 'gradient':
case 'greenhorror':
case 'harrypotter':
case 'imglitch':
case 'light':
case 'magma':
case 'metallic':
case 'neon':
case 'paper':
case 'skeleton':
case 'sketch':
case 'sliced':
case 'stone':
case 'summer':
case 'transformer':
case 'videogame':
        let jj = global.API('xcdr', '/api/textpro/' + args[0], { text: one }, 'apikey')
        conn.sendButtonImg(m.chat, jj, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
}
}
} catch (e) {
throw eror
}
}
handler.help = ['xco <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^xco$/i
export default handler

