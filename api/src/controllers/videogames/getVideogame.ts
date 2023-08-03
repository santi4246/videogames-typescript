import { Request, Response, NextFunction } from "express";
import axios from "axios";
const { APIKEY } = process.env;

interface Game {
    id: string;
    name: string;
    launch: string;
    rating: string;
    description: string;
    genres: string[];
    platforms: string[];
    img: string;
}

const getVideogame = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    let options = {headers: {"Accept-Encoding": "gzip,deflate,compress"}};
    let game: Game = {id: "", name: "", launch: "", rating: "", description: "", genres: [""], platforms: [""], img: ""};
    const api = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`, options);
    game = {
        id: api.data.id,
        name: api.data.name,
        launch: api.data.launch,
        rating: api.data.rating,
        description: api.data.description,
        genres: api.data.genres.map((e: any) => e.name),
        platforms: api.data.platforms.map((e: any) => e.platform.name),
        img: api.data.background_image
    }
    return res.status(200).json(game);
}

export { getVideogame };