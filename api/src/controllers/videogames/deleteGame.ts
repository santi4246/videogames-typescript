import { Request, Response, NextFunction } from "express";
import { Videogame } from "../../models/Videogame";
import { Genre } from "../../models/Genre";
import { VideogameGenre } from "../../models/Videogame_Genre";
import { VideogamePlatform } from "../../models/Videogame_Platform";
import { Platform } from "../../models/Platform";

const deleteGame = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const genres = await VideogameGenre.findAll({ where: { VideogameId: id } });        
        genres.map(async (e: VideogameGenre) => {
            await Genre.destroy({ where: { id: e.GenreId } });
        });
        const platforms = await VideogamePlatform.findAll({ where: { VideogameId: id } });
        platforms.map(async (e: VideogamePlatform) => {
            await Platform.destroy({ where: { id: e.PlatformId } });
        });
        const logDeleted = await Videogame.destroy({ where: {id: id} });
        return res.status(200).json({ message: `deleted row(s): ${logDeleted}` });        
    } catch (error) {
        return res.status(404).json(error);
    }
}

export { deleteGame };

/* 
Al borrar un registro se debería eliminar todos los registros asociados a dicho elemento.
Por lo tanto sería prudente también eliminar los géneros y las plataformas asociados a dicho elemento.
 */