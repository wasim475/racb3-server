const noteSchema = require("../../model/noteSchema");

const updateNoteController = async (req, res) => {
  const { title, content, id, pdfLink, audioLink } = req.body;
  const note = await noteSchema.findByIdAndUpdate(
    { _id: id },
    { title: title, content: content, pdfLink: pdfLink, audioPath: audioLink }
  );
  res.send({ success: "note Updated." });
};

module.exports = updateNoteController;
