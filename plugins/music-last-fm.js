import fetch from "node-fetch";
import { stringify as stringifyQueryString } from "qs";

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	try {
	m.reply(wait)
	 var imge = await getRecentLastFmTrack()
	 throw imge
  } catch (e) {
  throw eror
 }
}
handler.help = ["lastfm"]
handler.tags = ["music"]
handler.command = /^(lastfm)$/i
export default handler

const LAST_FM_USERNAME = "jtmdias";
const LAST_FM_API_KEY = "60caa5e07c4a12ec3d677cf8c2f6f804";
const BASE_URL = `http://ws.audioscrobbler.com/2.0/`;
function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}

 async function getRecentLastFmTrack() {
  const queryString = stringifyQueryString({
    api_key: LAST_FM_API_KEY,
    format: "json",
    method: "user.getRecentTracks",
    user: LAST_FM_USERNAME,
    limit: 1,
  });

  const url = `${BASE_URL}?${queryString}`;

  const response = await fetch(url);
  const json = await response.json();

  if (
    !json ||
    !json.recenttracks ||
    !json.recenttracks.track ||
    json.recenttracks.track.length === 0
  ) {
    throw new Error("No track info");
  }

  const [track] = json.recenttracks.track;

  const isNowPlaying = !!(
    track["@attr"] && track["@attr"].nowplaying === "true"
  );

  const albumName = track.album["#text"];
  const albumArt = track.image.find((i) => i.size === "large");
  const albumArtURL = albumArt ? albumArt["#text"] : null;
  const artistName = track.artist["#text"];
  const trackName = track.name;
  const trackUrl = track.url;

  const data = {
    isNowPlaying,
    artistName,
    albumName,
    albumArtURL,
    trackName,
    trackUrl,
  };

  return {
    id: hashCode(data),
    ...data,
  };
}