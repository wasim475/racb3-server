const express = require("express")
const _ = express.Router()
const authRoute = require("./authRoute")
const articleRoute = require("./articleRoute")
const noteRoute = require("./noteRoute")
 
_.use("/auth", authRoute)
_.use("/articles", articleRoute)
_.use("/note",noteRoute )
module.exports = _