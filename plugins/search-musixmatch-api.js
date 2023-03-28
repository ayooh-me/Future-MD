import axios from "axios"
import got from "got"
import cheerio from "cheerio"
const API_KEY = "46a908cae9e6fe663a1fe8ef339f08f6";

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
let arr = ["mmsearch", "mmtop", "mmlyrics", "mmtrack"]
    let query = "input text\n*Ex:* .mm hello\nList:\n" + await ArrClean(arr)
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    
    if (command == "mm") {
    await m.reply(query)
    }
    if (command == "mmsearch") {
        m.reply(wait)
        var res = await Search(text)
        throw res
    }
    if (command == "mmtop") {
        m.reply(wait)
        var res = await Top()
        throw res
    }
    if (command == "mmlyrics") {
        m.reply(wait)
        var res = await Lyrics(text)
        throw res
    }
    if (command == "mmtrack") {
        m.reply(wait)
        var res = await Track(text)
        throw res
    }

}
handler.help = ["mm (pilih)"]
handler.tags = ["search"]
handler.command = ["mm", "mmsearch", "mmtop", "mmlyrics", "mmtrack"]
export default handler

function ArrClean(str) {
return str.map((v, index) => ++index + ". " + v).join('\r\n')
}

async function Search(QUERY) {
    const SEARCH_URL = "https://api.musixmatch.com/ws/1.1/track.search?q_track=" + QUERY + "&page_size=10&page=1&s_track_rating=desc&apikey=" + API_KEY
    const {
        data
    } = await axios.get(SEARCH_URL);
    const {
        track_list
    } = data.message.body;
    return track_list
}
async function Top() {
    const TOP_TEN_SONGS_URL =
        "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=" + API_KEY
    const {
        data
    } = await axios.get(TOP_TEN_SONGS_URL);
    const {
        track_list
    } = data.message.body;
    return track_list
}
async function Lyrics(TRACK_ID) {
    const FETCH_LYRICS_URL = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=" + TRACK_ID + "&apikey=" + API_KEY
    const {
        data
    } = await axios.get(FETCH_LYRICS_URL);
    const {
        lyrics
    } = data.message.body;
    return lyrics
}
async function Track(TRACK_ID) {
    const FETCH_TRACK_URL = "https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=" + TRACK_ID + "&apikey=" + API_KEY

    const {
        data
    } = await axios.get(FETCH_TRACK_URL);
    const {
        track
    } = data.message.body;
    return track
}