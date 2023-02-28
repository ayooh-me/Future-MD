import axios from 'axios'

let bestPrice = 1337, bestPriceCT = ''

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'What product you want to search?'
	let product = args[0].toLowerCase(), txt = '*List Price :*\n'
	for (let country of await getCountryList()) {
		let data = await getProductList(country)
		txt += `- *${country.capitalize()}*, ${data[product]?.['Price'] ? data[product]?.['Price'] + '₽' : 'Unknown Price'}\n`
		if (data[product]?.['Price'] < bestPrice) {
			bestPrice = data[product]?.['Price']
			bestPriceCT = country
		}
	}
	m.reply(`${bestPriceCT ? '*The Best Price is ' + bestPrice + '₽ From ' + bestPriceCT : '' + '*'}\n\n${txt}`.trim())
	bestPriceCT = null
}
handler.tags = handler.help = ['search']
handler.command = /^5sim$/i

export default handler

async function getCountryList() {
	let { data } = await axios.get('https://5sim.net/v1/guest/countries')
	return Object.keys(data)
}

async function getProductList(country) {
	let { data } = await axios.get(`https://5sim.net/v1/guest/products/${country.toLowerCase()}/any`)
	return data
}