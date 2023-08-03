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
const axios_1 = __importDefault(require("axios"));
const { APIKEY } = process.env;
const getVideogame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let options = { headers: { "Accept-Encoding": "gzip,deflate,compress" } };
    let game = { id: "", name: "", launch: "", rating: "", description: "", genres: [""], platforms: [""], img: "" };
    const api = yield axios_1.default.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`, options);
    game = {
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
});
exports.getVideogame = getVideogame;
