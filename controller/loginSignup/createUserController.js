const userSchema = require("../../model/userSchema");

const createUserController = async (req, res) => {
  const { fullName, usersName, userPassword, userEmail } = req.body;
  const existUser = await userSchema.find({
    $or: [{ email: userEmail }, { userName: usersName }],
  });
  if (existUser[0]) {
    if (existUser[0].email === userEmail) {
      return res.send({ warning: "এই ইমেইলটি অলরেডি ব্যবহৃত হয়েছে।" });
    }
    if (existUser[0].userName === usersName) {
      return res.send({ warning: "ইউজার নেমটি অলরেডি ব্যবহৃত হয়েছে।" });
    }
  } else if (!existUser[0]) {
    if (fullName.length < 3) {
      return res.send({ warning: "ফুলনেম কমপক্ষে ৩ অক্ষরের হতে হবে।" });
    } else if (userPassword.length < 6) {
      return res.send({ warning: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।" });
    } else if (usersName.length < 5) {
      return res.send({ warning: "ইউজারনেম কমপক্ষে ৫ অক্ষরের হতে হবে।" });
    } else {
      const newUser = new userSchema({
        fullName,
        userName: usersName,
        password: userPassword,
        email: userEmail,
      });
      await newUser.save();
      console.log(newUser);
      console.log("blocker vetore achi");
      res.send({ success: "একাউন্ট সফলভাবে তৈরি হয়েছে।" });
    }
  }
};

module.exports = createUserController;
