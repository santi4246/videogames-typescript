import { Model, DataTypes, Optional, BelongsToManyAddAssociationMixin } from "sequelize";
import sequelize from "../db/config";
import { Videogame } from "./Videogame";

export interface GenreAttributes {
    id: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface GenreInput extends Optional <GenreAttributes, "id"> {}
export interface GenreOuput extends Required <GenreAttributes> {}

export class Genre extends Model <GenreAttributes, GenreInput> implements GenreAttributes {
    declare id: string;
    declare name: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date;
    declare addGame: BelongsToManyAddAssociationMixin <Videogame, string>
}

Genre.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, timestamps: true, paranoid: true });