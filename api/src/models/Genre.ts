import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../db/config";

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