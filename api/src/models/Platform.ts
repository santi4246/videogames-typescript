import { Model, DataTypes, Optional, BelongsToManyAddAssociationMixin } from "sequelize";
import sequelize from "../db/config";
import { Videogame } from "./Videogame";

export interface PlatformAttributes {
    id: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface PlatformInput extends Optional <PlatformAttributes, "id"> {}
export interface PlatformOutput extends Required <PlatformAttributes> {}

export class Platform extends Model <PlatformAttributes, PlatformInput> implements PlatformAttributes {
    declare id: string;
    declare name: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date;
    declare addGame: BelongsToManyAddAssociationMixin <Videogame, string>
}

Platform.init({
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