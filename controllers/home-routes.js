const router = require('express').Router();
const { User, Pages} = require('../models');

router.get("/", async (req, res) => {
    res.render("homepage", {
        loggedIn: req.session.loggedIn,
    });
});

//esto es una prueba
router.get("/login", (req, res)=> {
    if(req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login")
})

module.exports = router;