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
exports.getVideogames = void 0;
const axios_1 = __importDefault(require("axios"));
const Videogame_1 = require("../../models/Videogame");
const { APIKEY } = process.env;
const getVideogames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let options = { headers: { "Accept-Encoding": "gzip,deflate,compress" } };
    let i = 0;
    let page = 1;
    let array = [];
    while (i < 5) {
        let info = yield axios_1.default.get(`https://api.rawg.io/api/games?key=${APIKEY}&page=${page}`, options);
        info.data.results.map((element) => {
            array.push({
                id: element.id,
                name: element.name,
                launch: element.released,
                rating: element.rating,
                img: element.background_image
            });
        });
        page++;
        i++;
    }
    let array2 = yield Videogame_1.Videogame.findAll();
    array2.map((e) => {
        const game = {
            id: e.id,
            name: e.name,
            launch: String(e.launch),
            rating: String(e.rating),
            img: e.img
        };
        array.unshift(game);
    });
    return res.status(200).json({ data: array });
});
exports.getVideogames = getVideogames;
