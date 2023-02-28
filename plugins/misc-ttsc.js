import { randomUUID } from "crypto"
let fetchear; 
import("node-fetch").then(function({default: fetch}) {
  fetchear = fetch
})
const fakeYouToken = "187b56b2217ac09dbe6ae610f19b35dfbc53cdd5857f818f03b45d048287b4bc"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .ttsc hello world\n<command> <tex>"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  let three = urut[2]
  if (command == "ttsc") {
  let lis = await(await fetch("https://api.fakeyou.com/tts/list")).json()
  let listSections = []
	Object.values(lis.models).map((v, index) => {
	listSections.push(["Model [ " + ++index + " ]", [
          [v.title, usedPrefix + command + "get " + v.model_token + "|" + text, "➥"]
        ]])
	})
	return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
  }
  if (command == "ttscget") {
  let res = await requestSpeech(one, two)
  await conn.sendFile(m.chat, res, "", "", fakes, null, adReply)
  }
}
handler.help = ["ttsc"]
handler.tags = ["misc"]
handler.command = /^(ttsc|ttscget)$/i
export default handler

/*
  Name: fetchPatiently(String url, Object params): Object
  Description: Wrapper for node-fetch which retries upon 408 and 502 error codes
  Returns: HTTP response
*/
async function fetchPatiently(url, params) {
	let response = await fetchear(url, params);
	while (response.status === 408 || response.status === 502) {
		// Wait three seconds between each new request
		await new Promise(res => setTimeout(res, 3000));
		response = await fetchear(url, params);
	}
	return response;
}

/*
  Name: poll(String token): String
  Description: Polls until a speech request is complete
  Returns: URL on success, error string on failure
*/
function poll(token) {
	return new Promise(async(resolve, reject) => {

		// Wait one second between each poll request
		await new Promise(res => setTimeout(res, 1000));

		// Retrieve status of current speech request
		const response = await fetchPatiently("https://api.fakeyou.com/tts/job/" + token, {
			method: "GET",
			headers: {
				"Authorization": fakeYouToken,
				"Accept": "application/json"
			}
		}).catch(error => {
			reject(`HTTP error! ${error.name}`);
			console.error(error);
		});
		if (!response.ok) return;

		const json = await response.json().catch(error => {
			reject("Failed to parse poll JSON!");
			console.error(error);
		});
		if (!json) return;

		if (!json.success) {
			reject(`Failed polling! ${json.error_reason}`);
			console.error(json);
			return;
		}

		switch (json.state.status) {
			case "pending":
			case "started":
			case "attempt_failed": {
				// Continue polling until success
				await poll(token).then(resolve).catch(reject);
				return;
			}
			case "complete_success": {
				// Success, return audio URL
				resolve("https://storage.googleapis.com/vocodes-public" + json.state.maybe_public_bucket_wav_audio_path);
				return;
			}
			case "complete_failure":
			case "dead":
			default: {
				// Failure, stop polling
				reject(`Failed polling! ${json.state.status}`);
				console.error(json);
				return;
			}
		}
	});
}

/*
  Name: requestSpeech(String voice, String message): String
  Description: Requests speech and polls until job is complete
  Returns: URL on success, error string on failure
*/
async function requestSpeech(voice, message) {
	return new Promise(async(resolve, reject) => {

		// Request generation of speech
		const response = await fetchPatiently("https://api.fakeyou.com/tts/inference", {
			method: "POST",
			body: JSON.stringify({
				tts_model_token: voice,
				uuid_idempotency_token: randomUUID(),
				inference_text: message
			}),
			headers: {
				"Authorization": fakeYouToken,
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		}).catch(error => {
			reject(`HTTP error! ${error.name}`);
			console.error(error);
		});
		if (!response.ok) return;

		const json = await response.json().catch(error => {
			reject("Failed to parse request JSON!");
			console.error(error);
		});
		if (!json) return;

		if (!json.success) {
			reject(`Failed voice request! ${json.error_reason}`);
			console.error(json);
			return;
		}

		// Poll until request has been fulfilled
		await poll(json.inference_job_token).then(resolve).catch(reject);
	});
};
