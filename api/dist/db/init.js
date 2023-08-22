"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Videogame_1 = require("../models/Videogame");
const Genre_1 = require("../models/Genre");
const Videogame_Genre_1 = require("../models/Videogame_Genre");
const dbInit = () => Promise.all([
    Videogame_1.Videogame.sync({ force: true }),
    Genre_1.Genre.sync({ force: true }),
    Videogame_Genre_1.VideogameGenre.sync({ force: true })
]);
exports.default = dbInit;