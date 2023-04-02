const client_id = '4cb9e7515c9a4770ada18ae63f8ad0cd';
const client_secret = '6816a16ed559472cbf584772ef728b46';
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials"
    }),
  });

  return response.json();
};

export {
getAccessToken
}