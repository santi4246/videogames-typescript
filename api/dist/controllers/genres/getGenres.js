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
exports.getGenres = void 0;
const axios_1 = __importDefault(require("axios"));
const { APIKEY } = process.env;
const getGenres = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let options = { headers: { "Accept-Encoding": "gzip,deflate,compress" } };
    const api = yield axios_1.default.get(`https://api.rawg.io/api/genres?key=${APIKEY}`, options);
    const genres = api.data.results.map((e) => e.name);
    return res.status(200).json({ data: genres });
});
exports.getGenres = getGenres;
