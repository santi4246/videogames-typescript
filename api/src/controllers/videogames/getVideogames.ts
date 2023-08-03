import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { Videogame } from "../../db";
const { APIKEY } = process.env;

interface Game {
    id: string;
    name: string;
    launch: string;
    rating: string;
    img: string;
}

const getVideogames = async (req: Request, res: Response, next: NextFunction) => {
    let options = {headers: { "Accept-Encoding": "gzip,deflate,compress" }};
    let i: number = 0;
    let page: number = 1;
    let array: Game[] = [];
    let games = [];
    while (i < 5) {
        let info = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}&page=${page}`, options);
        info.data.results.map((element: any) => {
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
    return res.status(200).json({ data: array });
}

export { getVideogames };