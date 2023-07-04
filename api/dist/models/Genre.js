"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Genre extends sequelize_1.Model {
}
module.exports = (sequelize) => {
    Genre.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: "genre", sequelize });
};
