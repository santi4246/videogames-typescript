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
exports.modifyGame = void 0;
const Videogame_1 = require("../../models/Videogame");
const Genre_1 = require("../../models/Genre");
const Platform_1 = require("../../models/Platform");
const errors_1 = require("../../utils/errors");
const Videogame_Genre_1 = require("../../models/Videogame_Genre");
const Videogame_Platform_1 = require("../../models/Videogame_Platform");
const modifyGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const params = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        launch: req.body.launch,
        rating: req.body.rating,
        img: req.body.img
    };
    let game = yield Videogame_1.Videogame.findByPk(id);
    if (!game) {
        throw new errors_1.ClientError(404, `The game cannot found on the database`);
    }
    if (req.body.genres) {
        const genres = yield Videogame_Genre_1.VideogameGenre.findAll({ where: { VideogameId: id } });
        genres.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            yield Genre_1.Genre.destroy({ where: { id: e.GenreId } });
        }));
        req.body.genres.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            const genreDB = yield Genre_1.Genre.create({ name: e });
            yield (game === null || game === void 0 ? void 0 : game.addGenre(genreDB.dataValues.id));
        }));
    }
    if (req.body.platforms) {
        const platforms = yield Videogame_Platform_1.VideogamePlatform.findAll({ where: { VideogameId: id } });
        platforms.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            yield Platform_1.Platform.destroy({ where: { id: e.PlatformId } });
        }));
        req.body.platforms.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            const platformDB = yield Platform_1.Platform.create({ name: e });
            yield (game === null || game === void 0 ? void 0 : game.addPlatform(platformDB.dataValues.id));
        }));
    }
    let message = yield Videogame_1.Videogame.update(params, { where: { id: params.id } });
    return res.status(200).json({ message: `The game ${params.name} was successfully modified. ${message}` });
});
exports.modifyGame = modifyGame;
/*
Al modificar un registro, sería prudente también eliminar todos los registros asociados a dicho elemento,
para luego crear y asociar los registros al elemento que se intenta modificar. Esto incluye a los géneros y plataformas.
De esta manera no quedarían registros desasociados.
Ej: Se crea un registro con 3 plataformas. Luego se modifica pasandole 1 sola plataforma como argumento. Las 2 restantes
correspondería que fueran eliminadas ya que no se encuentran asociadas al elemento modificado. De esta manera se optimiza
la Base de Datos.
 */ 
