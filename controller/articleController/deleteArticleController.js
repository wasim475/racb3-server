const articles = require("../../model/articleSchema");
const deleteArticleController = async (req, res) => {
  const { id } = req.params;

  
  if (id) {
    const deleteOne = await articles.findByIdAndDelete({ _id: id });

    res.send({ success: "Delete Successfull" });
  }
};

module.exports = deleteArticleController;
