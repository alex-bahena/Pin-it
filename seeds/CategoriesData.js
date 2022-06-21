const { Category }   = require('../models')

const categoryData = [
    {
        categories: 'email'
    },
    {
        categories: 'social media'
    },
    {
        categories: 'entertainment'
    },
    {
        categories: 'shopping'
    },
    {
        categories: 'productivity'
    },
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;