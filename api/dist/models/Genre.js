"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
class Genre extends sequelize_1.Model {
}
exports.Genre = Genre;
Genre.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: config_1.default, timestamps: true, paranoid: false });
