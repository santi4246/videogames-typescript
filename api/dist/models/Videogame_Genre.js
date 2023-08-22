"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogameGenre = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Videogame_1 = require("./Videogame");
const Genre_1 = require("./Genre");
class VideogameGenre extends sequelize_1.Model {
}
exports.VideogameGenre = VideogameGenre;
VideogameGenre.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    VideogameId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Videogame_1.Videogame, key: "id"
        }
    },
    GenreId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Genre_1.Genre, key: "id"
        }
    }
}, { sequelize: config_1.default, timestamps: true });
Videogame_1.Videogame.belongsToMany(Genre_1.Genre, { through: VideogameGenre, foreignKey: "VideogameId", as: "genres" });
Genre_1.Genre.belongsToMany(Videogame_1.Videogame, { through: VideogameGenre, foreignKey: "GenreId", as: "games" });
