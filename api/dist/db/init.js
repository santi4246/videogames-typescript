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
const Videogame_1 = require("../models/Videogame");
const Genre_1 = require("../models/Genre");
const Videogame_Genre_1 = require("../models/Videogame_Genre");
const Platform_1 = require("../models/Platform");
const Videogame_Platform_1 = require("../models/Videogame_Platform");
const dbInit = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Promise.all([
        Videogame_1.Videogame.sync({ force: true }),
        Genre_1.Genre.sync({ force: true }),
        Videogame_Genre_1.VideogameGenre.sync({ force: true }),
        Platform_1.Platform.sync({ force: true }),
        Videogame_Platform_1.VideogamePlatform.sync({ force: true })
    ]);
});
exports.default = dbInit;
