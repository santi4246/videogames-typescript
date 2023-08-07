import { Sequelize, Optional, Model, DataTypes } from "sequelize";

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

module.exports = (sequelize: Sequelize) => {
    VideogameGenre.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        VideogameId: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        GenreId: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        }
    }, {tableName: "Videogame_Genre", sequelize, timestamps: false})    
}