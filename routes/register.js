const express = require('express');
const router = express.Router();

const registerController = require('../controllers/register');

router.get("/", registerController.getRegister)

router.post("/", registerController.postRegister)
//router.get("/", (req,res,next)=>{
//    //res.send("Registration page")
//    res.render
//    ("adduser",
//     { pageTitle: "signup",
//     maincss: true,
//    formcss: true,
//     activeRegistration: true,
//     path: "/"
//})
//})

module.exports = router;