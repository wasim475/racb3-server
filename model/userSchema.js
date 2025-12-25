const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    fullName:{
        type:String,
        require: true
    },
    userName:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    
   
    
})

module.exports = mongoose.model("user",userSchema)