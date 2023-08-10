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
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    VideogameId: {
        type: DataTypes.UUID,
        references: {
            model: Genre, key: "id"
        }
    },
    GenreId: {
        type: DataTypes.UUID,
        references: {
            model: Videogame, key: "id"
        }
    }
}, { sequelize })

Videogame.belongsToMany(Genre, { through: "Videogame_Genres", foreignKey: "GenreId" });
Genre.belongsToMany(Videogame, { through: "Videogame_Genres", foreignKey: "VideogameId" });