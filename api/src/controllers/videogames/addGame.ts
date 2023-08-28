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
    let genres = req.body.genres.map(async (genre: string) => {
        await Genre.create({ name: genre });        
    });
    await Promise.all(genres);
    genres = await Genre.findAll();
    genres.map(async (genre: Genre) => {
        await game.addGenre(genre.dataValues.id);
    });
    // Crea los registros y los asocia pero no devuelve los resultados incluidos
    let Game = await Videogame.findByPk(game.id, { 
        include: [{ 
            model: Genre, as: "genres"
        }]        
    });
    return res.status(201).json(Game);
}

export { addGame };