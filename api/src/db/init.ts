import { Videogame } from "../models/Videogame";
import { Genre } from "../models/Genre";
import { VideogameGenre } from "../models/Videogame_Genre";
import { Platform } from "../models/Platform";
import { VideogamePlatform } from "../models/Videogame_Platform";

const dbInit = async () => await Promise.all([
    Videogame.sync({ force: true }),
    Genre.sync({ force: true }),
    VideogameGenre.sync({ force: true }),
    Platform.sync({ force: true }),
    VideogamePlatform.sync({ force: true })
]);

export default dbInit;