import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'
import cheerio from 'cheerio'
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';
import { tmpdir } from 'os'
import path from 'path'
import crypto from "crypto"
const form = new FormData();
const tmp = path.join(
    tmpdir(),
    `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}`
);

function bufferToPath(buffer) {
    if (!Buffer.isBuffer(buffer)) return reject('do not a buffer')
    return new Promise (async(resolve, reject) => {
const cek_file = await fileTypeFromBuffer(buffer)
fs.writeFile(tmp+`.${cek_file.ext}`, buffer, (e, f) => {
    if (e) return reject(e)
    resolve(fs.createReadStream(tmp+`.${cek_file.ext}`))
})
    })
}

// use 
async function TelegraPh(path) {
return new Promise (async(resolve, reject) => {
		try {
			form.append("file", await Buffer.isBuffer(path) ? await bufferToPath(path) : fs.createReadStream(path) )
			const data = await axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			resolve("https://telegra.ph" + data.data[0].src)
		} catch (e) {
			return reject(e)
		}
		})
}

async function UploadFileUgu(path) {
return new Promise (async(resolve, reject) => {
			form.append("files[]", await Buffer.isBuffer(path) ? await bufferToPath(path) : fs.createReadStream(path) )
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
			})
			})
}

function UpHardianto(path) {
    return new Promise(async(resolve, reject) => {
        form.append('recfile', await Buffer.isBuffer(path) ? await bufferToPath(path) : fs.createReadStream(path))
        await axios(`https://uploader.hardianto.xyz/upload`,{
            method: 'POST',
            data: form,
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": `multipart/form-data; boundary=${form._boundary}`
            }
        }).then(({ data }) => {
            console.log(data.file)
            resolve(data.file)

    }).catch(e => console.log(e))
    })
}

export { TelegraPh, UploadFileUgu, UpHardianto }
