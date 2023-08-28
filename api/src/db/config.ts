import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const DB_URL = process.env.DB_URL;

const sequelize: Sequelize = new Sequelize(DB_URL, {
    logging: false,
    native: false
});

export default sequelize;