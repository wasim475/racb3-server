const mongoose = require("mongoose");

const articleSpeakSchema = new mongoose.Schema({
  title: String,
  content: String, 
});

module.exports = mongoose.model("Article", articleSpeakSchema);
