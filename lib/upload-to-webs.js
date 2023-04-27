import fs from "fs"
import fetch from "node-fetch"
import FormData from "form-data"

async function AnonFiles(path) {
    let data = new FormData()
    data.append("file", fs.createReadStream(path))
    let response = await fetch("https://anonfiles.com/api/upload", {
        method: "POST",
        body: data
    })
    return await response.json()
}

async function BayFiles(path) {
    let data = new FormData()
    data.append("file", fs.createReadStream(path))
    let response = await fetch("https://api.bayfiles.com/upload", {
        method: "POST",
        body: data
    })
    return await response.json()
}

async function VShare(path) {
    let data = new FormData()
    data.append("file", fs.createReadStream(path))
    let response = await fetch("https://api.vshare.is/upload", {
        method: "POST",
        body: data
    })
    return await response.json()
}

async function FileIo(path) {
    let data = new FormData()
    data.append("file", fs.createReadStream(path))
    let response = await fetch("https://file.io", {
        method: "POST",
        body: data
    })
    return await response.json()
}

export { AnonFiles,
AnonymousFiles,
BayFiles,
VShare,
FileIo
 }

