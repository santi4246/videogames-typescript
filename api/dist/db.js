"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
const sequelize_1 = require("sequelize");
const DB_URL = "postgres://postgres:fIJJS5X17m494kjK@db.ugoynroixtskjknvtfiv.supabase.co:6543/postgres";
exports.sequelize = new sequelize_1.Sequelize(DB_URL, {
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
