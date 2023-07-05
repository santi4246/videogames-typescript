import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

const DB_URL: string = "postgres://postgres:fIJJS5X17m494kjK@db.ugoynroixtskjknvtfiv.supabase.co:6543/postgres";

export const sequelize: Sequelize = new Sequelize(DB_URL, {
    logging: false,
    native: false
});

/* const basename = path.basename(__filename);
const modelDefiners: any[] = [];

fs.readdirSync(path.join(__dirname, "/models"))
.filter(file => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
.forEach(file => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
});

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(entry => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
export let models = {...sequelize.models};
models = Object.fromEntries(capsEntries);

const { Videogame, Genre, Platform } = models;

Videogame.belongsToMany(Genre, { through: "Videogame_Genre" });
Genre.belongsToMany(Videogame, { through: "Videogame_Genre" });
Videogame.belongsToMany(Platform, { through: "Videogame_Platform" });
Platform.belongsToMany(Videogame, { through: "Videogame_Platform" }); */