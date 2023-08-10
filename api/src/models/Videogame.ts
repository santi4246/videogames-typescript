import { Model, DataTypes, Optional, BelongsToManyAddAssociationMixin } from 'sequelize';
import { Genre } from "./Genre";
import sequelize from "../db/config";

export interface VideogameAttributes {
    id: string;
    name: string;
    description: string;
    launch: Date;
    rating: number;
    img: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface VideogameInput extends Optional<VideogameAttributes, "id"> { }
export interface VideogameOutput extends Required<VideogameAttributes> { }

export class Videogame extends Model <VideogameAttributes, VideogameInput> implements VideogameAttributes {
    declare id: string;
    declare name: string;
    declare description: string;
    declare launch: Date;
    declare rating: number;
    declare img: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date;
    declare addGenre: BelongsToManyAddAssociationMixin <Genre, string>    
}

Videogame.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    launch: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "videogame", sequelize, timestamps: true, paranoid: true });