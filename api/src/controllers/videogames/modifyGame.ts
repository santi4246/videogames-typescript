import { Request, Response, NextFunction } from "express";
import { Videogame, VideogameInput } from "../../models/Videogame";
import { Genre } from "../../models/Genre";
import { Platform } from "../../models/Platform";
import { ClientError } from "../../utils/errors";
import { VideogameGenre } from "../../models/Videogame_Genre";
import { VideogamePlatform } from "../../models/Videogame_Platform";

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
    if (req.body.genres) {
        const genres = await VideogameGenre.findAll({ where: { VideogameId: id } });
        genres.map(async (e: VideogameGenre) => {
            await Genre.destroy({ where: { id: e.GenreId } });
        });
        req.body.genres.map(async (e: string) => {
            const genreDB = await Genre.create({ name: e });
            await game?.addGenre(genreDB.dataValues.id);
        });
    }
    if (req.body.platforms) {
        const platforms = await VideogamePlatform.findAll({ where: { VideogameId: id } });
        platforms.map(async (e: VideogamePlatform) => {
            await Platform.destroy({ where: { id: e.PlatformId } });
        });
        req.body.platforms.map(async (e: string) => {
            const platformDB = await Platform.create({ name: e });
            await game?.addPlatform(platformDB.dataValues.id);
        });
    }
    let message = await Videogame.update(params, { where: {id: params.id} });
    return res.status(200).json({ message: `The game ${params.name} was successfully modified. ${message}` });
}

export { modifyGame };

/* 
Al modificar un registro, sería prudente también eliminar todos los registros asociados a dicho elemento,
para luego crear y asociar los registros al elemento que se intenta modificar. Esto incluye a los géneros y plataformas.
De esta manera no quedarían registros desasociados. 
Ej: Se crea un registro con 3 plataformas. Luego se modifica pasandole 1 sola plataforma como argumento. Las 2 restantes 
correspondería que fueran eliminadas ya que no se encuentran asociadas al elemento modificado. De esta manera se optimiza
la Base de Datos.
 */