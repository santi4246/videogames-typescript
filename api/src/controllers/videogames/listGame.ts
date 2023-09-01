import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { Videogame } from "../../models/Videogame";
import { Genre } from "../../models/Genre";
import { Platform } from "../../models/Platform";

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

const listGame = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const gameDB = await Videogame.findByPk(id, {include: [{
        model: Genre, as: "genres"
    }, {
        model: Platform, as: "platforms"
    }]});
    const Game = {
        id: gameDB?.id,
        name: gameDB?.name,
        launch: String(gameDB?.launch),
        rating: String(gameDB?.rating),
        description: gameDB?.description,
        genres: gameDB?.genres.map(e => e.name),
        platforms: gameDB?.platforms.map(e => e.name),
        img: gameDB?.img
    }
    return res.status(200).json(Game);
}

export { listGame };