import { Request, Response, NextFunction } from "express";
import { Videogame, VideogameInput } from "../../models/Videogame";
import { Genre } from "../../models/Genre";
import { Platform } from "../../models/Platform";
import { ClientError } from "../../utils/errors";

const modifyGame = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const params: VideogameInput = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        launch: req.body.launch,
        rating: req.body.rating,
        img: req.body.img
    }
    let game = await Videogame.findByPk(id);
    if (!game) {
        throw new ClientError(404, `The game cannot found on the database`);
    }
    req.body.genres.map(async (e: string) => {
        const genre = await Genre.findOrCreate({ where: { name: e } });
        game?.addGenre(genre[0].dataValues.id);
    });
    req.body.platforms.map(async (e: string) => {
        const platform = await Platform.findOrCreate({ where: { name: e } });
        game?.addPlatform(platform[0].dataValues.id);
    });
    let message = await Videogame.update(params, { where: {id: params.id} });
    return res.status(200).json({ message: `The game ${params.name} was successfully modified. ${message}` });
}

export { modifyGame };