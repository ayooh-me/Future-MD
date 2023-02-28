import {
VKontakte,
    Instagram,
    Facebook,
    Snapchat,
    Twitter,
    YouTube,
    TikTok
} from 'social-downloader-cherry'
import fetch from 'node-fetch'
import fs from 'fs'

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
• ${usedPrefix + command} ytv
• ${usedPrefix + command} yta
• ${usedPrefix + command} fb
• ${usedPrefix + command} igs
• ${usedPrefix + command} igh
• ${usedPrefix + command} iga
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
            
try {
if (command) {
switch (template) {
        
            case 'ytv':
            if (!one) throw 'https://www.youtube.com/watch?v=K9W0MtwrK98'
            let ac = await YouTube.getVideo(one);
            let ad = ac.data.body
            let ae = `${ad.id}
            ${ad.meta.title}
            ${ad.meta.source}
            ${ad.meta.duration}
            ${ad.meta.tags}
            ${Object.values(ad.meta.subtitle)}
            ${Object.values(ad.video_quality)}
            ${Object.values(ad.url)}
            `
            conn.reply(m.chat, ae, m)
            break
            case 'yta':
            if (!one) throw 'https://www.youtube.com/watch?v=K9W0MtwrK98'
            let bc = await YouTube.getAudio(one);
            let bd = bc.data.body
            let be = `${bd.id}
            ${bd.meta.title}
            ${bd.meta.source}
            ${bd.meta.duration}
            ${bd.meta.tags}
            ${Object.values(bd.meta.subtitle)}
            ${Object.values(bd.video_quality)}
            ${Object.values(bd.url)}
            `
            conn.reply(m.chat, be, m)
            break
            case 'fb':
            if (!one) throw 'https://www.facebook.com/watch?v=461079905306774'
            let cc = await Facebook.getVideo(one);
            let cd = cc.data.body
            let ce = `${cd.video}
            ${cd.videoHD}
            `
            conn.reply(m.chat, ce, m)
            break
            case 'igs':
            if (!one) throw 'jlo'
            let dc = await Instagram.getStories(one);
            let dd = dc.data.body.profile
            let de = `${dd.id}
            ${dd.username}
            ${dd.profile_pic_url}
            ${dd.biography}
            ${dd.full_name}
            ${Object.values(dd.edge_owner_to_timeline_media)}
            ${Object.values(dd.edge_followed_by)}
            ${Object.values(dd.edge_follow)}
            ${Object.values(dd.profile_pic_url_signature)}
            ${Object.values(dc.data.body.stories)}
            `
            conn.reply(m.chat, de, m)
            break
            case 'igh':
            if (!one) throw 'jlo'
            let ec = await Instagram.getHighlights(one);
            let ed = ec.data.body.profile
            let ee = `${ed.id}
            ${ed.username}
            ${ed.profile_pic_url}
            ${ed.biography}
            ${ed.full_name}
            ${Object.values(ed.edge_owner_to_timeline_media)}
            ${Object.values(ed.edge_followed_by)}
            ${Object.values(ed.edge_follow)}
            ${Object.values(ed.profile_pic_url_signature)}
            ${Object.values(ec.data.body.highlights)}
            `
            conn.reply(m.chat, ee, m)
            break
            case 'iga':
            if (!one) throw 'https://www.instagram.com/tv/CXfWkHfDcIA/'
            let fc = await Instagram.getAny(one);
            let fd = fc.data.body
            let fe = `${fd.type}
            ${fd.link}
            `
            conn.reply(m.chat, fe, m)
            break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['cery <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^cery$/i
export default handler

