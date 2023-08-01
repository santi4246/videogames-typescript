import { Sequelize, Model, DataTypes } from 'sequelize';

class Videogame extends Model {
    declare id: string;
    declare name: string;
    declare description: string;
    declare launch: string;
    declare rating: number;
    declare img: string;
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
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {tableName: "videogame", sequelize});
}