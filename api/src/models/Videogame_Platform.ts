import { Optional, Model, DataTypes } from "sequelize";
import sequelize from "../db/config";
import { Videogame } from "./Videogame";
import { Platform } from "./Platform";

interface VideogamePlatformAttributes {
    id: string;
    VideogameId: string;
    PlatformId: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface VideogamePlatformInput extends Optional <VideogamePlatformAttributes, "id"> {}
export interface VideogamePlatformOutput extends Required <VideogamePlatformAttributes> {}

export class VideogamePlatform extends Model <VideogamePlatformAttributes, VideogamePlatformInput> implements VideogamePlatformAttributes {
    declare id: string;
    declare VideogameId: string;
    declare PlatformId: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date;
}

VideogamePlatform.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    VideogameId: {
        type: DataTypes.UUID,
        references: {
            model: Videogame, key: "id"
        }
    },
    PlatformId: {
        type: DataTypes.UUID,
        references: {
            model: Platform, key: "id"
        }
    }
}, { sequelize, timestamps: true });

Videogame.belongsToMany(Platform, { through: VideogamePlatform, foreignKey: "VideogameId", as: "platforms" });
Platform.belongsToMany(Videogame, { through: VideogamePlatform, foreignKey: "PlatformId", as: "platforms" });