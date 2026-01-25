const noteSchema = require("../../model/noteSchema");
const deleteNoteController = async (req, res) => {
  const { id } = req.params;
  if (id) {
    console.log(id);
    const deleteOne = await noteSchema.findByIdAndDelete({ _id: id });

    res.send({ success: "Delete Successfull" });
  }
};

module.exports = deleteNoteController;
