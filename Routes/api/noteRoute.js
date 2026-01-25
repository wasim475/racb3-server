const express = require("express");
const _ = express.Router();
const updateNoteController = require("../../controller/noteController/updateNoteController");
const WriteNoteController = require("../../controller/noteController/writeNoteController");
const deleteArticleController = require('../../controller/articleController/deleteArticleController');
const getAllNOtes = require('../../controller/noteController/getAllNotesController');
const uploadImageController = require('../../controller/noteController/uploadImageController');
const upload = require('../../middleware/multer.config');

_.post("/write-note", WriteNoteController);
_.post("/upload-image",  upload.single("image"), uploadImageController);
_.get("/get-all-notes", getAllNOtes);
_.get("/get-all-notes/:id", getAllNOtes);
_.get("/notes/:id", getAllNOtes);
_.put("/update-note/:id", updateNoteController);
_.delete("/delete-note/:id", deleteArticleController);

module.exports = _;
