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