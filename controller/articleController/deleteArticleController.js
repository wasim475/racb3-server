const notes = require("../../model/noteSchema");
const deleteArticleController = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const deleteOne = await notes.findByIdAndDelete({ _id: id });

    res.send({ success: "Delete Successfull" });
  }
};

module.exports = deleteArticleController;
