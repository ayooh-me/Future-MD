import axios from "axios"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
var tes = await Quizz("sejarah", 1)
var soal = await CleanText(tes.questions.structure.query.text)
    let listSections = []
    Object.values(tes.questions.structure.options).map((v, index) => {
        listSections.push(["Num. " + ++index, [
            [CleanText(v.text), usedPrefix + command, ""]
        ]])
    })
    return conn.sendList(m.chat, htki + " Quizz " + htka, "SOAL:\n" + soal, author, "[ Pilih ]", listSections, m)
}
handler.help = ["quiz"]
handler.tags = ["game"]
handler.command = /^(quiz)$/i
export default handler

function CleanText(str) {
	return str.replace(/<\/?[^>]+(>|$)/g, "");
	}
function getRandomId(idq) {
  return idq[Math.floor(Math.random() * idq.length)]
}

async function Quizz(type, num) {
    var id
    var id_sejarah = [
"61bed4c936538a001dfbdc31",
"61bed8b1fafe6f001dc348f7",
"61bedd518cddbd001da9c9f5",
"61bee34a3282e8001dd522e8",
"61bee3d19e4f60001e97dd8d",
"61bee4930319e4001eeb8bb8",
"61e675b10ac5bb001d158084",
"61e678dd5ab680001d82ecda",
"61e67a6a0ac5bb001d15832d",
"61e67b9d5ab680001d82eeaf"
]
    if (type == "sejarah") {
    id = await getRandomId(id_sejarah)
    }
    const quiz = await fetch(
      `https://quizizz.com/api/main/quiz/${id}?source=join`
    )
      .then(res => res.json())
      .catch(e => e)

    if (quiz.success === false)
      return {
        code: /[A-Z_]+/.exec(quiz.error)[0],
        message: quiz.message
      }

    return {
      quizId: id,
      questions: quiz.data.quiz.info.questions[num]
    }
}