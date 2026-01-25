const noteSchema = require("../../model/noteSchema")

const getAllNOtes = async (req,res)=>{
      const { id } = req.params;
      const {ownerId}= req.query;
      if (id) {
        const note = await noteSchema.findById(id);
        return res.send(note);
      }
      else if(ownerId){
        const notes = await noteSchema.find({ownerId})
       return res.send(notes)
      }
    const allnotes = await noteSchema.find({})
    res.send(allnotes)
}

module.exports = getAllNOtes;