import { Sequelize, Model, DataTypes, Optional } from "sequelize";

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

module.exports = (sequelize: Sequelize) => {
    Genre.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {tableName: "genre", sequelize, timestamps: false});
}