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
exports.deleteGame = void 0;
const Videogame_1 = require("../../models/Videogame");
const Genre_1 = require("../../models/Genre");
const Videogame_Genre_1 = require("../../models/Videogame_Genre");
const Videogame_Platform_1 = require("../../models/Videogame_Platform");
const Platform_1 = require("../../models/Platform");
const deleteGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const genres = yield Videogame_Genre_1.VideogameGenre.findAll({ where: { VideogameId: id } });
        genres.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            yield Genre_1.Genre.destroy({ where: { id: e.GenreId } });
        }));
        const platforms = yield Videogame_Platform_1.VideogamePlatform.findAll({ where: { VideogameId: id } });
        platforms.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            yield Platform_1.Platform.destroy({ where: { id: e.PlatformId } });
        }));
        const logDeleted = yield Videogame_1.Videogame.destroy({ where: { id: id } });
        return res.status(200).json({ message: `deleted row(s): ${logDeleted}` });
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.deleteGame = deleteGame;
/*
Al borrar un registro se debería eliminar todos los registros asociados a dicho elemento.
Por lo tanto sería prudente también eliminar los géneros y las plataformas asociados a dicho elemento.
 */ 
