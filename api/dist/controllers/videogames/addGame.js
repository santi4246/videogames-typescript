"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGame = void 0;
const db_1 = require("../../db");
const addGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, launch, rating, description, genres, platforms, img } = req.body;
    let game = yield db_1.Videogame.create({ name, launch, rating, description, img });
    const genresGame = genres.map((genre) => db_1.Genre.create({ name: genre }));
    const platformsGame = platforms.map((platform) => db_1.Platform.create({ name: platform }));
    yield Promise.all(genresGame);
    yield Promise.all(platformsGame);
    const genresDB = yield db_1.Genre.findAll();
    console.log(genresDB);
    return res.status(201).json(game);
});
exports.addGame = addGame;
