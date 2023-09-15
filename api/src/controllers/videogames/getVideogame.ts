import { Request, Response, NextFunction } from "express";
import { validate as uuidValidate } from "uuid";
import axios from "axios";
import { ClientError } from "../../utils/errors";
import { Videogame } from "../../models/Videogame";
import { Genre } from "../../models/Genre";
import { Platform } from "../../models/Platform";
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
    // Validate uuid for searching Database or Api
    try {
        if (uuidValidate(id)) {
            const db = await Videogame.findByPk(id, {include: [{
                model: Genre, as: "genres"
            }, {
                model: Platform, as: "platforms"
            }]});
            if (db) {
                const game: Game = {
                    id: db.id,
                    name: db.name,
                    launch: String(db.launch),
                    rating: String(db.rating),
                    description: db.description,
                    genres: db.genres.map((e: any) => e.name),
                    platforms: db.platforms.map((e: any) => e.name),
                    img: db.img
                }
                return res.status(200).json(game);
            }
            else {
                throw new ClientError(404, `Could not found the game`);
            }                
        }
        else {
            const api = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`, options);
            const game: Game = {
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
    } catch (error) {
        return res.status(404).json({ message: `Could not found the game in the Database or parameters are wrong` });
    }    
}

export { getVideogame };