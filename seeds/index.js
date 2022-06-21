const sequelize = require('../config/connection');
const seedPages = require('./defaultPages');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPages();

  process.exit(0);
};

seedAll();
