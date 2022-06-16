const express = require('express');
const router = express.Router();

router.get("/", (req,res,next)=>{
    //res.send("homepage")
    res.render
    ("home",
     { pageTitle: "Home",
     maincss: true,
     activeHome: true,
     path: "/"
})
})

module.exports = router;