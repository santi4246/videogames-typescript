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
    req.body.genres.map((e) => __awaiter(void 0, void 0, void 0, function* () {
        const genre = yield Genre_1.Genre.findOrCreate({ where: { name: e } });
        game === null || game === void 0 ? void 0 : game.addGenre(genre[0].dataValues.id);
    }));
    req.body.platforms.map((e) => __awaiter(void 0, void 0, void 0, function* () {
        const platform = yield Platform_1.Platform.findOrCreate({ where: { name: e } });
        game === null || game === void 0 ? void 0 : game.addPlatform(platform[0].dataValues.id);
    }));
    let message = yield Videogame_1.Videogame.update(params, { where: { id: params.id } });
    return res.status(200).json({ message: `The game ${params.name} was successfully modified. ${message}` });
});
exports.modifyGame = modifyGame;
