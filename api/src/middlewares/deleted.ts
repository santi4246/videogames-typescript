import { Request, Response, NextFunction } from "express";
import { ClientError } from "../utils/errors";
import { validate as uuidValidate } from "uuid";

export function deleted (req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (uuidValidate(id)) {
        next();
    }
    else {
        throw new ClientError(401, `This kind of games cannot deleted from API`);
    }
}