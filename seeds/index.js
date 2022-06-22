const sequelize = require('../config/connection');
const seedPages = require('./PagesData');
const seedCategories = require('./CategoriesData');


const seedAll = async () => {
  //We leave the sync method empty cus we don't want
  //sequilize to delete the data in our database.
  await sequelize.sync({force: false});
  //The order of ejecution is extremly important due the ForeingKeys
  await seedCategories();
  await seedPages();

  process.exit(0);
};

seedAll();
