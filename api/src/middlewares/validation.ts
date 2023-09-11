import { Request, Response, NextFunction } from "express";
import { ClientError } from "../utils/errors";

export function validate (req: Request, res: Response, next: NextFunction) {
    const { name, launch, rating, description, genres, platforms, img } = req.body;
    if (name && launch && rating && description && genres && platforms && img) {
        next();
    }
    else {
        throw new ClientError(401, `Some properties are missing. Check name, launch, rating, description, genres, platforms or img`);
    }
}