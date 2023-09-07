import { Request, Response, NextFunction } from "express";
import { ClientError } from "../utils/errors";

export function validate (req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    if (name) {
        next();
    }
    else {
        throw new ClientError(401, `Property name is missing`);
    }
}