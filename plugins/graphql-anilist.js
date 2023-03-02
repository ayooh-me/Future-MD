import axios from "axios"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {

var arg = text.split`|`
var one = arg[1]
var two = arg[2]

let data = [
        "No Query",
        "Query"
    ]
    let listSections = []
    Object.keys(data).map((v, index) => {
        listSections.push(["Num. " + ++index, [
            ["Method " + data[v].toUpperCase(), usedPrefix + command + " |" + data[v] + "|" + text, ""]
        ]])
    })
if (!one) return conn.sendList(m.chat, htki + " ANILIST " + htka, "⚡ Silakan pilih metode yang anda mau.", author, "[ SEE ]", listSections, m)

const Search = {
  search: one
};

const NoQuery = `{
  Page {
    media(type: ANIME, status: RELEASING, sort: POPULARITY_DESC) {
      title {
        romaji
        english
        native
      }
      episodes
      nextAiringEpisode {
        episode
        timeUntilAiring
      }
      id
      siteUrl
      coverImage {
        large
        color
      }
      studios(isMain: true) {
        edges {
          isMain
          node {
            name
            siteUrl
          }
        }
      }
    }
  }
}
`

const Query = `query ($search: String, $status: MediaStatus) {
  Media(type: ANIME, status: $status, search: $search) {
    title {
      romaji
      english
      native
    }
    episodes
    nextAiringEpisode {
      episode
      timeUntilAiring
    }
    id
    siteUrl
    coverImage {
      large
      color
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          name
          siteUrl
        }
      }
    }
  }
}`;


var tes
if (one == "NoQuery") {
tes = await Anilist(NoQuery, Search)
throw tes.data
}
if (one == "Query") {
tes = await Anilist(Query, Search)
throw tes.data
}

}
handler.help = ["anilisthql"]
handler.tags = ["search"]
handler.command = /^(anilisthql)$/i
export default handler

async function Anilist(query, variables) {
return fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ query, variables })
  })
  .then(res => res.json())
  .catch(err => err);
}
