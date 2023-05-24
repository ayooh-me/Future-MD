import fetch from "node-fetch"
import cheerio from "cheerio"

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
  const url = 'https://wabetainfo.com';
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const header = $('header.entry-header');
    const entryMeta = header.find('.entry-meta');
    const entryDate = entryMeta.find('time.entry-date').attr('datetime');
    const updatedDate = entryMeta.find('time.updated').attr('datetime');
    const iosLink = entryMeta.find('a[href*="/ios/"]').attr('href');

    const entryContent = $('.entry-content');
    const postedOnLink = entryContent.find('a.more-link').attr('href');
    const content = entryContent.find('p').first().text();

    const cleanPostedOnLink = postedOnLink ? postedOnLink.split('#')[0] : '';

    const faqResponse = await fetch(cleanPostedOnLink);
    const faqHtml = await faqResponse.text();
    const faq$ = cheerio.load(faqHtml);

    const faqTable = faq$('table.styled-table');
    const faqRows = faqTable.find('tbody tr');
    const faqList = faqRows.map((_, row) => {
      const question = faq$(row).find('td').eq(0).text();
      const answer = faq$(row).find('td').eq(1).text();
      return { question, answer };
    }).get();

    const ogImageUrl = faq$('meta[property="og:image"]').attr('content');

    const result = {
      url,
      postedOnLink: cleanPostedOnLink,
      published: entryDate,
      updated: updatedDate,
      iosLink,
      content,
      faq: faqList,
      ogImage: ogImageUrl
    };

    return result;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function updateData() {
  const result = await getData();
  if (result) {
    const output = [`*[ NEW UPDATED ]*\n\n`,
`*Update:*\n${result.updated}\n`,
`*Desc:*\n${result.content}\n`,
`*Link:*\n${result.postedOnLink}\n\n`];
    result.faq.forEach((item, index )=> {
      output.push(`${index + 1}. ${item.question}\n${item.answer}\n`);
    });
    let captions = output.join('\n');
    let images = result.ogImage;
    return { caption: captions,
    image: images
    	}
  } else {
    return null; // return null jika data tidak berubah
  }
}