import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const DB_URL = process.env.DB_URL;

const sequelize: Sequelize = new Sequelize(DB_URL, {
    logging: false,
    native: false
});

/* Videogame.belongsToMany(Platform, { through: "Videogame_Platform" });
Platform.belongsToMany(Videogame, { through: "Videogame_Platform" }); */

export default sequelize;