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
        yield Genre_1.Genre.create({ name: genre });
    }));
    yield Promise.all(genres);
    genres = yield Genre_1.Genre.findAll();
    genres.map((genre) => __awaiter(void 0, void 0, void 0, function* () {
        yield game.addGenre(genre.dataValues.id);
    }));
    // Crea los registros y los asocia pero no devuelve los resultados incluidos
    // let Game = await Videogame.findOne({ where: { name: game.name }, include: Genre });
    let Game = yield Videogame_1.Videogame.findAll({ include: Genre_1.Genre });
    return res.status(201).json(Game);
});
exports.addGame = addGame;
