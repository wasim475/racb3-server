const users = require("../../model/userSchema")
const FormData = require("form-data")
const { default: axios } = require('axios')
const changeProfileInfoController = async (req,res)=>{
    const {id}= req.params
    if(!req.file){
        return res.send({warn:"Please upload a photo."})
    }
    const formData = new FormData()
    formData.append("image", req.file.buffer.toString("base64") )
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      formData)

      if(response.data.data.url){
        const user = await users.findByIdAndUpdate({_id: id},{profilePic:response.data.data.url},  { new: true })
        return res.send({success:"profile photo uploaded.",user:{name:user.fullName, role:user.role,userName:user.userName,id:user._id, profilePic: user.profilePic}})
      }else{
        return res.send({error:"Something went wrong."})
      }
}

module.exports = changeProfileInfoController