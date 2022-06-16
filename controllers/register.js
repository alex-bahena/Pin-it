const User = require('../models/user');

exports.getRegister = (req, res, next) => {
  //res.send("Registration page")
  res.render
    ("adduser",
      {
        pageTitle: "signup",
        maincss: true,
        formcss: true,
        activeRegistration: true,
        path: "/"
      })
};

exports.postRegister = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  User.create({
    username: username,
    email: email,
    password: password

  })



    .then(result => {
      console.log("created user");
      res.redirect("/")
    }).catch(err => {
      console.log(err);
    })
};