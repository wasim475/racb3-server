const { google } = require("googleapis");
const oauth2Client = require("../utility/youtubeClients");
const axios = require('axios');
const cloudinary = require('../utility/cloudinary.config');

const youtube = google.youtube({
  version: "v3",
  auth: oauth2Client,
});

// শুধু আপনি একবার ব্যবহার করবেন
exports.authYoutube = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube.upload"],
    prompt: "consent",
  });
  res.redirect(url);
};

// শুধু নিজে একবার ব্যবহার করবো
exports.oauthCallback = async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);

  console.log("TOKENS:", tokens); // একবার কপি করবেন (refresh_token)
  oauth2Client.setCredentials(tokens);

  res.send("YouTube login success");
};

// ইউজার ভিডিও আপলোড করবে (Cloudinary URL দিয়ে)
exports.uploadVideo = async (req, res) => {
  const { videoUrl,publicId, title, description } = req.body;
  try {
    if (!videoUrl) {
      return res.status(400).json({ error: "No video URL provided" });
    }

    // token refresh ensure
    await oauth2Client.getAccessToken();

     // Cloudinary URL to stream 
    const videoResponse = await axios.get(videoUrl, {
      responseType: "stream",
    });

    const stream = videoResponse.data;

    const response = await youtube.videos.insert({
      part: "snippet,status",
      requestBody: {
        snippet: {
          title: title || "Uploaded from site",
          description: description || "Uploaded by user",
        },
        status: {
          privacyStatus: "unlisted", // বা public
        },
      },
      media: {
        body: stream,
      },
    });

    await cloudinary.uploader.destroy(publicId, {
      resource_type: "video"
    });

    return res.json({
      success: "Video uploaded successfully",
      videoId: response.data.id,
      embedUrl: `https://www.youtube.com/embed/${response.data.id}`,
    });
  } catch (err) {
     await cloudinary.uploader.destroy(publicId, {
      resource_type: "video"
    });
    return res.send({ error: "ইউটিউবের ভিডিও আপলোড করার লিমিট শেষ হয়ে গেছে। অনুগ্রহ করে আবার কাল চেষ্টা করেন।" });
    
  }
};
