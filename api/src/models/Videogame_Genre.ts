import { Optional, Model, DataTypes } from "sequelize";
import sequelize from "../db/config";
import { Videogame } from "./Videogame";
import { Genre } from "./Genre";

interface VideogameGenreAttributes {
    id: string;
    VideogameId: string;
    GenreId: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface VideogameGenreInput extends Optional <VideogameGenreAttributes, "id"> {}
export interface VideogameGenreOutput extends Required <VideogameGenreAttributes> {}

export class VideogameGenre extends Model <VideogameGenreAttributes, VideogameGenreInput> implements VideogameGenreAttributes {
    declare id: string;
    declare VideogameId: string;
    declare GenreId: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date;
}

VideogameGenre.init({
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
    GenreId: {
        type: DataTypes.UUID,
        references: {
            model: Genre, key: "id"
        }
    }
}, { sequelize, timestamps: true })

Videogame.belongsToMany(Genre, { through: VideogameGenre, foreignKey: "VideogameId" });
Genre.belongsToMany(Videogame, { through: VideogameGenre, foreignKey: "GenreId" });