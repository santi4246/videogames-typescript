import { Request, Response, NextFunction } from "express";
import { Videogame, Genre, Platform } from "../../db";


const addGame = async (req: Request, res: Response, next: NextFunction) => {
    const { name, launch, rating, description, genres, platforms, img } = req.body;
    let game = await Videogame.create({ name, launch, rating, description, img });
    const genresGame: string[] = genres.map((genre: string) => Genre.create({ name: genre }));
    const platformsGame: string[] = platforms.map((platform: string) => Platform.create({ name: platform }));
    await Promise.all(genresGame);
    await Promise.all(platformsGame);
    const genresDB = await Genre.findAll();    
    for (let i = 0; i < genresDB.length; i++) {
        // await game.addGenre(genresDB[i].dataValues.id);
    }
    return res.status(201).json(game);
}

export { addGame };