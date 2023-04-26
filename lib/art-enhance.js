import fetch from "node-fetch"
import FormData from "form-data"
import fs from "fs"
import crypto from "crypto"
import {
    UploadToIBB
} from "./upload-to-ibb.js"
import sharp from "sharp"


async function ArtEnhance(url, ibbkey) {
    //Generate a random path/name using UUID
    let filePath = "../images" + crypto.randomUUID() + ".png";
    let attachment;
    let Response;

    //Downloads the image from the provided url into the specified path
    const image = await fetch(url);
    const buffer = await image.buffer();
    fs.writeFileSync(filePath, buffer);

    await sharp(filePath)
        .flatten({
            background: {
                r: 255,
                g: 255,
                b: 255
            }
        })
        .toFile(filePath.replace(".png", "X.jpg"));
    fs.unlinkSync(filePath);
    filePath = filePath.replace(".png", "X.jpg");
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));
    form.append("model_select", "anime6B");
    form.append("outscale", "2");

    let IBB
    await fetch("https://arc.tencent.com/img_restore", {
            method: "POST",
            body: form,
        })
        .then((res) => res.json())
        .then((json) => {
            let url = json.data[0].image_url

            IBB = await UploadToIBB(url, 600, ibbkey)
            fs.unlinkSync(filePath);
        })

        .catch((err) => {
            try {
                fs.unlinkSync(filePath);
            } catch (err) {
                //pass
            }
            console.log(err)
        });

    return IBB;
};

export {
    ArtEnhance
}