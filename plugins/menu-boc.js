import { aiovideodl,
aksaraToLatin,
alquran,
antaranews,
artimimpi,
artinama,
asahotak,
asmaulhusna,
bioskop,
bioskopNow,
bucin,
bucinjson,
caklontong,
chord,
cnbindonesia,
createHash,
dare,
darejson,
didyoumean,
facebookdl,
facebookdlv2,
facebookdlv3,
family100,
fromBase64ToString,
gempa,
gempaNow,
getZodiac,
googleImage,
googleIt,
groupWA,
instagramdl,
instagramdlv2,
instagramdlv3,
instagramdlv4,
instagramStalk,
instagramStory,
instagramStoryv2,
jadwalsholat,
jadwalTV,
jadwalTVNow,
kbbi,
kompas,
latinToAksara,
liputan6,
listJadwalSholat,
listJadwalTV,
lyrics,
lyricsv2,
mediafiredl,
merdeka,
nameFreeFire,
nomorhoki,
pinterest,
randomBytes,
randomUUID,
savefrom,
sfilemobi,
sfilemobiSearch,
siapakahaku,
snapsave,
statusBedrock,
statusJava,
stickerLine,
stickerTelegram,
suaracom,
susunkata,
tebakbendera,
tebakgambar,
tebakkabupaten,
tebakkata,
tebakkimia,
tebaklirik,
tebaktebakan,
tekateki,
textpro,
textproList,
tiktokdl,
tiktokdlv2,
tiktokdlv3,
tiktokfyp,
toBase64,
truth,
truthjson,
tsunami,
twitterdl,
twitterdlv2,
wallpaper,
wallpaperv2,
wallpaperv3,
wikipedia,
youtubedl,
youtubedlv2,
youtubedlv3,
youtubeSearch,
zippyshare } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
                            
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

