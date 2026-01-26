const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://racb3-server.vercel.app/api/v1/note/oauth2callback"
);

if (process.env.YOUTUBE_TOKENS) {
  oauth2Client.setCredentials(JSON.parse(process.env.YOUTUBE_TOKENS));
}

module.exports = oauth2Client;
