const Pages = require('./Pages');
const Category = require('./Category');
const User = require('./User');
// const Profile = require('./Profile');


Category.hasMany(Pages, {
    foreignKey: 'category_id',

});

Pages.belongsTo(Category, {
    foreignKey: 'category_id',

});

module.exports = { Category, Pages, User };