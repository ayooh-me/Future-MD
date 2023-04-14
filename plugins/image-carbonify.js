import puppeteer from "puppeteer"
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let query = "Input Code:\n.carbon console.log('hello world')"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query

    try {
        m.reply(wait)
        let result = await Carbonify(text)
        await m.reply(result)
    } catch (e) {
        throw eror
    }
}
handler.help = ["carbon"]
handler.tags = ["misc"]
handler.command = /^carbon(ify)?$/i
export default handler

const config = {
    bg: "rgba(255, 255, 255, 1)", //background color
    ds: true, //dropShadow
    dsblur: "68px", //dropShadowBlurRadius
    dsyoff: "20px", //dropShadowOffsetY
    es: "2x", //exportSize
    fm: "Hack", //fontFamily
    fl: 1, //firstLineNumber
    fs: "14px", //fontSize
    l: "auto", //language
    ln: true, //lineNumbers
    ph: "10px", //paddingHorizontal
    pv: "10px", //paddingVertical
    si: false, //squaredImage
    t: "seti", //theme
    wa: true, //widthAdjustment
    // width: 800,
    wc: true, //windowControls
};

function convertToParams(myData) {
    var out = [];
    for (var key in myData) {
        if (myData.hasOwnProperty(key)) {
            out.push(key + "=" + encodeURIComponent(myData[key]));
        }
    }
    return out.join("&");
};

async function Carbonify(teks) {
    const snippets = [{
        name: "Carbonify",
        code: teks
    }]
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let index = 1;
    for (const snippet of snippets) {
        console.log(`Carbonifying snippet ${index} of ${snippets.length}`);
        await page.goto(
            `https://carbon.now.sh?${convertToParams(config)}&code=${encodeURI(
        snippet.code
      )}`
        );

        const codeContainer = await page.$("#export-container");
        await page.addStyleTag({
            content: ".CodeMirror-sizer{min-height: 0!important}"
        });
        return await codeContainer.screenshot({
            path: `./sticker/${snippet.name.split(".")[0]}.png`,
        });
        index++;
    }
    await browser.close();
}