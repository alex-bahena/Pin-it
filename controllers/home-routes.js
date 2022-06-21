const router = require('express').Router();
const { User, Pages, Category } = require('../models');
//.

router.get("/", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            include: [
                {   
                    //all: true,
                    //nested: true,
                    model: Category,
                    attributes: ['categories'],
                },
            ],
        });

        //const pages = dbPageData.map((gallery) =>
        //    gallery.get({ plain: true })
        //);
        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );

        console.log(pages)
        res.render("homepage", {
            pages,
            loggedIn: req.session.loggedIn,
            login: true,
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