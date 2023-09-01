import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { Videogame, VideogameInput } from "../../models/Videogame";
import { Genre } from "../../models/Genre";
import { Platform } from "../../models/Platform";


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
    let genres = req.body.genres.map(async (genre: string) => {
        const genreDB = await Genre.create({ name: genre });
        await game.addGenre(genreDB.dataValues.id);
    });
    let platforms = req.body.platforms.map(async (platform: string) => {
        const platformDB = await Platform.create({ name: platform });
        await game.addPlatform(platformDB.dataValues.id);
    });
    await Promise.all([genres, platforms]);
    let Game = await Videogame.findByPk(game.id, { 
        include: [{ 
            model: Genre, as: "genres"
        }, {
            model: Platform, as: "platforms"
        }]
    });
    return res.status(201).json(Game);
}

export { addGame };