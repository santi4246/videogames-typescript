import { Request, Response, NextFunction } from "express";
import { Videogame } from "../../models/Videogame";

const deleteGame = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
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