const articleSchema = require("../../model/articleSchema");

const articleController = async (req, res) => {
  const { author, title, classType, content, pdfLink, audioLink } = req.body;
  const articleData = new articleSchema({
    author,
    title,
    classType,
    content,
    pdfLink,
    audioPath: audioLink,
  });
  await articleData.save();
  res.send(articleData);
};

module.exports = articleController;
