const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  author: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  classType:{
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true,
    default:'Theory'
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
});

module.exports = mongoose.model("articleData", articleSchema);
