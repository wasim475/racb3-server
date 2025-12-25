const artcleSchema = require("../model/articleSchema");
const deleteArticleController = async (req, res) => {
const { id } = req.params;
  if (id) {
    console.log(id)
     const deleteOne = await artcleSchema.findByIdAndDelete({_id: id})
          
    res.send({success:"Delete Successfull"})
  }
    
  
};

module.exports = deleteArticleController;