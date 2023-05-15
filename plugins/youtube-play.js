import {
    youtubedl,
    youtubedlv2
} from "@bochilteam/scraper"
import search from "yt-search"
import {
    generateWAMessageFromContent
} from "@adiwajshing/baileys"

var handler = async (m, {
    conn,
    command,
    text,
    usedPrefix
}) => {
    if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`
    try {
        let vid = await searchAndFilterVideos(text)
        if (!vid) throw "Video Not Found, Try Another Title"
        let {
            title,
            thumbnail,
            timestamp,
            views,
            ago,
            url
        } = vid
        let dla = "Downloading audio please wait"
        let dls = "Downloading audio succes"

        let captvid = `
*Title:* ${title ? title : 'tidak diketahui'}
*Duration:* ${timestamp ? timestamp : 'tidak diketahui'}
*Views:* ${views ? views : 'tidak diketahui'}
*Upload:* ${ago ? ago : 'tidak diketahui'}
*Link:* ${url}

${wait}
`
        let ytthumb = await (await conn.getFile(thumbnail)).data
        let msg = await generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
                text: captvid,
                jpegThumbnail: ytthumb,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        body: dla,
                        containsAutoReply: true,
                        mediaType: 1,
                        mediaUrl: url,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceId: "WudySoft",
                        sourceType: "PDF",
                        previewType: "PDF",
                        sourceUrl: url,
                        thumbnail: ytthumb,
                        thumbnailUrl: thumbnail,
                        title: htki + " Y O U T U B E " + htka
                    }
                }
            }
        }, {
            quoted: m
        })
        await conn.relayMessage(m.chat, msg.message, {})
        const yt = await youtubedlv2(url).catch(async _ => await youtubedl(url))
        if (command == "playmp4") {
            let link = await yt.video["144p"].download() || await yt.video["240p"].download() || await yt.video["360p"].download() || await yt.video["480p"].download() || await yt.video["720p"].download() || await yt.video["1080p"].download() || await yt.video["auto"].download()
            let doc = {
                video: {
                    url: link
                },
                mimetype: "video/mp4",
                caption: title,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaType: 2,
                        mediaUrl: url,
                        title: title,
                        body: dls,
                        sourceUrl: url,
                        thumbnail: ytthumb
                    }
                }
            }

            await conn.sendMessage(m.chat, doc, {
                quoted: m
            })
        } else {
            const link = await yt.audio["128kbps"].download()
            let doc = {
                audio: {
                    url: link
                },
                mimetype: "audio/mp4",
                fileName: title,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaType: 2,
                        mediaUrl: url,
                        title: title,
                        body: dls,
                        sourceUrl: url,
                        thumbnail: ytthumb
                    }
                }
            }

            await conn.sendMessage(m.chat, doc, {
                quoted: m
            })
        }
    } catch (e) {
        await m.reply(eror)
    }

}
handler.help = ["play"].map(v => v + " <pencarian>")
handler.tags = ["downloader"]
handler.command = /^(play((mp3|mp4|yt))?|ytplay)$/i
handler.limit = true
export default handler

async function searchAndFilterVideos(query, maxResults = 100, similarityThreshold = 0.5) {
    try {
        const res = await search(query);
        const videos = res.videos
            .slice(0, maxResults)
            .filter(video => {
                const titleWords = video.title.toLowerCase().split(" ");
                const queryWords = query.toLowerCase().split(" ");
                const matchCount = titleWords.filter(word => queryWords.includes(word)).length;
                return matchCount / titleWords.length >= similarityThreshold;
            });

        if (videos.length > 0) {
            return videos[0];
        } else if (res.videos.length > 0) {
            return res.videos[0];
        } else {
            return {};
        }
    } catch (e) {
        console.error(e);
        return {};
    }
}