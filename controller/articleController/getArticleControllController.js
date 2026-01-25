const artcleControl = require("../../model/controlArticleModel");
const getControllArticle = async (req, res) => {
  //   const { year } = req.query;

  const article = await artcleControl.find({});
  return res.send(article);
};

module.exports = getControllArticle;
