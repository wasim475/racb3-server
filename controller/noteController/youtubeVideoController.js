const fs = require("fs");
const { google } = require("googleapis");
const oauth2Client = require('../utility/youtubeClients');
const { Readable } = require("stream");
;



const youtube = google.youtube({
  version: "v3",
  auth: oauth2Client,
});

// একবার ব্রাউজারে login করতে হবে
exports.authYoutube = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube.upload"],
    prompt: "consent",
  });
  res.redirect(url);
};

// callback
exports.oauthCallback = async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);

  oauth2Client.setCredentials(tokens);
  res.send("YouTube login success");
};


exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No video file" });

    //ensure valid token
    await oauth2Client.getAccessToken();

    console.log("CREDS:", oauth2Client.credentials);

    const stream = Readable.from(req.file.buffer);

    const response = await youtube.videos.insert({
      part: "snippet,status",
      requestBody: {
        snippet: {
          title: req.body.title || req.file.originalname,
          description: "Node.js YouTube upload",
        },
        status: { privacyStatus: "unlisted" },
      },
      media: { body: stream },
    });

    res.json({
      videoId: response.data.id,
      embedUrl: `https://www.youtube.com/embed/${response.data.id}`,
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


