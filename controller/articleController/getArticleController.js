const artcleSchema = require("../../model/articleSchema");
const getArticleController = async (req, res) => {
  //   const { year } = req.query;
  const { id } = req.params;
  const {classType}= req.query
  console.log(classType)
  
  if (id) {
    const article = await artcleSchema.findById(id);
    return res.send(article);
  }

  const allArticles = await artcleSchema.find({});

  if(classType && classType === "Theory"){
    const TheoryClass = allArticles.filter((article)=>article?.classType==="Theory")
    return res.send(TheoryClass)
  } 

  if(classType && classType === "Practical"){
    const practClass = allArticles.filter((article)=>article?.classType==="Practical")
    return res.send(practClass)
  } 

  return res.send(allArticles);
};

module.exports = getArticleController;
