const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  for (let user of userData) {
  await User.create(user, {
      individualHooks: true,
      returning: true,
    });
  process.exit(0);
};

seedDatabase();
