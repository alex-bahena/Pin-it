const router = require('express').Router();
const { User, Pages, Category } = require('../models');
//.

router.get("/", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            include: [
                {

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

        const dataBase = async () => {
            const dbPageData = await Pages.findAll({
                include: [
                    {

                        model: Category,
                        attributes: ['categories'],
                    },
                ],
            });
            const pages = dbPageData.map((pages) =>
                pages.get({ plain: true })
            );
            console.log(JSON.stringify(pages));
        }


        dataBase();

        //Categories map
        const categories = dbCategoryData.map((categories) =>
            categories.get({ plain: true }));

        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("homepage", {
            categories,
            pages,
            pageTitle: 'Pin-it',
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

router.get("/notes", (req, res) => {
    res.render("notes")
})

router.get("/email", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            where: {
                category_id: 1
            }

        });
        const dbCategoryData = await Category.findAll({
            include: [
                {

                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         include: [
        //             {

        //                 model: Category,
        //                 attributes: ['categories'],
        //             },
        //         ],
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         where: {
        //             category_id: 1
        //           }
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }



        // dataBase();

        //Categories map
        const categories = dbCategoryData.map((categories) =>
            categories.get({ plain: true }));

        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("email", {
            pages,
            categories,
            pageTitle: 'Email',
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

router.get("/social%20media", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            where: {
                category_id: 2
            }

        });
        const dbCategoryData = await Category.findAll({
            include: [
                {

                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         include: [
        //             {

        //                 model: Category,
        //                 attributes: ['categories'],
        //             },
        //         ],
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         where: {
        //             category_id: 1
        //           }
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }



        // dataBase();

        //Categories map
        const categories = dbCategoryData.map((categories) =>
            categories.get({ plain: true }));

        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("social", {
            pages,
            categories,
            pageTitle: 'Social Media',
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

router.get("/entertainment", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            where: {
                category_id: 3
            }

        });
        const dbCategoryData = await Category.findAll({
            include: [
                {

                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         include: [
        //             {

        //                 model: Category,
        //                 attributes: ['categories'],
        //             },
        //         ],
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         where: {
        //             category_id: 1
        //           }
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }



        // dataBase();

        //Categories map
        const categories = dbCategoryData.map((categories) =>
            categories.get({ plain: true }));

        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("entertainment", {
            pages,
            categories,
            pageTitle: 'Entertainment',
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

router.get("/shopping", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            where: {
                category_id: 4
            }

        });
        const dbCategoryData = await Category.findAll({
            include: [
                {

                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         include: [
        //             {

        //                 model: Category,
        //                 attributes: ['categories'],
        //             },
        //         ],
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         where: {
        //             category_id: 1
        //           }
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }



        // dataBase();

        //Categories map
        const categories = dbCategoryData.map((categories) =>
            categories.get({ plain: true }));

        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("shopping", {
            pages,
            categories,
            pageTitle: 'Shopping',
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

router.get("/productivity", async (req, res) => {
    try {
        const dbPageData = await Pages.findAll({
            where: {
                category_id: 5
            }

        });
        const dbCategoryData = await Category.findAll({
            include: [
                {

                    model: Pages,
                    attributes: ['name'],
                },
            ],
        });

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         include: [
        //             {

        //                 model: Category,
        //                 attributes: ['categories'],
        //             },
        //         ],
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }

        // const dataBase = async () => {
        //     const dbPageData = await Pages.findAll({
        //         where: {
        //             category_id: 1
        //           }
        //     });
        //     const pages = dbPageData.map((pages) =>
        //         pages.get({ plain: true })
        //     );
        //     console.log(JSON.stringify(pages));
        // }



        // dataBase();

        //Categories map
        const categories = dbCategoryData.map((categories) =>
            categories.get({ plain: true }));

        const pages = dbPageData.map((pages) =>
            pages.get({ plain: true })
        );
        console.log(categories);
        console.log(pages)
        res.render("productivity", {
            pages,
            categories,
            pageTitle: 'productivity',
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


router.post("/", async (req, res) => {

    try {
        const dbUserData = await Pages.create({
            url: "https://" + req.body.url,
            name: req.body.name,
            img: req.body.img,
            category_id: req.body.category_id
            
        });console.log(req.body)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      res.redirect('/');
    
    //console.log(req.body)
    //console.log(req.body.url)
    //res.redirect('/');
    // const name = req.body.website-name
})

// router.get("/:id", async (req, res) => {
// const id =  req.params.id
// pages.findById(Id)
// .then(pages => {
//   res.render('page ', {
//     // product: product,
//     // pageTitle: product.title,
//     // path: '/products'
//   });
// })
// .catch(err => console.log(err));
// })
document.addEventListener('click', e =>{
    const domValue = e.target.innerHTML;
    console.log(domValue);
})

// router.delete("/:id", async (req, res) => {

//     try {
//         const dbUserData = await Pages.destroy({
//             // url: "https://" + req.body.url,
//             // name: req.body.name,
//             // img: req.body.img,
//             // category_id: req.body.category_id
//             where:{
//                 id:req.params.id
//             }
            
//         });console.log(req.body)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//       res.redirect('/');
    
//     //console.log(req.body)
//     //console.log(req.body.url)
//     //res.redirect('/');
//     // const name = req.body.website-name
// })

module.exports = router;