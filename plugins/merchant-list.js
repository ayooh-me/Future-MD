const { profile, watch, prepaid, post, media } = await(await import('../plugins/merchant-api.js'))
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  let spas = "                "
  
let template = (args[0] || '').toLowerCase()
let listSections = []
let caption = `*Contoh Penggunaan*

${usedPrefix + command} list

*List Command*
• list
• trx
• status
• profile
`
if (!args[0]) return m.reply(caption)
if (command) {
switch (template) {
/* Start */
					case "list":
					if (!one && !two) {
					const Ser = await prepaid()
						const resu = await Ser.services()
						if (!resu.data) return m.reply(resu.message)
        Object.values(resu.data).map((v, index) => {
            listSections.push(["List. " + ++index, [
                [v.brand, usedPrefix + command + " " + args[0] + " |" + v.type, v.type]
            ]])
        })
        return conn.sendList(m.chat, htki + " List Product " + htka, "Berikut daftar semua produk", author, "[ Choose ]", listSections, m)
					}
					if (one && !two) {
					let Oser = await prepaid(one)
						let resul = await Oser.services(one)
						if (resul.result) {
							var res = resul.data.filter((item) => item.type === one)
        Object.values(res).map((v, index) => {
            listSections.push(["List. " + ++index, [
                [v.brand, usedPrefix + command + " " + args[0] + " |" + v.type + "|" + v.brand, v.type]
            ]])
        })
        return conn.sendList(m.chat, htki + " List Product " + htka, "Berikut daftar produk " + one, author, "[ Choose ]", listSections, m)
						} else return m.reply(resul.message)
					}
					if (one && two) {
					let OTS = await prepaid(one, two)
						let result = await OTS.services(one, two)
						if (!result.data) return m.reply(result.message)
						var reso = result.data.filter((v) => v.type === one && v.brand === two)
						let teks = spas + "*[ Berikut daftar produk ]*\n\n"
						for (let i of reso) {
							teks += `*Code* : ${i.code}\n*Nama* : ${i.name}\n*Harga* : ${
							(i.price).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 2})
							}\n*Status* : ${i.status}\n*Note* : ${i.note}\n\n`
						}
						return m.reply(teks)
					}
					break
				
				case "trx":
					if (!one || !two) return m.reply(`.*${command + " " + args[0]}* |Code|Nomor`)
					const OTR = await prepaid(one, two)
					const TRX = await OTR.order(one, two)
					console.log(TRX)
					const { data } = TRX
					if (TRX.result && data !== null) {
						let teks2 = `_Transaksi status *${data.status}*_\n\n*TRXID* : ${data.trxid}\n*orderID* : ${data.data}\n*itemID* : ${data.service}\n\n*_${TRX.message}_*`
						m.reply(teks2)
					} else {
						return m.reply(TRX.message)
					}
					const stats = await watch(data.trxid)
					if (stats.result) {
						const { data } = stats
						let datas1 = data[0]
						let teks2 = `_Transaksi status *${datas1.status}*_\n\n*TRXID* : ${datas1.trxid}\n*orderID* : ${datas1.data}\n*itemID* : ${datas1.service}`
						m.reply(teks2)
					}
					console.log(stats)
					break
				
				case "status":
					if (!one) return m.reply(`.*${command}* TRXID`)
					const stats2 = await watch(one)
					if (stats2.result) {
						const { data } = stats2
						let datas = data[0]
						let teks3 = `_Transaksi status *${datas.status}*_\n\nTRXID: ${datas.trxid}\norderID: ${datas.data}\nitemID: ${datas.service}`
						m.reply(teks3)
					}
					break
					
					case "profile":
					const prof = await profile()
					let prip = `*Username:* ${prof.data.username}\n*Balance:* ${
					(prof.data.balance).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 2})
					}\n*Point:* ${prof.data.point}\n*Level:* ${prof.data.level}\n*Registered:* ${prof.data.registered}\n\n*${prof.message}*`
					m.reply(prip)
					break

/* Ends */
            }
       }
}
handler.help = ['merchant <args>']
handler.tags = ['tools'] 
handler.command = /^(ampangpedia|merchant|produk)$/i
export default handler
handler.owner = true