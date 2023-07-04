import { Sequelize, Model, DataTypes } from "sequelize";

class Genre extends Model {
    declare id: string;
    declare name: string;
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
    }, {tableName: "genre", sequelize});
}