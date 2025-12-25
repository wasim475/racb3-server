const article = require('../model/articleSchema')

const updateArticleController = async (req, res)=>{
    const { title, content, id, pdfLink} = req.body
    const updateArticle = await article.findByIdAndUpdate({"_id":id},{"title":title, "content":content, "pdfLink":pdfLink})
    res.send({success:"Article Updated."})
}
  
module.exports = updateArticleController