const fs = require('fs')
const FormData = require("form-data")
const { default: axios } = require('axios')
const uploadImageController =async (req,res)=>{
    if(!req.file){
        return res.send({warn:"Please upload a photo."})
    }
    const formData = new FormData()
    formData.append("image", req.file.buffer.toString("base64") )
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      formData)

      if(response.data.data.url){
        return res.send({image:response.data.data.url})
      }else{
        return res.send({error:"Something went wrong."})
      }

}

module.exports = uploadImageController;