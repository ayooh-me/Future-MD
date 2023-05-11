import fetch from "node-fetch"
import {
    anoboy,
    apkmody,
    bokepsin,
    danbooru,
    diffusion,
    doujindesu,
    facebook,
    h5tuqq,
    hentaiHaven,
    instagram,
    komikuId,
    music,
    nhentai,
    nineApps,
    otakudesu,
    photofunia,
    pinterest,
    storyWa,
    tiktok,
    unsplash,
    xvideos,
    youtube,
    zippyshare
} from "@xct007/frieren-scraper"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let lister = [
        "anoboy",
        "apkmody",
        "bokepsin",
        "danbooru",
        "diffusion",
        "doujindesu",
        "facebook",
        "h5tuqq",
        "hentaiHaven",
        "instagram",
        "komikuId",
        "music",
        "nhentai",
        "nineApps",
        "otakudesu",
        "photofunia",
        "pinterest",
        "storyWa",
        "tiktok",
        "unsplash",
        "xvideos",
        "youtube",
        "zippyshare"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(/[^\w\s]/g)
    if (!lister.includes(feature)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v).join('\n'))

    if (lister.includes(feature)) {
        if (feature == "anoboy") {
            let anby = [
                "latest",
                "search",
                "detail"
            ]
            if (!anby.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + anby.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "latest") {
                await m.reply(wait)
                let outs = await anoboy.latest()
                throw outs
            }
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await anoboy.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await anoboy.search(inputs_)
                throw outs
            }
        }
        if (feature == "apkmody") {
            let apkm = [
                "search",
                "download"
            ]
            if (!apkm.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + apkm.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await apkmody.search(inputs_)
                throw outs
            }
            if (inputs == "download") {
                await m.reply(wait)
                let outs = await apkmody.download(inputs_)
                throw outs
            }
        }
        if (feature == "bokepsin") {
            let bkp = [
                "latest",
                "search",
                "detail"
            ]
            if (!bkp.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + bkp.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "latest") {
                await m.reply(wait)
                let outs = await bokepsin.latest()
                throw outs
            }
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await bokepsin.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await bokepsin.search(inputs_)
                throw outs
            }
        }
        if (feature == "danbooru") {
            await m.reply(wait)
            let outs = await danbooru.search(inputs)
            throw outs
        }
        if (feature == "diffusion") {
            await m.reply(wait)
            let outs = await diffusion.stable(inputs, Math.floor(Math.random() * 900000) + 100000)
            throw outs
        }
        if (feature == "doujindesu") {
            let djds = [
                "latest",
                "search",
                "detail"
            ]
            if (!djds.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + djds.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "latest") {
                await m.reply(wait)
                let outs = await doujindesu.latest()
                throw outs
            }
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await doujindesu.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await doujindesu.detail(inputs_)
                throw outs
            }
        }
        if (feature == "music") {
            await m.reply(wait)
            let outs = await music.search(inputs)
            throw outs
        }
        if (feature == "facebook") {
            await m.reply(wait)
            let outs = await facebook.v1(inputs)
            throw outs
        }
        if (feature == "h5tuqq") {
            await m.reply(wait)
            let outs = await h5tuqq(inputs)
            throw outs
        }
        if (feature == "hentaiHaven") {
            let hth = [
                "search",
                "detail"
            ]
            if (!hth.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + hth.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await hentaiHaven.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await hentaiHaven.detail(inputs_)
                throw outs
            }
        }
        if (feature == "instagram") {
            await m.reply(wait)
            let outs = await instagram.v1(inputs)
            throw outs
        }
        if (feature == "komikuId") {
            let kmku = [
                "latest",
                "search",
                "detail"
            ]
            if (!kmku.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + kmku.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "latest") {
                await m.reply(wait)
                let outs = await komikuId.latest()
                throw outs
            }
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await komikuId.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await komikuId.detail(inputs_)
                throw outs
            }
        }
        if (feature == "music") {
            await m.reply(wait)
            let outs = await music(inputs)
            throw outs
        }
        if (feature == "nhentai") {
            let nht = [
                "search",
                "detail"
            ]
            if (!nht.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + nht.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await nhentai.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await nhentai.detail(inputs_)
                throw outs
            }
        }
        if (feature == "nineApps") {
            let napp = [
                "search",
                "download"
            ]
            if (!napp.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + napp.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await nineApps.search(inputs_)
                throw outs
            }
            if (inputs == "download") {
                await m.reply(wait)
                let outs = await nineApps.download(inputs_)
                throw outs
            }
        }
        if (feature == "otakudesu") {
            let odes = [
                "latest",
                "search",
                "detail"
            ]
            if (!odes.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + odes.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "latest") {
                await m.reply(wait)
                let outs = await otakudesu.latest()
                throw outs
            }
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await otakudesu.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await otakudesu.detail(inputs_)
                throw outs
            }
        }
        if (feature == "photofunia") {
            let pfun = [
                "list",
                "text",
                "image"
            ]
            if (!pfun.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + pfun.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "list") {
                await m.reply(wait)
                let outs = await photofunia.listEffects()
                throw outs
            }
            if (inputs == "text") {
                await m.reply(wait)
                let outs = await photofunia.create(inputs_, {
                    type: "text", // pass type as text.
                    input: inputs__
                })
                throw outs
            }
            if (inputs == "image") {
                await m.reply(wait)
                let outs = await photofunia.create(inputs_, {
                    type: "image", // pass type as text.
                    input: inputs__
                })
            }
        }
        if (feature == "pinterest") {
            await m.reply(wait)
            let outs = await pinterest.v1(inputs)
            throw outs
        }
        if (feature == "storyWa") {
            let stwa = [
                "popular",
                "search"
            ]
            if (!stwa.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + stwa.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "popular") {
                await m.reply(wait)
                let outs = await storyWa.popular()
                throw outs
            }
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await storyWa.search(inputs_)
                throw outs
            }
        }
        if (feature == "tiktok") {
            await m.reply(wait)
            let outs = await tiktok.v1(inputs)
            throw outs
        }
        if (feature == "unsplash") {
            await m.reply(wait)
            let outs = await unsplash.search(inputs)
            throw outs
        }
        if (feature == "xvideos") {
            let xvd = [
                "search",
                "detail"
            ]
            if (!xvd.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + xvd.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await xvideos.search(inputs_)
                throw outs
            }
            if (inputs == "detail") {
                await m.reply(wait)
                let outs = await xvideos.detail(inputs_)
                throw outs
            }
        }
        if (feature == "youtube") {
            let ytb = [
                "search",
                "download"
            ]
            if (!ytb.includes(inputs)) return m.reply("*Example:*\n.fs youtube.search.hello\n\n*Pilih type yg ada*\n" + ytb.map((v, index) => "  ○ " + v).join('\n'))
            if (inputs == "search") {
                await m.reply(wait)
                let outs = await youtube.search(inputs_)
                throw outs
            }
            if (inputs == "download") {
                await m.reply(wait)
                let outs = await youtube.download(inputs_)
                throw outs
            }
        }
        if (feature == "zippyshare") {
            await m.reply(wait)
            let outs = await zippyshare.download(inputs)
            throw outs
        }
    }

}
handler.help = ["fs type query"]
handler.tags = ["internet"]
handler.command = /^(fs)$/i
export default handler