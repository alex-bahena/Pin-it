const sequelize = require('../config/connection');
const seedPages = require('./defaultPages');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPages();

  // await seedPaintings();

  process.exit(0);
};

seedAll();
