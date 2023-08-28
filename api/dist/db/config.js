"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
const DB_URL = process.env.DB_URL;
const sequelize = new sequelize_1.Sequelize(DB_URL, {
    logging: false,
    native: false
});
exports.default = sequelize;
