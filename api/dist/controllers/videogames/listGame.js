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
exports.listGame = void 0;
const Videogame_1 = require("../../models/Videogame");
const Genre_1 = require("../../models/Genre");
const Platform_1 = require("../../models/Platform");
const listGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const gameDB = yield Videogame_1.Videogame.findByPk(id, { include: [{
                model: Genre_1.Genre, as: "genres"
            }, {
                model: Platform_1.Platform, as: "platforms"
            }] });
    const Game = {
        id: gameDB === null || gameDB === void 0 ? void 0 : gameDB.id,
        name: gameDB === null || gameDB === void 0 ? void 0 : gameDB.name,
        launch: String(gameDB === null || gameDB === void 0 ? void 0 : gameDB.launch),
        rating: String(gameDB === null || gameDB === void 0 ? void 0 : gameDB.rating),
        description: gameDB === null || gameDB === void 0 ? void 0 : gameDB.description,
        genres: gameDB === null || gameDB === void 0 ? void 0 : gameDB.genres.map(e => e.name),
        platforms: gameDB === null || gameDB === void 0 ? void 0 : gameDB.platforms.map(e => e.name),
        img: gameDB === null || gameDB === void 0 ? void 0 : gameDB.img
    };
    return res.status(200).json(Game);
});
exports.listGame = listGame;
