import fetch from "node-fetch"
import {
    youtube
} from "social_media_downloader"
let handler = async (m, {
    conn,
    command,
    text,
    usedPrefix
}) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
    if (!text) throw `Use example ${usedPrefix}${command} Dj Gama Naufal`
    try {
    let cari = await searchVideos(text)
    let {
        id,
        duration,
        thumbnail
    } = cari[0]
    let url = "https://www.youtube.com/watch?v="
    let caption = `
*${htki} PLAY ${htka}*
⏰ *Duration:* ${duration.simpleText}
🔗 *Url:* ${url + id}
  `.trim()
  let p = await youtube(url + id)
            let dapet = p.result
    await conn.sendFile(m.chat, dapet[0].url, ".mp3", "", fakes, null, { fileLength: fsizedoc, seconds: fsizedoc, mimetype: "audio/mp4", contextInfo: {
          externalAdReply :{
    body: "Play : ",
    containsAutoReply: true,
    mediaType: 2, 
    mediaUrl: url + id,
    showAdAttribution: true,
    sourceUrl: url + id,
    thumbnailUrl: thumbnail,
    renderLargerThumbnail: true,
    title: "Request by: " + m.name,
     }}
  })
    } catch (e) {
    await m.reply(eror)
    }
}
handler.help = ["play"].map(v => v + " <pencarian>")
handler.tags = ["downloader"]
handler.command = /^(play((biasa|yt))?|ytplay)$/i
handler.limit = true
export default handler

async function searchVideos(query) {
  const userAgent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36";
  
  const search_query = encodeURIComponent(query).replace(/%20/g, "+");
  
  const url = `https://www.youtube.com/results?search_query=${search_query}`;
  const response = await fetch(url, { headers: { "User-Agent": userAgent } });
  const result = await response.text();
  
  const initialData = "var ytInitialData = {";
  const initialDataIndex = result.indexOf(initialData);
  const dataStart = initialDataIndex + initialData.length - 1;
  const dataEnd = result.indexOf("};", initialDataIndex) + 1;
  const json = result.slice(dataStart, dataEnd);
  
  try {
    const parsedJson = JSON.parse(json);
    const videos = parsedJson.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.filter(
      (v) => !!v.videoRenderer || !!v.playlistRenderer
    );
  
    const results = videos.map((video) => {
      if (video.videoRenderer) {
        const duration = video.videoRenderer.lengthText;
        return {
          type: "track",
          duration,
          id: video.videoRenderer.videoId,
          title: video.videoRenderer.title,
          thumbnail: video.videoRenderer.thumbnail.thumbnails[0]?.url || null,
        };
      } else {
        return {
          type: "playlist",
          id: video.playlistRenderer.playlistId,
          title: video.playlistRenderer.title,
          trackCount: video.playlistRenderer.videoCount,
          thumbnail: video.playlistRenderer.thumbnails[0]?.thumbnails[0]?.url || null,
        };
      }
    });
  
    return results;
  } catch (e) {
    return [];
  }
}
