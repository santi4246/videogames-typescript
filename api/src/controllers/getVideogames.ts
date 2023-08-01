import { Request, Response, NextFunction } from "express";
const { APIKEY } = process.env;

const getVideogames = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Api key: ", APIKEY);
    return res.status(200).json({ message: `Videogames Routes` });
}

export { getVideogames };