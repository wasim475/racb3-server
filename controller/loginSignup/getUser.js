const users = require("../../model/userSchema.js")

const getUser = async(req,res)=>{
    const {id}= req.params
    if(!id){
        return res.send({error:"User Not Found"})
    }

    const user = await users.findById({_id:id})
    res.send(user)

    console.log(user)
}

module.exports = getUser