import { Request, Response, NextFunction } from "express";
import axios from "axios";
const { APIKEY } = process.env;

interface Genre {
    name: string
}

const getGenres = async (req: Request, res: Response, next: NextFunction) => {
    let options = { headers: {"Accept-Encoding": "gzip,deflate,compress"} }
    const api = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`, options)
    const genres = api.data.results.map((e: any) => e.name);
    return res.status(200).json({ data: genres });
};

export { getGenres };