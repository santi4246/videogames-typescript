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
const uuid_1 = require("uuid");
const Videogame_1 = require("../../models/Videogame");
const Genre_1 = require("../../models/Genre");
const Platform_1 = require("../../models/Platform");
const addGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        id: (0, uuid_1.v4)(),
        name: req.body.name,
        description: req.body.description,
        launch: req.body.launch,
        rating: req.body.rating,
        img: req.body.img
    };
    let game = yield Videogame_1.Videogame.create(params);
    let genres = req.body.genres.map((genre) => __awaiter(void 0, void 0, void 0, function* () {
        const genreDB = yield Genre_1.Genre.create({ name: genre });
        yield game.addGenre(genreDB.dataValues.id);
    }));
    let platforms = req.body.platforms.map((platform) => __awaiter(void 0, void 0, void 0, function* () {
        const platformDB = yield Platform_1.Platform.create({ name: platform });
        yield game.addPlatform(platformDB.dataValues.id);
    }));
    yield Promise.all([genres, platforms]);
    return res.status(201).json({ message: `The game ${game.name} was successfully created` });
});
exports.addGame = addGame;
