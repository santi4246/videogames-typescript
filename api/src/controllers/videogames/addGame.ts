import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { Videogame, VideogameInput } from "../../models/Videogame";
import { Genre } from "../../models/Genre";


const addGame = async (req: Request, res: Response, next: NextFunction) => {    
    const params: VideogameInput = { 
        id: uuidv4(), 
        name: req.body.name, 
        description: req.body.description,
        launch: req.body.launch,
        rating: req.body.rating,
        img: req.body.img
     };
    let game = await Videogame.create(params);
    const genresGame: string[] = req.body.genres.map((genre: string) => Genre.create({ id: uuidv4(), name: genre }));
    await Promise.all(genresGame);
    const genresDB = await Genre.findAll();    
    for (let i = 0; i < genresDB.length; i++) {
        await game.addGenre(genresDB[i].id);
    }
    return res.status(201).json(game);
}

export { addGame };