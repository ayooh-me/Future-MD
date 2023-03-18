/* Recode By Wudysoft */
import fetch from "node-fetch"
import axios from "axios"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
if (!text) throw "*ex:* .mg direction usa|amerika"
    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]
    let four = urut[3]
    
    if (args[0] == 'direction') {
    let res = await direction(one, two)
    throw res
    }
    if (args[0] == 'geocode') {
    let res = await geocode(one, two)
    throw res
    }
    if (args[0] == 'distancematrix') {
    let res = await distancematrix(one, two, three, four)
    throw res
    }
    if (args[0] == 'fpftext') {
    let res = await fpftext(one, two, three)
    throw res
    }
    if (args[0] == 'acomplete') {
    let res = await acomplete(one, two)
    throw res
    }

}
handler.help = ["mg"]
handler.tags = ["info"]
handler.command = ["mg"]
export default handler

async function direction(ori, des) {
    let result = await axios("https://maps.googleapis.com/maps/api/directions/json?origin=" + ori + "&destination=" + des + "&key=AIzaSyC53_pp_QYvLdHd-b8ZcfhaVNe5s6EprEU")
    return result.data
}

async function geocode(lat, lng) {
    let result = await axios("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyC53_pp_QYvLdHd-b8ZcfhaVNe5s6EprEU")
    return result.data
}

async function distancematrix(unit, oria, orib, des) {
    let result = await axios("https://maps.googleapis.com/maps/api/distancematrix/json?units=" + unit + "&origins=" + oria + "," + orib + "&destinations=" + des + "&key=AIzaSyC53_pp_QYvLdHd-b8ZcfhaVNe5s6EprEU")
    return result.data
}

async function fpftext(input, type, field) {
    let result = await axios("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + input + "&inputtype=" + type + "&fields=" + field + "&key=AIzaSyC53_pp_QYvLdHd-b8ZcfhaVNe5s6EprEU")
    return result.data
}

async function acomplete(input, type) {
    let result = await axios("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + input + "&types=" + type + "&key=AIzaSyC53_pp_QYvLdHd-b8ZcfhaVNe5s6EprEU")
    return result.data
}