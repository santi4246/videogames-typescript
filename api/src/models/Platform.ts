import { Sequelize, Model, DataTypes } from "sequelize";

class Platform extends Model {
    declare id: string;
    declare name: string;
}

module.exports = (sequelize: Sequelize) => {
    Platform.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {tableName: "platform", sequelize});
}