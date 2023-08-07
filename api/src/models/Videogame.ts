import { Sequelize, Model, DataTypes, Optional } from 'sequelize';

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

export interface VideogameInput extends Optional<VideogameAttributes, "id"> {}
export interface VideogameOutput extends Required<VideogameAttributes> {}

export class Videogame extends Model <VideogameAttributes, VideogameOutput> implements VideogameAttributes {
    declare id: string;
    declare name: string;
    declare description: string;
    declare launch: Date;
    declare rating: number;
    declare img: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date;
}

module.exports = (sequelize: Sequelize) => {    
    Videogame.init({
        id: {
            type: DataTypes.STRING,
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
            type: DataTypes.NUMBER,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {tableName: "videogame", sequelize, timestamps: false});
}