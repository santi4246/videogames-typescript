import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class Platform extends Model {
    declare id: string;
    declare name: string;
}

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
}, {tableName: "platform", sequelize, timestamps: false});