`
await conn.sendButtonVid(m.chat, logo, caption, wm, 'Back', '.menulist', fakes, adReply)
            }
            
try {
if (command) {
switch (template) {
case 'aiovideodl':
let res0 = await aiovideodl(one ? one : null)
throw res0
break
case 'aksaraToLatin':
let res1 = await aksaraToLatin(one ? one : null)
throw res1
break
case 'alquran':
let res2 = await alquran(one ? one : null)
throw res2
break
case 'antaranews':
let res3 = await antaranews(one ? one : null)
throw res3
break
case 'artimimpi':
let res4 = await artimimpi(one ? one : null)
throw res4
break
case 'artinama':
let res5 = await artinama(one ? one : null)
throw res5
break
case 'asahotak':
let res6 = await asahotak(one ? one : null)
throw res6
break
case 'asmaulhusna':
let res7 = await asmaulhusna(one ? one : null)
throw res7
break
case 'bioskop':
let res8 = await bioskop(one ? one : null)
throw res8
break
case 'bioskopNow':
let res9 = await bioskopNow(one ? one : null)
throw res9
break
case 'bucin':
let res10 = await bucin(one ? one : null)
throw res10
break
case 'bucinjson':
let res11 = await bucinjson(one ? one : null)
throw res11
break
case 'caklontong':
let res12 = await caklontong(one ? one : null)
throw res12
break
case 'chord':
let res13 = await chord(one ? one : null)
throw res13
break
case 'cnbindonesia':
let res14 = await cnbindonesia(one ? one : null)
throw res14
break
case 'createHash':
let res15 = await createHash(one ? one : null)
throw res15
break
case 'dare':
let res16 = await dare(one ? one : null)
throw res16
break
case 'darejson':
let res17 = await darejson(one ? one : null)
throw res17
break
case 'didyoumean':
let res18 = await didyoumean(one ? one : null)
throw res18
break
case 'facebookdl':
let res19 = await facebookdl(one ? one : null)
throw res19
break
case 'facebookdlv2':
let res20 = await facebookdlv2(one ? one : null)
throw res20
break
case 'facebookdlv3':
let res21 = await facebookdlv3(one ? one : null)
throw res21
break
case 'family100':
let res22 = await family100(one ? one : null)
throw res22
break
case 'fromBase64ToString':
let res23 = await fromBase64ToString(one ? one : null)
throw res23
break
case 'gempa':
let res24 = await gempa(one ? one : null)
throw res24
break
case 'gempaNow':
let res25 = await gempaNow(one ? one : null)
throw res25
break
case 'getZodiac':
let res26 = await getZodiac(one ? one : null)
throw res26
break
case 'googleImage':
let res27 = await googleImage(one ? one : null)
throw res27
break
case 'googleIt':
let res28 = await googleIt(one ? one : null)
throw res28
break
case 'groupWA':
let res29 = await groupWA(one ? one : null)
throw res29
break
case 'instagramdl':
let res30 = await instagramdl(one ? one : null)
throw res30
break
case 'instagramdlv2':
let res31 = await instagramdlv2(one ? one : null)
throw res31
break
case 'instagramdlv3':
let res32 = await instagramdlv3(one ? one : null)
throw res32
break
case 'instagramdlv4':
let res33 = await instagramdlv4(one ? one : null)
throw res33
break
case 'instagramStalk':
let res34 = await instagramStalk(one ? one : null)
throw res34
break
case 'instagramStory':
let res35 = await instagramStory(one ? one : null)
throw res35
break
case 'instagramStoryv2':
let res36 = await instagramStoryv2(one ? one : null)
throw res36
break
case 'jadwalsholat':
let res37 = await jadwalsholat(one ? one : null)
throw res37
break
case 'jadwalTV':
let res38 = await jadwalTV(one ? one : null)
throw res38
break
case 'jadwalTVNow':
let res39 = await jadwalTVNow(one ? one : null)
throw res39
break
case 'kbbi':
let res40 = await kbbi(one ? one : null)
throw res40
break
case 'kompas':
let res41 = await kompas(one ? one : null)
throw res41
break
case 'latinToAksara':
let res42 = await latinToAksara(one ? one : null)
throw res42
break
case 'liputan6':
let res43 = await liputan6(one ? one : null)
throw res43
break
case 'listJadwalSholat':
let res44 = await listJadwalSholat(one ? one : null)
throw res44
break
case 'listJadwalTV':
let res45 = await listJadwalTV(one ? one : null)
throw res45
break
case 'lyrics':
let res46 = await lyrics(one ? one : null)
throw res46
break
case 'lyricsv2':
let res47 = await lyricsv2(one ? one : null)
throw res47
break
case 'mediafiredl':
let res48 = await mediafiredl(one ? one : null)
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res48
    let cipri = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${aploud}
`.trim()
    m.reply(cipri)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
