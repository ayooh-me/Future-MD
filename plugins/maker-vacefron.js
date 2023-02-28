import axios from "axios"

let handler = async (m, { conn, text, command, usedPrefix }) => {
	
	let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
	var endpoints = [
`https://vacefron.nl/api/adios?user=${one}`,
`https://vacefron.nl/api/batmanslap?text1=${two}&text2=${two}&batman=${one}&robin=${one}`,
`https://vacefron.nl/api/carreverse?text=${two}`,
`https://vacefron.nl/api/changemymind?text=${two}`,
`https://vacefron.nl/api/distractedbf?boyfriend=${one}&girlfriend=${one}&woman=${one}`,
`https://vacefron.nl/api/dockofshame?user=${one}`,
`https://vacefron.nl/api/drip?user=${one}`,
`https://vacefron.nl/api/ejected?name=${two}&impostor=BOOL&crewmate=black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow`,
`https://vacefron.nl/api/emergencymeeting?text=${two}`,
`https://vacefron.nl/api/firsttime?user=${one}`,
`https://vacefron.nl/api/grave?user=${one}`,
`https://vacefron.nl/api/iamspeed?user=${one}`,
`https://vacefron.nl/api/icanmilkyou?user1=${one}[&user2=${one}]`,
`https://vacefron.nl/api/heaven?user=${one}`,
`https://vacefron.nl/api/npc?text1=${two}&text2=${two}`,
`https://vacefron.nl/api/peeposign?text=${two}`,
`https://vacefron.nl/api/rankcard?username=${two}&avatar=${one}&currentXp=INT&nextLevelXp=INT&previousLevelXp=INT[&level=INT][&rank=INT][&customBg=${one}|HEX][&textShadowColor=HEX][&xpColor=HEX][&circleAvatar=BOOL][&badges=activedeveloper|balance|boost|bravery|brilliance|bughunter|certifiedmoderator|developer|earlysupporter|events|nitro|partner|serverowner|staff]`,
`https://vacefron.nl/api/stonks?user=${one}[&notStonks=BOOL]`,
`https://vacefron.nl/api/tableflip?user=${one}`,
`https://vacefron.nl/api/water?text=${two}`,
`https://vacefron.nl/api/wide?image=${one}`,
`https://vacefron.nl/api/wolverine?user=${one}`,
`https://vacefron.nl/api/womanyellingatcat?woman=${one}&cat=${one}`
]
    let listSections = []
    Object.keys(endpoints).map((v, index) => {
    
        listSections.push([index + " " + cmenub, [
            ["Get This App", usedPrefix + "get " + endpoints[v] + " yes", wm]
        ]])
    })
    return conn.sendList(m.chat, htki + " 📺 vacefron Search 🔎 " + htka, `⚡ Silakan pilih vacefron Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, wm, "☂️ RESULT ☂️", listSections, m)
}
handler.help = ["vacefron"]
handler.tags = ["tools"]
handler.command = /^vacefron$/i

export default handler
