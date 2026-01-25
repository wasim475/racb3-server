const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    fullName:{
        type:String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
     role:{
        type: String,
        enum: ["admin", "moderator", "user"],
        default: "user"
    },
    email: {
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        default:"https://i.ibb.co/RpxVCL40/d82c9c5a2621.png"
    }
    
    
   
    
})

module.exports = mongoose.model("user",userSchema)