const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pages extends Model { }

Pages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pages',
    }
);

module.exports = Pages;
