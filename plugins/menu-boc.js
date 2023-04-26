import {
    aiovideodl,
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
    zippyshare
} from "@bochilteam/scraper"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let ends = [
        "aiovideodl",
        "aksaraToLatin",
        "alquran",
        "antaranews",
        "artimimpi",
        "artinama",
        "asahotak",
        "asmaulhusna",
        "bioskop",
        "bioskopNow",
        "bucin",
        "bucinjson",
        "caklontong",
        "chord",
        "cnbindonesia",
        "createHash",
        "dare",
        "darejson",
        "didyoumean",
        "facebookdl",
        "facebookdlv2",
        "facebookdlv3",
        "family100",
        "fromBase64ToString",
        "gempa",
        "gempaNow",
        "getZodiac",
        "googleImage",
        "googleIt",
        "groupWA",
        "instagramdl",
        "instagramdlv2",
        "instagramdlv3",
        "instagramdlv4",
        "instagramStalk",
        "instagramStory",
        "instagramStoryv2",
        "jadwalsholat",
        "jadwalTV",
        "jadwalTVNow",
        "kbbi",
        "kompas",
        "latinToAksara",
        "liputan6",
        "listJadwalSholat",
        "listJadwalTV",
        "lyrics",
        "lyricsv2",
        "mediafiredl",
        "merdeka",
        "nameFreeFire",
        "nomorhoki",
        "pinterest",
        "randomBytes",
        "randomUUID",
        "savefrom",
        "sfilemobi",
        "sfilemobiSearch",
        "siapakahaku",
        "snapsave",
        "statusBedrock",
        "statusJava",
        "stickerLine",
        "stickerTelegram",
        "suaracom",
        "susunkata",
        "tebakbendera",
        "tebakgambar",
        "tebakkabupaten",
        "tebakkata",
        "tebakkimia",
        "tebaklirik",
        "tebaktebakan",
        "tekateki",
        "textpro",
        "textproList",
        "tiktokdl",
        "tiktokdlv2",
        "tiktokdlv3",
        "tiktokfyp",
        "toBase64",
        "truth",
        "truthjson",
        "tsunami",
        "twitterdl",
        "twitterdlv2",
        "wallpaper",
        "wallpaperv2",
        "wallpaperv3",
        "wikipedia",
        "youtubedl",
        "youtubedlv2",
        "youtubedlv3",
        "youtubeSearch",
        "zippyshare"
    ]
    let [modes, kodes] = text.split(/[^\w\s]/g)
    if (!ends.includes(modes)) return m.reply("*Example:*\n.boc dare|0\n\n*Pilih type yg ada*\n" + ends.map((v, index) => "  ○ " + v).join("\n"))

    
        if (modes == "aiovideodl") {
            let res = await aiovideodl(kodes)
            throw res
        }
        if (modes == "aksaraToLatin") {
            let res = await aksaraToLatin(kodes)
            throw res
        }
        if (modes == "alquran") {
            let res = await alquran(kodes)
            throw res
        }
        if (modes == "antaranews") {
            let res = await antaranews(kodes)
            throw res
        }
        if (modes == "artimimpi") {
            let res = await artimimpi(kodes)
            throw res
        }
        if (modes == "artinama") {
            let res = await artinama(kodes)
            throw res
        }
        if (modes == "asahotak") {
            let res = await asahotak(kodes)
            throw res
        }
        if (modes == "asmaulhusna") {
            let res = await asmaulhusna(kodes)
            throw res
        }
        if (modes == "bioskop") {
            let res = await bioskop(kodes)
            throw res
        }
        if (modes == "bioskopNow") {
            let res = await bioskopNow(kodes)
            throw res
        }
        if (modes == "bucin") {
            let res = await bucin(kodes)
            throw res
        }
        if (modes == "bucinjson") {
            let res = await bucinjson(kodes)
            throw res
        }
        if (modes == "caklontong") {
            let res = await caklontong(kodes)
            throw res
        }
        if (modes == "chord") {
            let res = await chord(kodes)
            throw res
        }
        if (modes == "cnbindonesia") {
            let res = await cnbindonesia(kodes)
            throw res
        }
        if (modes == "createHash") {
            let res = await createHash(kodes)
            throw res
        }
        if (modes == "dare") {
            let res = await dare(kodes)
            throw res
        }
        if (modes == "darejson") {
            let res = await darejson(kodes)
            throw res
        }
        if (modes == "didyoumean") {
            let res = await didyoumean(kodes)
            throw res
        }
        if (modes == "facebookdl") {
            let res = await facebookdl(kodes)
            throw res
        }
        if (modes == "facebookdlv2") {
            let res = await facebookdlv2(kodes)
            throw res
        }
        if (modes == "facebookdlv3") {
            let res = await facebookdlv3(kodes)
            throw res
        }
        if (modes == "family100") {
            let res = await family100(kodes)
            throw res
        }
        if (modes == "fromBase64ToString") {
            let res = await fromBase64ToString(kodes)
            throw res
        }
        if (modes == "gempa") {
            let res = await gempa(kodes)
            throw res
        }
        if (modes == "gempaNow") {
            let res = await gempaNow(kodes)
            throw res
        }
        if (modes == "getZodiac") {
            let res = await getZodiac(kodes)
            throw res
        }
        if (modes == "googleImage") {
            let res = await googleImage(kodes)
            throw res
        }
        if (modes == "googleIt") {
            let res = await googleIt(kodes)
            throw res
        }
        if (modes == "groupWA") {
            let res = await groupWA(kodes)
            throw res
        }
        if (modes == "instagramStalk") {
            let res = await instagramStalk(kodes)
            throw res
        }
        if (modes == "instagramStory") {
            let res = await instagramStory(kodes)
            throw res
        }
        if (modes == "instagramStoryv2") {
            let res = await instagramStoryv2(kodes)
            throw res
        }
        if (modes == "instagramdl") {
            let res = await instagramdl(kodes)
            throw res
        }
        if (modes == "instagramdlv2") {
            let res = await instagramdlv2(kodes)
            throw res
        }
        if (modes == "instagramdlv3") {
            let res = await instagramdlv3(kodes)
            throw res
        }
        if (modes == "instagramdlv4") {
            let res = await instagramdlv4(kodes)
            throw res
        }
        if (modes == "jadwalTV") {
            let res = await jadwalTV(kodes)
            throw res
        }
        if (modes == "jadwalTVNow") {
            let res = await jadwalTVNow(kodes)
            throw res
        }
        if (modes == "jadwalsholat") {
            let res = await jadwalsholat(kodes)
            throw res
        }
        if (modes == "kbbi") {
            let res = await kbbi(kodes)
            throw res
        }
        if (modes == "kompas") {
            let res = await kompas(kodes)
            throw res
        }
        if (modes == "latinToAksara") {
            let res = await latinToAksara(kodes)
            throw res
        }
        if (modes == "liputan6") {
            let res = await liputan6(kodes)
            throw res
        }
        if (modes == "listJadwalSholat") {
            let res = await listJadwalSholat(kodes)
            throw res
        }
        if (modes == "listJadwalTV") {
            let res = await listJadwalTV(kodes)
            throw res
        }
        if (modes == "lyrics") {
            let res = await lyrics(kodes)
            throw res
        }
        if (modes == "lyricsv2") {
            let res = await lyricsv2(kodes)
            throw res
        }
        if (modes == "mediafiredl") {
            let res = await mediafiredl(kodes)
            throw res
        }
        if (modes == "merdeka") {
            let res = await merdeka(kodes)
            throw res
        }
        if (modes == "nameFreeFire") {
            let res = await nameFreeFire(kodes)
            throw res
        }
        if (modes == "nomorhoki") {
            let res = await nomorhoki(kodes)
            throw res
        }
        if (modes == "pinterest") {
            let res = await pinterest(kodes)
            throw res
        }
        if (modes == "randomBytes") {
            let res = await randomBytes(kodes)
            throw res
        }
        if (modes == "randomUUID") {
            let res = await randomUUID(kodes)
            throw res
        }
        if (modes == "savefrom") {
            let res = await savefrom(kodes)
            throw res
        }
        if (modes == "sfilemobi") {
            let res = await sfilemobi(kodes)
            throw res
        }
        if (modes == "sfilemobiSearch") {
            let res = await sfilemobiSearch(kodes)
            throw res
        }
        if (modes == "siapakahaku") {
            let res = await siapakahaku(kodes)
            throw res
        }
        if (modes == "snapsave") {
            let res = await snapsave(kodes)
            throw res
        }
        if (modes == "statusBedrock") {
            let res = await statusBedrock(kodes)
            throw res
        }
        if (modes == "statusJava") {
            let res = await statusJava(kodes)
            throw res
        }
        if (modes == "stickerLine") {
            let res = await stickerLine(kodes)
            throw res
        }
        if (modes == "stickerTelegram") {
            let res = await stickerTelegram(kodes)
            throw res
        }
        if (modes == "suaracom") {
            let res = await suaracom(kodes)
            throw res
        }
        if (modes == "susunkata") {
            let res = await susunkata(kodes)
            throw res
        }
        if (modes == "tebakbendera") {
            let res = await tebakbendera(kodes)
            throw res
        }
        if (modes == "tebakgambar") {
            let res = await tebakgambar(kodes)
            throw res
        }
        if (modes == "tebakkabupaten") {
            let res = await tebakkabupaten(kodes)
            throw res
        }
        if (modes == "tebakkata") {
            let res = await tebakkata(kodes)
            throw res
        }
        if (modes == "tebakkimia") {
            let res = await tebakkimia(kodes)
            throw res
        }
        if (modes == "tebaklirik") {
            let res = await tebaklirik(kodes)
            throw res
        }
        if (modes == "tebaktebakan") {
            let res = await tebaktebakan(kodes)
            throw res
        }
        if (modes == "tekateki") {
            let res = await tekateki(kodes)
            throw res
        }
        if (modes == "textpro") {
            let res = await textpro(kodes)
            throw res
        }
        if (modes == "textproList") {
            let res = await textproList(kodes)
            throw res
        }
        if (modes == "tiktokdl") {
            let res = await tiktokdl(kodes)
            throw res
        }
        if (modes == "tiktokdlv2") {
            let res = await tiktokdlv2(kodes)
            throw res
        }
        if (modes == "tiktokdlv3") {
            let res = await tiktokdlv3(kodes)
            throw res
        }
        if (modes == "tiktokfyp") {
            let res = await tiktokfyp(kodes)
            throw res
        }
        if (modes == "toBase64") {
            let res = await toBase64(kodes)
            throw res
        }
        if (modes == "truth") {
            let res = await truth(kodes)
            throw res
        }
        if (modes == "truthjson") {
            let res = await truthjson(kodes)
            throw res
        }
        if (modes == "tsunami") {
            let res = await tsunami(kodes)
            throw res
        }
        if (modes == "twitterdl") {
            let res = await twitterdl(kodes)
            throw res
        }
        if (modes == "twitterdlv2") {
            let res = await twitterdlv2(kodes)
            throw res
        }
        if (modes == "wallpaper") {
            let res = await wallpaper(kodes)
            throw res
        }
        if (modes == "wallpaperv2") {
            let res = await wallpaperv2(kodes)
            throw res
        }
        if (modes == "wallpaperv3") {
            let res = await wallpaperv3(kodes)
            throw res
        }
        if (modes == "wikipedia") {
            let res = await wikipedia(kodes)
            throw res
        }
        if (modes == "youtubeSearch") {
            let res = await youtubeSearch(kodes)
            throw res
        }
        if (modes == "youtubedl") {
            let res = await youtubedl(kodes)
            throw res
        }
        if (modes == "youtubedlv2") {
            let res = await youtubedlv2(kodes)
            throw res
        }
        if (modes == "youtubedlv3") {
            let res = await youtubedlv3(kodes)
            throw res
        }
        if (modes == "zippyshare") {
            let res = await zippyshare(kodes)
            throw res
        }

}
handler.help = ["boc type query"]
handler.tags = ["internet"]
handler.command = /^(boc)$/i

export default handler