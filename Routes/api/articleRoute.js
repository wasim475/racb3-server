const express = require("express")
const _ = express.Router()
const articleController = require('../../controller/postArticleController')
const getArticleController = require('../../controller/getArticleController')
const deleteArticleController = require('../../controller/deleteArticleController')
const updateArticleController = require('../../controller/updateArticleController')
const articleControlController = require('../../controller/articleControllController')
const getControllArticle = require('../../controller/getArticleControllController')
const updateAnnouncementController = require('../../controller/announcementController')
const getAnnouncementDataController = require('../../controller/getAnnouncementController')



   
_.post("/article", articleController)
_.get("/articles", getArticleController)
_.get("/articles/:id", getArticleController)
_.delete("/delete-article/:id", deleteArticleController)
_.put("/update-article/:id", updateArticleController)
_.put('/controll-article',articleControlController)
_.get('/controll-article',getControllArticle)
_.put('/announcement',updateAnnouncementController)
_.get('/announcement',getAnnouncementDataController)


   
module.exports = _