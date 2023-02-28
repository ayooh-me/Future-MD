
let handler = async (m, { conn, usedPrefix, command, args, text, isOwner, isAdmin, isROwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
	let namop = ["Anti Call",
"Anti Delete",
"Anti Link",
"Anti LinkFb",
"Anti LinkIg",
"Anti LinkTel",
"Anti LinkTik",
"Anti LinkWa",
"Anti LinkYt",
"Anti Satir",
"Anti Spam",
"Anti Sticker",
"Anti Toxic",
"Anti Virtex",
"Anti View Once",
"Anti Bule",
"Auto DelVn",
"Auto Join",
"Auto Levelup",
"Auto Presence",
"Auto Read",
"Auto Reply",
"Auto Sticker",
"Auto UpAnime",
"Auto UpNews",
"Auto Vn",
"Auto Bio",
"Get Msg",
"BcJoin",
"Detect",
"Document",
"GcOnly",
"NSFW",
"Nyimak",
"PcOnly",
"Public",
"Restrict",
"Simi",
"SwOnly",
"Welcome",
"WhiteListMyContact"]

let idop = ["anticall",
"antidelete",
"antihatetepe",
"antilinkfb",
"antilinkig",
"antilinktel",
"antilinktik",
"antilinkwa",
"antilinkyt",
"antisatir",
"antispam",
"antisticker",
"antitoxic",
"antivirtex",
"antiviewonce",
"antibule",
"autodelvn",
"autojoin",
"autolevelup",
"autopresence",
"autoread",
"autoreply",
"autosticker",
"autoupnews",
"autoupnime",
"autovn",
"autobio",
"getmsg",
"bcjoin",
"detect",
"document",
"gconly",
"nsfw",
"nyimak",
"pconly",
"public",
"restrick",
"simi",
"swonly",
"welcome",
"whitelistmycontact"]

let desop = ["Memblokir user jika menelpon bot",
"Bot meneruskan pesan yang user hapus",
"Jangan kirim link",
"Jangan kirim link Fb",
"Jangan kirim link Ig",
"Jangan kirim link Tel",
"Jangan kirim link Tik",
"Jangan kirim link Wa",
"Jangan kirim link Yt",
"Jangan meng Satir",
"Jangan meng Spam",
"Jangan meng Sticker",
"Jangan meng Toxic",
"Jangan meng Virtex",
"Jangan meng View Once",
"Jangan meng Bule",
"Bot Otomatis DelVn",
"Bot Otomatis Join",
"Bot Otomatis Levelup",
"Bot Otomatis Presence",
"Bot Otomatis Read",
"Bot Otomatis Reply",
"Bot Otomatis Sticker",
"Bot Otomatis UpAnime",
"Bot Otomatis UpNews",
"Bot Otomatis Vn",
"Bot Otomatis Bio",
"Bot Otomatis Kirim Msg",
"BcJoin",
"Detect",
"Document",
"GcOnly",
"NSFW",
"Nyimak",
"PcOnly",
"Public",
"Restrict",
"Simi",
"SwOnly",
"Welcome",
"WhiteListMyContact"]

let row = Object.keys(namop, desop, idop).map((v, index) => ({
		title: !isEnable ? '✖️ Disable ' : '✔️ Enable ' + namop[v].toUpperCase(),
		description: 'Note:\n' + desop[v],
		rowId: usedPrefix + command + ' ' + idop[v]
	}))
	let button = {
		buttonText: !isEnable ? '✖️ Disable' : '✔️ Enable' + ' Disini ☂️',
		description: `⚡ Silakan pilih Opsi di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	
  
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiDelete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'bcjoin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.bcjoin = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihatetepe':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
      case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
      case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
      case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
      case 'antibule':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antibule = isEnable
      break
      case 'antisatir':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
      case 'autopresence':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoPesence = isEnable
      break
      case 'autoreply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'autojoin':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoJoin = isEnable
      break
      case 'autoupnews':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnimeNews = isEnable
      break
      case 'autoupnime':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnime = isEnable
      break
     case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
       case 'anticall':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiCall = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
      case 'getmsg':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.getmsg = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
      case 'autobio':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoBio = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return conn.sendListM(m.chat, button, row, m)
      throw false
  }

let deslis = `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`
let namli = [`${isEnable ? '✖️ Disable' : '✔️ Enable'}`]
let desli = [`${!isEnable ? 'Enable' : 'Disable'}`]
let idli = [`${isEnable ? `.off ${type}` : `.on ${type}`}`]

let rowli = Object.keys(namli, desli, idli).map((v, index) => ({
		title: namli[v].toUpperCase(),
		description: 'Note:\n' + desli[v],
		rowId: idli[v]
	}))
	let buttli = {
		buttonText: `${isEnable ? '✖️ Disable' : '✔️ Enable'}`,
		description: deslis,
		footerText: wm
	}
conn.sendListM(m.chat, buttli, rowli, m)


}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler