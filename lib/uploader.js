import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'
import cheerio from 'cheerio'
import { FormData, Blob } from 'formdata-node';
const form = new FormData();

// use 
async function TelegraPh(path) {
	return new Promise( async(resolve, reject) => {
		if (!fs.existsSync(path)) return reject(new Error("File not Found"))
		try {
			form.append("file", new Blob([path.toArrayBuffer()]))
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
			form.append("files[]", new Blob([path.toArrayBuffer()]))
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
		 form.append('new-image-url', '')
		 form.append('new-image', new Blob([path.toArrayBuffer()]))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  form.append('file', file)
			  form.append('convert', "Convert!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: form,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${form._boundary}`
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
		 form.append('new-image-url', '')
		 form.append('new-image', new Blob([path.toArrayBuffer()]))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/video-to-webp',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  form.append('file', file)
			  form.append('convert', "Convert!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/video-to-webp/' + file,
				   data: form,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${form._boundary}`
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
		 form.append('new-image-url', '')
		 form.append('new-image', new Blob([path.toArrayBuffer()]))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/gif-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  form.append('file', file)
			  form.append('convert', "Convert!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/gif-to-mp4/' + file,
				   data: form,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${form._boundary}`
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
