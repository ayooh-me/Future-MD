import fetch from "node-fetch"
import FormData from "form-data"

async function UploadToIBB(url, expiration, ibbkey) {
    const form = new FormData();
    form.append("image", url);
    const response = await (await fetch(`https://api.imgbb.com/1/upload?key=${ibbkey}&expiration=${expiration}`, {
        method: "POST",
        body: form,
    })).json()
    return response
}

export {
    UploadToIBB
}