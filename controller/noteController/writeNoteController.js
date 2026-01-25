const noteSchema = require("../../model/noteSchema");

const WriteNoteController = async (req, res) => {
  const { author, title, content, pdfLink, audioLink, ownerId } = req.body;

  if(!title){
   return res.send({warn:"টাইটেল ফিল্ড খালি রাখা যাবে না।"})
  }
  else if(!content){
    return res.send({warn:"কন্টেন্ট ফিল্ড খালি রাখা যাবে না।"})
  }
  const note = new noteSchema({
    author,
    title,
    content,
    pdfLink,
    audioPath: audioLink,
    ownerId
  });
  await note.save();
  res.send({success: "your published", note:note});
};

module.exports = WriteNoteController;
