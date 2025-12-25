const mongoose = require("mongoose")
const {Schema} = mongoose

const controllArticleSchema = new Schema({
    showData:{
        type:Boolean,
        require: true,
        default:true
    },
   
    
   
    
})

module.exports = mongoose.model("articleControl",controllArticleSchema)