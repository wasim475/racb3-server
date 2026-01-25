const userSchema = require("../../model/userSchema");

const loginWithGoogleController = async (req, res) => {
  const { fullName, userName, password, email } = req.body;
  //   console.log(fullName, userName,password, email)
  const existUser = await userSchema.find({
    $or: [{ email }],
  });

  if (existUser[0]) {
    if (existUser[0].email === email) {
      return res.send({user: {name:existUser[0].fullName, role:existUser[0].role,userName:existUser[0].userName,id:existUser[0]._id, passwordServer:existUser[0].password, profilePic: existUser[0].profilePic}});
    }
  }else {
      const newUser = new userSchema({
        fullName,
        userName,
        password,
        email,
      });
      await newUser.save();
      console.log(newUser);
      res.send({ user: {name:newUser.fullName, role:newUser.role,userName:newUser.userName,id:newUser._id, passwordServer:newUser.password, profilePic: newUser.profilePic}});
      console.log(newUser)
    }
};

module.exports = loginWithGoogleController;
