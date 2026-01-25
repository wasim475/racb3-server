
const userSchema = require('../../model/userSchema')

const loginController = async (req, res)=>{
    const {inputUserName, password} = req.body
    const CurrentUser = await userSchema.findOne({userName: inputUserName})
    console.log(CurrentUser)
    // res.send(CurrentUser)
    if(!CurrentUser){
        return res.send({error:"ইউজারনেম অথবা পাসওয়ার্ড ভুল হয়েছে..."})        
    }
    const userEmail = CurrentUser?.userName
    const userPassword = CurrentUser?.password 
    if(userEmail===inputUserName && userPassword===password){
        res.send({success: "Login Successfull", user: {name:CurrentUser.fullName, role:CurrentUser.role,userName:CurrentUser.userName,id:CurrentUser._id, passwordServer:CurrentUser.password, profilePic: CurrentUser.profilePic}})
    }else{
        res.send({error:"ইউজারনেম অথবা পাসওয়ার্ড ভুল হয়েছে..."})    
    }   
           
}     
     
module.exports = loginController