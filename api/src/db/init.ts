import { Videogame } from "../models/Videogame";
import { Genre } from "../models/Genre";
import { VideogameGenre } from "../models/Videogame_Genre";

const dbInit = () => Promise.all([
    Videogame.sync({ force: true }),
    Genre.sync({ force: true }),
    VideogameGenre.sync({ force: true })
]);

export default dbInit;