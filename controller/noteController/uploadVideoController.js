const fs = require("fs");
const ApiVideoClient = require("@api.video/nodejs-client");

const client = new ApiVideoClient({
  apiKey: process.env.VIDEO_API_KEY,
});

const uploadVideoController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ warn: "Please upload a video." });
    }

    //  create video
    const video = await client.videos.create({
      title: req.file.originalname,
    });

    //  upload using FILE PATH (not object)
    await client.videos.upload(video.videoId, req.file.path);

    return res.json({
      videoId: video.videoId,
      embedUrl: `https://embed.api.video/vod/${video.videoId}`,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Video upload failed" });
  }
};

module.exports = uploadVideoController;