break
case 'merdeka':
let res49 = await merdeka(one ? one : null)
throw res49
break
case 'minecraftProtocol':
let res50 = await minecraftProtocol(one ? one : null)
throw res50
break
case 'nameFreeFire':
let res51 = await nameFreeFire(one ? one : null)
throw res51
break
case 'nomorhoki':
let res52 = await nomorhoki(one ? one : null)
throw res52
break
case 'pinterest':
let res53 = await pinterest(one ? one : null)
throw res53
break
case 'randomBytes':
let res54 = await randomBytes(one ? one : null)
throw res54
break
case 'randomUUID':
let res55 = await randomUUID(one ? one : null)
throw res55
break
/*
case 'readVarInt':
let res56 = await readVarInt(one ? one : null)
throw res56
break
*/
case 'savefrom':
let res57 = await savefrom(one ? one : null)
throw res57
break
case 'sfilemobi':
let res58 = await sfilemobi(one ? one : null)
throw res58
break
case 'sfilemobiSearch':
let res59 = await sfilemobiSearch(one ? one : null)
throw res59
break
case 'siapakahaku':
let res60 = await siapakahaku(one ? one : null)
throw res60
break
case 'snapsave':
let res61 = await snapsave(one ? one : null)
throw res61
break
case 'statusBedrock':
let res62 = await statusBedrock(one ? one : null)
throw res62
break
case 'statusJava':
let res63 = await statusJava(one ? one : null)
throw res63
break
case 'stickerLine':
let res64 = await stickerLine(one ? one : null)
throw res64
break
case 'stickerTelegram':
let res65 = await stickerTelegram(one ? one : null)
throw res65
break
case 'suaracom':
let res66 = await suaracom(one ? one : null)
throw res66
break
case 'susunkata':
let res67 = await susunkata(one ? one : null)
throw res67
break
case 'tebakbendera':
let res68 = await tebakbendera(one ? one : null)
throw res68
break
case 'tebakgambar':
let res69 = await tebakgambar(one ? one : null)
throw res69
break
case 'tebakkabupaten':
let res70 = await tebakkabupaten(one ? one : null)
throw res70
break
case 'tebakkata':
let res71 = await tebakkata(one ? one : null)
throw res71
break
case 'tebakkimia':
let res72 = await tebakkimia(one ? one : null)
throw res72
break
case 'tebaklirik':
let res73 = await tebaklirik(one ? one : null)
throw res73
break
case 'tebaktebakan':
let res74 = await tebaktebakan(one ? one : null)
throw res74
break
case 'tekateki':
let res75 = await tekateki(one ? one : null)
throw res75
break
case 'textpro':
let res76 = await textpro(one ? one : null)
throw res76
break
case 'textproList':
let res77 = await textproList(one ? one : null)
throw res77
break
case 'tiktokdl':
const { author: { nickname }, video, description } = await tiktokdl(one ? one : null).catch(async _ => await tiktokdlv3(one ? one : null))
    let urls = video.no_watermark || video.no_watermark2 || video.no_watermark_raw 
    if (!urls) throw 'Can\'t download video!'
    conn.sendFile(m.chat, urls, 'tiktok.mp4', author, m)
break
case 'tiktokdlv2':
let res79 = await tiktokdlv2(one ? one : null)
throw res79
break
case 'tiktokdlv3':
let res80 = await tiktokdlv3(one ? one : null)
throw res80
break
case 'tiktokfyp':
let res81 = await tiktokfyp(one ? one : null)
throw res81
break
case 'toBase64':
let res82 = await toBase64(one ? one : null)
throw res82
break
case 'truth':
let res83 = await truth(one ? one : null)
throw res83
break
case 'truthjson':
let res84 = await truthjson(one ? one : null)
throw res84
break
case 'tsunami':
let res85 = await tsunami(one ? one : null)
throw res85
break
case 'twitterdl':
let res86 = await twitterdl(one ? one : null)
throw res86
break
case 'twitterdlv2':
let res87 = await twitterdlv2(one ? one : null)
throw res87
break
case 'wallpaper':
let res88 = await wallpaper(one ? one : null)
throw res88
break
case 'wallpaperv2':
let res89 = await wallpaperv2(one ? one : null)
throw res89
break
case 'wallpaperv3':
let res90 = await wallpaperv3(one ? one : null)
throw res90
break
case 'wikipedia':
let res91 = await wikipedia(one ? one : null)
throw res91
break
/*
case 'writeVarInt':
let res92 = await writeVarInt(one ? one : null)
throw res92
break
*/
case 'youtubedl':
let res93 = await youtubedl(one ? one : null)
throw res93
break
case 'youtubedlv2':
let res94 = await youtubedlv2(one ? one : null)
throw res94
break
case 'youtubedlv3':
let res96 = await youtubedlv3(one ? one : null)
throw res96
break
case 'youtubeSearch':
let res97 = await youtubeSearch(one ? one : null)
throw res97
break
case 'zippyshare':
let res98 = await zippyshare(one ? one : null)
throw res98
break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['boc <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^boc$/i
export default handler

