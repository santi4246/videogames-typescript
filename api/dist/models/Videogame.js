"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Videogame extends sequelize_1.Model {
}
module.exports = (sequelize) => {
    Videogame.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        launch: {
            type: sequelize_1.DataTypes.DATEONLY,
            defaultValue: sequelize_1.DataTypes.NOW
        },
        rating: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: "videogame", sequelize });
};
