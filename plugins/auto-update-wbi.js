import fetch from "node-fetch"

export async function before(m) {
setInterval(async () => {
  try {
    let outputs = await updateData();
    await this.sendFile(m.chat, outputs.image, '', outputs.caption, m )
  } catch (e) {
    console.log(e);
  }
}, 2*60*1000) // 2 minutes 10*60*1000
}
export const disabled = false

let previousDate = "";
async function getData() {
  const response = await fetch('https://darkalphaxteam-official-api.cyclic.app/api/search/wabetalatest?apikey=prabath');
  const data = await response.json();
  const currentDate = data.result.date;
  if (previousDate !== currentDate) {
    previousDate = currentDate;
    return data.result;
  } else {
    return null; // return null jika data tidak berubah
  }
}

async function updateData() {
  const result = await getData();
  if (result) {
    const output = [`*[ NEW UPDATED ]*\n\n`, `*Date:*\n${result.date}\n`, `*Desc:*\n${result.fulldesc}\n`, `*Playform:*\n${result.platform}\n`, `*Url:*\n${result.url}\n`, `*Image:*\n${result.image}\n\n`];
    result.faq.forEach((item, index )=> {
      output.push(`${index + 1}. ${item.question}\n${item.answer}\n`);
    });
    let captions = output.join('\n');
    let images = result.image;
    return { caption: captions,
    image: images
    	}
  } else {
    return null; // return null jika data tidak berubah
  }
}