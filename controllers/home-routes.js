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
        const dbCategoryData = await Category.findAll({
            include: [
                {   
            
                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });

        //Categories map
    
        const categories = dbCategoryData.map((categories) => 
        categories.get({plain: true}));

        //Pages map
        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("homepage", {
            categories,
            pages,
            loggedIn: req.session.loggedIn,
            login: true,
            hasPages: pages.length > 0,
            hasCategories: categories.length > 0,
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