import axios from "axios"
import chalk from "chalk"
import { randomUUID } from "crypto"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    args
}) => {

let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
            await m.reply(wait)
            let res = await createCompletion(text)
            throw res
}
handler.help = ["youchat query"]
handler.tags = ["internet"]
handler.command = /^(youchat)$/i
export default handler

  async function createCompletion(
  prompt,
  {
    page = 1,
    count = 10,
    safeSearch = "Moderate",
    onShoppingpage = false,
    mkt = "",
    responseFilter = "WebPages,Translations,TimeZone,Computation,RelatedSearches",
    domain = "youchat",
    queryTraceId = null,
    chat = [],
    includelinks = false,
    detailed = false,
    debug = false
  } = {}
) {
  let proxyurl = "https://files.xianqiao.wang/"
  const headers = {
    "authority": "you.com",
    "accept": "text/event-stream",
    "accept-language": "en,fr-FRq=0.9,frq=0.8,es-ESq=0.7,esq=0.6,en-USq=0.5,amq=0.4,deq=0.3",
    "cache-control": "no-cache",
    "referer": "https://you.com/search?q=who+are+you&tbm=youchat",
    "sec-ch-ua": '"Not_A Brand"v="99", "Google Chrome"v="109", "Chromium"v="109"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": `safesearch_guest=Moderate uuid_guest=${randomUUID()}`,
    "user-agent": "Mozilla/5.0 (Macintosh Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
  }

  const params = new URLSearchParams({
    q: prompt,
    page: page,
    count: count,
    safeSearch: safeSearch,
    onShoppingPage: onShoppingpage,
    mkt: mkt,
    responseFilter: responseFilter,
    domain: domain,
    queryTraceId: queryTraceId === null ? randomUUID() : queryTraceId,
    chat: JSON.stringify(chat),
  })

  const response = await fetch(proxyurl + "/api/streamingSearch?" + params.toString(), {
    headers: headers
  })

  if (debug) {
    console.clear()
    console.log(chalk.green("[DEBUGGER]:"))
  }

  const responseText = await response.text()
  const youChatSerpResults = responseText.match(/youChatSerpResults\ndata: (.*)\n\nevent/)[1]
  const thirdPartySearchResults = responseText.match(/thirdPartySearchResults\ndata: (.*)\n\nevent/)[1]
  const text = responseText.split('}]}\n\nevent: youChatToken\ndata: {"youChatToken": "')[1].replace(/"}\n\nevent: youChatToken\ndata: {"youChatToken": "|event: done\ndata: I'm Mr. Meeseeks. Look at me.\n\n/g, '')

  const extra = {
    youChatSerpResults: JSON.parse(youChatSerpResults),
  }

  return {
    response: text,
    links: includelinks ? JSON.parse(thirdPartySearchResults).search.third_party_search_results : null,
    extra: detailed ? extra : null,
  }
}