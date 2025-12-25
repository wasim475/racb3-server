const mongoose = require("mongoose")
const {Schema} = mongoose

const articleSchema = new Schema({
    author:{
        type:String,
        require: true
    },
    title:{
        type:String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    pdfLink:{
        type: String,
    },
    time:{
        type: Date,
         default: Date.now
    }
    
   
    
})

module.exports = mongoose.model("articleData", articleSchema)