const Pages = require('./Pages');
const Category = require('./Category');
const User = require('./user');
// const Profile = require('./Profile');


Category.hasMany(Pages, {
    foreignKey: 'category_id',

});

Pages.belongsTo(Category, {
    foreignKey: 'category_id',

});

module.exports = { Pages, Category, User};