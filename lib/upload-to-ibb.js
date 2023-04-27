import fetch from "node-fetch"

async function UploadToIBB(url, expiration, ibbkey) {
//Key c93b7d1d3f7a145263d4651c46ba55e4
    let data = await fetch("https://api.imgbb.com/1/upload?key=" + ibbkey + "&expiration=" + expiration + "&image=" + url).then(v => v.json())
    return data
}

export {
    UploadToIBB
}