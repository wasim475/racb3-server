const artcleSchema = require("../model/articleSchema");
const getArticleController = async (req, res) => {
//   const { year } = req.query;
const { id } = req.params;
  if (id) {
    const article = await artcleSchema.findById(id);
    return res.send(article);
  }
    

  const allArticles = await artcleSchema.find({});

      return res.send(allArticles);
  
};

module.exports = getArticleController;