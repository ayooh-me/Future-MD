
import fetch from "node-fetch";
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .ttsv hello world\n<command> <tex>"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  let three = urut[2]
  if (command == "ttsv") {
  let lis = [
  "Brian",
  "Ivy",
  "Justin",
  "Russell",
  "Nicole",
  "Emma",
  "Amy",
  "Joanna",
  "Salli",
  "Kimberly",
  "Kendra",
  "Joey"
];

  let listSections = []
	Object.keys(lis).map((v, index) => {
	listSections.push(["Model [ " + ++index + " ]", [
          [lis[v], usedPrefix + command + "get " + lis[v] + "|" + text, "➥"]
        ]])
	})
	return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
  }
  if (command == "ttsvget") {
  let res = await getAudioURLs(one, two)
  await conn.sendMessage(m.chat, { audio: { url: res }, seconds: fsizedoc, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100,0,100,0,100,0,100] }, { quoted: m })
  }
}
handler.help = ["ttsv"]
handler.tags = ["misc"]
handler.command = /^(ttsv|ttsvget)$/i
export default handler

// keys must be lowercase
const CUSTOM_WORD_MAP = {
  blgsteve: "B L G Steve",
  bexchat: "Bex Chat",
  specialcei: "Special K",
  cei: "K",
};

function replaceWordsIfNeeded(text) {
  return text
    .split(" ")
    .map((token) => {
      if (
        Object.prototype.hasOwnProperty.call(
          CUSTOM_WORD_MAP,
          token.toLowerCase()
        )
      ) {
        return CUSTOM_WORD_MAP[token.toLowerCase()];
      }

      return token;
    })
    .join(" ");
}

async function getAudioURL({ voice, text }) {
  const response = await fetch("https://streamlabs.com/polly/speak", {
    method: "POST",
    body: JSON.stringify({
      voice,
      text,
    }),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.status !== 200) {
    throw new Error(`Something went wrong (${response.statusText})`);
  }

  const json = await response.json();

  if (json.error) {
    throw new Error(json.error);
  }

  if (!json.success) {
    throw new Error(
      "Something went wrong getting text-to-speech audio URL"
    );
  }

  return json.speak_url;
}

async function getAudioURLs(voice, text) {
  return getAudioURL({
    voice: voice,
    text: replaceWordsIfNeeded(text),
  });
}

