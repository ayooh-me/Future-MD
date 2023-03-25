
import fetch from "node-fetch"
export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    let jadwalSholat = data.data.timings;
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Makassar"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            this.autosholat[id] = [
                this.reply(m.chat, "Untuk daerah\n*Makassar*\nSudah waktunya\n*" + sholat + "*Pukul\n*" + waktu + "*", null),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 60000)
            ]
        }
    }
}
export const disabled = false
