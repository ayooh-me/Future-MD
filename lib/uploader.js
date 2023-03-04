import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'
import cheerio from 'cheerio'

// use 
async function TelegraPh(path) {
	return new Promise( async(resolve, reject) => {
		if (!fs.existsSync(path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", path.toString("utf8"))
			const data = await axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

async function UploadFileUgu(path) {
	return new Promise( async(resolve, reject) => {
			const form = new FormData();
			form.append("files[]", path.toString("utf8"))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

async function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new FormData()
		 form.append('new-image-url', '')
		 form.append('new-image', path.toString("utf8"))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new FormData()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Created By Wudysoft",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function mp4towebp(path) {
	return new Promise((resolve, reject) => {
		 const form = new FormData()
		 form.append('new-image-url', '')
		 form.append('new-image', path.toString("utf8"))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/video-to-webp',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new FormData()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/video-to-webp/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Created By Wudysoft",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function gif2mp4(path) {
	return new Promise((resolve, reject) => {
		 const form = new FormData()
		 form.append('new-image-url', '')
		 form.append('new-image', path.toString("utf8"))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/gif-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new FormData()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/gif-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Created By Wudysoft",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

export { TelegraPh, UploadFileUgu, webp2mp4File, mp4towebp, gif2mp4 }
