"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamePlatform = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Videogame_1 = require("./Videogame");
const Platform_1 = require("./Platform");
class VideogamePlatform extends sequelize_1.Model {
}
exports.VideogamePlatform = VideogamePlatform;
VideogamePlatform.init({
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
    PlatformId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Platform_1.Platform, key: "id"
        }
    }
}, { sequelize: config_1.default, timestamps: true });
Videogame_1.Videogame.belongsToMany(Platform_1.Platform, { through: VideogamePlatform, foreignKey: "VideogameId", as: "platforms" });
Platform_1.Platform.belongsToMany(Videogame_1.Videogame, { through: VideogamePlatform, foreignKey: "PlatformId", as: "platforms" });
