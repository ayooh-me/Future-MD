import fetch from "node-fetch"

let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {
    if (!text) throw "Cari apa?"
    let ytsr = "https://www.youtube.com/watch?v="
    try {
    let data = await searchVideos(text)
    await m.reply(wait)
    let list = data.map((item, index) => `
${htki} ${index+1} ${htka}
🔖 *Title:* ${item.title.runs[0].text}
📤 *Thumb:* ${item.thumbnail}
⏰ *Duration:* ${item.duration.simpleText}
🔗 *Url:* ${ytsr + item.id}
`).join("\n")
    await m.reply(`*${htki} 📺 Youtube Search 🔎 ${htka}*\n${list}`)
    } catch (e) {
    await m.reply(eror)
    }
}
handler.help = ["", "earch"].map(v => "yts" + v + " <pencarian>")
handler.tags = ["tools"]
handler.command = /^y(outubesearch|ts((biasa)?|earch))$/i
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
