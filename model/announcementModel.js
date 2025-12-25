const mongoose = require("mongoose")
const {Schema} = mongoose

const announceSchema = new Schema({
    message:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model("announcement", announceSchema)