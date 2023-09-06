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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideogame = void 0;
const uuid_1 = require("uuid");
const axios_1 = __importDefault(require("axios"));
const Videogame_1 = require("../../models/Videogame");
const Genre_1 = require("../../models/Genre");
const Platform_1 = require("../../models/Platform");
const { APIKEY } = process.env;
const getVideogame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let options = { headers: { "Accept-Encoding": "gzip,deflate,compress" } };
    let game = { id: "", name: "", launch: "", rating: "", description: "", genres: [""], platforms: [""], img: "" };
    // Validate uuid for searching Database or Api
    try {
        if ((0, uuid_1.validate)(id)) {
            const db = yield Videogame_1.Videogame.findByPk(id, { include: [{
                        model: Genre_1.Genre, as: "genres"
                    }, {
                        model: Platform_1.Platform, as: "platforms"
                    }] });
            if (db) {
                const game = {
                    id: db.id,
                    name: db.name,
                    launch: String(db.launch),
                    rating: String(db.rating),
                    description: db.description,
                    genres: db.genres.map((e) => e.name),
                    platforms: db.platforms.map((e) => e.name),
                    img: db.img
                };
                return res.status(200).json(game);
            }
        }
        else {
            const api = yield axios_1.default.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`, options);
            const game = {
                id: api.data.id,
                name: api.data.name,
                launch: api.data.launch,
                rating: api.data.rating,
                description: api.data.description,
                genres: api.data.genres.map((e) => e.name),
                platforms: api.data.platforms.map((e) => e.platform.name),
                img: api.data.background_image
            };
            return res.status(200).json(game);
        }
    }
    catch (error) {
        return res.status(404).json({ message: `Could not found the game in the Database or parameters are wrong` });
    }
});
exports.getVideogame = getVideogame;
