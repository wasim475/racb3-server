const express = require("express")
const _ = express.Router()
const authRoute = require("./authRoute")
const articleRoute = require("./articleRoute")
 
_.use("/auth", authRoute)
_.use("/articles", articleRoute)
module.exports = _