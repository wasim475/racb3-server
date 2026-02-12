const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  author: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  classType: {
    type: String,
  },

  content: {
    type: String,
    required: true,
  },

  pdfLink: {
    type: String,
    default: null,
  },

  audioPath:{
    type:String
  },

  time: {
    type: Date,
    default: Date.now,
  },
  ownerId:{
        type: mongoose.Types.ObjectId,
        ref:"user"
    }
});

module.exports = mongoose.model("note", noteSchema);
