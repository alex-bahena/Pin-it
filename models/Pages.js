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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              table: 'category',
              field: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pages',
    }
);




module.exports = Pages;
