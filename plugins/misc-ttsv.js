import fetch from "node-fetch";
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
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
    let lis = [
        "Lotte",
        "Maxim",
        "Ayanda",
        "Salli",
        "Ola",
        "Arthur",
        "Ida",
        "Tomoko",
        "Remi",
        "Geraint",
        "Miguel",
        "Elin",
        "Giorgio",
        "Marlene",
        "Ines",
        "Kajal",
        "Zhiyu",
        "Zeina",
        "Suvi",
        "Karl",
        "Gwyneth",
        "Joanna",
        "Lucia",
        "Cristiano",
        "Astrid",
        "Andres",
        "Vicki",
        "Mia",
        "Vitoria",
        "Bianca",
        "Chantal",
        "Raveena",
        "Daniel",
        "Amy",
        "Liam",
        "Ruth",
        "Kevin",
        "Brian",
        "Russell",
        "Aria",
        "Matthew",
        "Aditi",
        "Dora",
        "Enrique",
        "Hans",
        "Hiujin",
        "Carmen",
        "Ivy",
        "Ewa",
        "Maja",
        "Gabrielle",
        "Nicole",
        "Filiz",
        "Camila",
        "Jacek",
        "Thiago",
        "Justin",
        "Celine",
        "Kazuha",
        "Kendra",
        "Arlet",
        "Ricardo",
        "Mads",
        "Hannah",
        "Mathieu",
        "Lea",
        "Sergio",
        "Hala",
        "Tatyana",
        "Penelope",
        "Naja",
        "Olivia",
        "Ruben",
        "Laura",
        "Takumi",
        "Mizuki",
        "Carla",
        "Conchita",
        "Jan",
        "Kimberly",
        "Liv",
        "Adriano",
        "Lupe",
        "Joey",
        "Pedro",
        "Seoyeon",
        "Emma",
        "Stephen"
    ];
    if (command == "ttsv") {
        let listSections = []
        Object.keys(lis).map((v, index) => {
            listSections.push(["Model [ " + ++index + " ]", [
                [lis[v], usedPrefix + command + "get " + lis[v] + "|" + text, "➥"]
            ]])
        })
        return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
    }
    if (command == "ttsvget") {
        try {
            let res = await getAudioURLs(one, two)
            await conn.sendMessage(m.chat, {
                audio: {
                    url: res
                },
                seconds: fsizedoc,
                ptt: true,
                mimetype: "audio/mpeg",
                fileName: "vn.mp3",
                waveform: [100, 0, 100, 0, 100, 0, 100]
            }, {
                quoted: m
            })
        } catch (e) {
            await m.reply(eror)
        }
    }
    if (command == "ttsvlist") {
        let res = lis.map((v, index) => ++index + ". " + v).join("\n")
        let nah = `${htki} *L I S T* ${htka}
*Example* ${usedPrefix + command} Brian|halo

${res}`
        await m.reply(nah)
    }
}
handler.help = ["ttsv"]
handler.tags = ["misc"]
handler.command = /^(ttsv|ttsvget|ttsvlist)$/i
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

async function getAudioURL({
    voice,
    text
}) {
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