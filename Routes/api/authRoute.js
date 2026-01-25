const express = require("express");
const _ = express.Router();
const loginController = require('../../controller/loginSignup/loginController');
const createUserController = require('../../controller/loginSignup/createUserController');
const getUser = require('../../controller/loginSignup/getUser');
const changeProfileInfoController = require('../../controller/loginSignup/changeFrofileInfoController');
const upload = require('../../middleware/multer.config');
const loginWithGoogleController = require('../../controller/loginSignup/loginWithGoogleController');

// const registrationcontroller = require('../../controller/authController/registrationController')
// const optController = require('../../controller/authController/otpController')
// const loginController = require('../../controller/authController/loginController')
// const forgotPasswordController = require('../../controller/authController/forgotPasswordController')
// const resetPassController = require('../../controller/authController/resetPassController')
// const allUsersController = require('../../controller/authController/allUsersController')

_.get("/registration", (req, res) => {
  res.send("Registration");
});

// _.post("/registration", registrationcontroller)
// _.post("/otp", optController)
_.post("/login", loginController);
_.post("/google-login",loginWithGoogleController);
_.post("/sign-up", createUserController);
_.post("/change-profile-info/:id",  upload.single("image"), changeProfileInfoController);
// _.post("/forgetpassword", forgotPasswordController)
// _.post("/resetpassword", resetPassController)
_.get("/users/:id", getUser)
_.get("/users", getUser)

module.exports = _;
