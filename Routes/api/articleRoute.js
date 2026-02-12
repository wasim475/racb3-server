const express = require("express");
const _ = express.Router();
const articleController = require('../../controller/articleController/postArticleController');
const getAnnouncementDataController = require('../../controller/utility/getAnnouncementController');
const updateAnnouncementController = require('../../controller/utility/announcementController');
const getArticleController = require('../../controller/articleController/getArticleController');
const deleteArticleController = require('../../controller/articleController/deleteArticleController');
const updateArticleController = require('../../controller/articleController/updateArticleController');
const articleControlController = require('../../controller/articleController/articleControllController');
const getControllArticle = require('../../controller/articleController/getArticleControllController');
const searchController = require('../../controller/articleController/SearchController');


_.post("/article", articleController);
_.get("/articles", getArticleController);
_.get("/articles/:id", getArticleController);
_.delete("/delete-article/:id", deleteArticleController);
_.put("/update-article/:id", updateArticleController);
_.put("/controll-article", articleControlController);
_.get("/controll-article", getControllArticle);
_.put("/announcement", updateAnnouncementController);
_.get("/announcement", getAnnouncementDataController);
_.get("/search", searchController);

module.exports = _;
