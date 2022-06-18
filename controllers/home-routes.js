const router = require('express').Router();
const { User, Pages } = require('../models');

router.get("/", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            include: [
                {   
                    all: true,
                    nested: true,
                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });
        const pages = dbPageData.map((gallery) =>
            gallery.get({ plain: true })
        );
        res.render("homepage", {
            pages,
            loggedIn: req.session.loggedIn,
            hasPages: pages.length > 0,
            testCSS: true
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//esto es una prueba
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login")
})

module.exports = router;